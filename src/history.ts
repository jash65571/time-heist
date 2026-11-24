/** All history timestamps are elapsed seconds, never wall-clock milliseconds. */
export interface MemoryObject {
  id: string;
  /** Index of a shared image asset (0, 1, or 2). */
  asset: number;
  /** Stage-relative coordinates and width, expressed from 0 to 1. */
  x: number;
  y: number;
  width: number;
  rotation: number;
  visible: boolean;
  recoveredFrom?: number;
}

export interface CanvasState {
  theme: "dark" | "light";
  headline: string;
  objects: MemoryObject[];
}

export interface HistoryEntry {
  id: string;
  time: number;
  state: CanvasState;
  label: string;
}

export interface Position {
  x: number;
  y: number;
}

/** Snapshots must own their objects so later edits cannot rewrite the past. */
export function cloneState(state: CanvasState): CanvasState {
  return {
    theme: state.theme,
    headline: state.headline,
    objects: state.objects.map((object) => ({ ...object })),
  };
}

const originalObject: MemoryObject = {
  id: "memory-1",
  asset: 0,
  x: 0.57,
  y: 0.38,
  width: 0.34,
  rotation: -7,
  visible: true,
};

const firstState: CanvasState = {
  theme: "light",
  headline: "Keep this moment.",
  objects: [{ ...originalObject }],
};

const changedState: CanvasState = {
  theme: "dark",
  headline: "Everything leaves a trace.",
  objects: [{ ...originalObject }],
};

const removedState: CanvasState = {
  ...changedState,
  objects: [{ ...originalObject, visible: false }],
};

/** The initial live canvas is the present, 28 seconds into the recorded demo. */
export const initialState: CanvasState = cloneState(removedState);

export const seededHistory: HistoryEntry[] = [
  {
    id: "history-1",
    time: 0,
    label: "A moment kept",
    state: cloneState(firstState),
  },
  {
    id: "history-2",
    time: 12,
    label: "A different light",
    state: cloneState(changedState),
  },
  {
    id: "history-3",
    time: 22,
    label: "The photo disappeared",
    state: cloneState(removedState),
  },
  { id: "history-4", time: 28, label: "Now", state: cloneState(removedState) },
];

/**
 * Return the last snapshot at or before a time, with no interpolation.
 * Times outside the recording use its nearest endpoint. The last entry wins
 * when timestamps match, including recordings loaded in a different order.
 */
export function getStateAt(
  entries: readonly HistoryEntry[],
  time: number,
): CanvasState {
  if (Number.isNaN(time)) throw new RangeError("History time must not be NaN.");
  if (entries.length === 0) return cloneState(initialState);

  let earliest: HistoryEntry | undefined;
  let selected: HistoryEntry | undefined;

  for (const entry of entries) {
    if (!Number.isFinite(entry.time)) continue;
    if (!earliest || entry.time <= earliest.time) earliest = entry;
    if (entry.time <= time && (!selected || entry.time >= selected.time))
      selected = entry;
  }

  return cloneState((selected ?? earliest)?.state ?? initialState);
}

function finiteNumber(value: number, label: string): number {
  if (!Number.isFinite(value)) throw new RangeError(`${label} must be finite.`);
  return value;
}

/** Append an owned snapshot; backdated times are clamped to the latest entry. */
export function appendHistory(
  entries: readonly HistoryEntry[],
  state: CanvasState,
  label: string,
  time: number,
): HistoryEntry[] {
  const requestedTime = finiteNumber(time, "History time");
  const latestTime = entries.reduce(
    (latest, entry) =>
      Number.isFinite(entry.time) ? Math.max(latest, entry.time) : latest,
    0,
  );
  const existingIds = new Set(entries.map((entry) => entry.id));
  let nextId = entries.length + 1;
  while (existingIds.has(`history-${nextId}`)) nextId += 1;

  return [
    ...entries,
    {
      id: `history-${nextId}`,
      time: Math.max(0, latestTime, requestedTime),
      label,
      state: cloneState(state),
    },
  ];
}

/**
 * Bring a historical object into the live canvas as a new object. Its source
 * remains untouched, so the lens can keep showing the real recorded state.
 */
export function restoreObject(
  current: CanvasState,
  historicalObject: MemoryObject,
  position: Position,
  fromTime: number,
): CanvasState {
  const x = Math.min(1, Math.max(0, finiteNumber(position.x, "Object x")));
  const y = Math.min(1, Math.max(0, finiteNumber(position.y, "Object y")));
  const recoveredFrom = Math.max(0, finiteNumber(fromTime, "Source time"));
  const existingIds = new Set(current.objects.map((object) => object.id));
  let copy = 1;
  let id = `${historicalObject.id}-recovered-${copy}`;
  while (existingIds.has(id) || id === historicalObject.id) {
    copy += 1;
    id = `${historicalObject.id}-recovered-${copy}`;
  }

  const nextState = cloneState(current);
  nextState.objects.push({
    ...historicalObject,
    id,
    x,
    y,
    visible: true,
    recoveredFrom,
  });
  return nextState;
}

/** A visible past object is recoverable when its original is missing now. */
export function hasRecoverableObject(
  current: CanvasState,
  historical: CanvasState,
): boolean {
  const visibleNow = new Set(
    current.objects
      .filter((object) => object.visible)
      .map((object) => object.id),
  );
  return historical.objects.some(
    (object) => object.visible && !visibleNow.has(object.id),
  );
}
