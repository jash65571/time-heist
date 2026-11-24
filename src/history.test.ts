import { describe, expect, it } from "vitest";
import {
  appendHistory,
  cloneState,
  getStateAt,
  hasRecoverableObject,
  initialState,
  restoreObject,
  seededHistory,
  type CanvasState,
  type HistoryEntry,
} from "./history";

describe("recorded history", () => {
  it("keeps the original asset and geometry before and after deletion", () => {
    expect(seededHistory.map((entry) => entry.time)).toEqual([0, 12, 22, 28]);
    const first = getStateAt(seededHistory, 0);
    expect(first.theme).toBe("light");
    expect(first.headline).toBe("Keep this moment.");
    expect(first.objects[0]).toMatchObject({
      id: "memory-1",
      asset: 0,
      x: 0.57,
      y: 0.38,
      width: 0.34,
      visible: true,
    });
    expect(initialState).toEqual(getStateAt(seededHistory, 28));
    expect(initialState.objects[0]).toEqual({
      ...first.objects[0],
      visible: false,
    });
  });

  it("selects real snapshots at change boundaries without interpolating deletion", () => {
    expect(getStateAt(seededHistory, 11.999).theme).toBe("light");
    expect(getStateAt(seededHistory, 12).theme).toBe("dark");
    expect(getStateAt(seededHistory, 12).headline).toBe(
      "Everything leaves a trace.",
    );
    expect(getStateAt(seededHistory, 21.999).objects[0].visible).toBe(true);
    expect(getStateAt(seededHistory, 22).objects[0].visible).toBe(false);
  });

  it("clamps queries to endpoints and isolates returned objects from the archive", () => {
    const before = getStateAt(seededHistory, -Infinity);
    const after = getStateAt(seededHistory, Infinity);
    expect(before).toEqual(seededHistory[0].state);
    expect(after).toEqual(initialState);
    before.objects[0].asset = 2;
    before.objects[0].visible = false;
    expect(getStateAt(seededHistory, 0).objects[0].asset).toBe(0);
    expect(getStateAt(seededHistory, 0).objects[0].visible).toBe(true);
  });

  it("handles unordered loaded entries and resolves equal times to the last entry", () => {
    const entries: HistoryEntry[] = [
      { ...seededHistory[2] },
      { ...seededHistory[0] },
      { ...seededHistory[1] },
      {
        ...seededHistory[1],
        state: { ...cloneState(initialState), headline: "A revised snapshot" },
      },
    ];
    expect(getStateAt(entries, 15).headline).toBe("A revised snapshot");
    expect(getStateAt(entries, 23).objects[0].visible).toBe(false);
  });

  it("returns an owned present state for an empty archive and rejects NaN queries", () => {
    const fallback = getStateAt([], 0);
    fallback.objects[0].visible = true;
    expect(initialState.objects[0].visible).toBe(false);
    expect(() => getStateAt(seededHistory, NaN)).toThrow(RangeError);
  });
});

describe("new history entries", () => {
  it("clamps a backdated mutation forward so it becomes the latest same-time state", () => {
    const state = { ...cloneState(initialState), headline: "A new present" };
    const entries = appendHistory(seededHistory, state, "Headline changed", 5);
    expect(entries).toHaveLength(5);
    expect(entries[4].time).toBe(28);
    expect(getStateAt(entries, 28).headline).toBe("A new present");
    expect(seededHistory).toHaveLength(4);
    state.headline = "Changed after saving";
    state.objects[0].x = 0;
    expect(entries[4].state.headline).toBe("A new present");
    expect(entries[4].state.objects[0].x).toBe(0.57);
  });

  it("creates deterministic unique IDs even when loaded entries use sparse IDs", () => {
    const entries = [{ ...seededHistory[0], id: "history-2" }];
    const appended = appendHistory(entries, initialState, "Saved", 30);
    expect(appended[1].id).toBe("history-3");
    expect(appendHistory(entries, initialState, "Saved", 30)).toEqual(appended);
    expect(appendHistory([], initialState, "Saved", -10)[0].time).toBe(0);
  });

  it("rejects timestamps that could break timeline ordering", () => {
    for (const time of [NaN, Infinity, -Infinity]) {
      expect(() =>
        appendHistory(seededHistory, initialState, "Invalid", time),
      ).toThrow(RangeError);
    }
  });
});

describe("bringing an object into the present", () => {
  it("adds a distinct live object and preserves its source appearance and provenance", () => {
    const historical = getStateAt(seededHistory, 12).objects[0];
    const restored = restoreObject(
      initialState,
      historical,
      { x: 0.25, y: 0.65 },
      12,
    );
    const recovered = restored.objects[1];
    expect(recovered).toEqual({
      ...historical,
      id: "memory-1-recovered-1",
      x: 0.25,
      y: 0.65,
      visible: true,
      recoveredFrom: 12,
    });
    expect(restored.theme).toBe(initialState.theme);
    expect(restored.headline).toBe(initialState.headline);
    expect(restored.objects[0].visible).toBe(false);
    recovered.asset = 2;
    restored.objects[0].x = 0;
    expect(historical.asset).toBe(0);
    expect(initialState.objects[0].x).toBe(0.57);
    expect(initialState.objects).toHaveLength(1);
  });

  it("keeps repeated recoveries distinct and constrains drop positions to the stage", () => {
    const historical = getStateAt(seededHistory, 0).objects[0];
    const first = restoreObject(
      initialState,
      historical,
      { x: -0.2, y: 1.4 },
      0,
    );
    const second = restoreObject(first, historical, { x: 0.6, y: 0.7 }, 0);
    expect(first.objects[1]).toMatchObject({ x: 0, y: 1 });
    expect(second.objects[2].id).toBe("memory-1-recovered-2");
    expect(new Set(second.objects.map((object) => object.id)).size).toBe(3);
  });

  it("rejects invalid drops before changing any live state", () => {
    const historical = getStateAt(seededHistory, 0).objects[0];
    expect(() =>
      restoreObject(initialState, historical, { x: NaN, y: 0.5 }, 0),
    ).toThrow(RangeError);
    expect(() =>
      restoreObject(initialState, historical, { x: 0.5, y: Infinity }, 0),
    ).toThrow(RangeError);
    expect(() =>
      restoreObject(initialState, historical, { x: 0.5, y: 0.5 }, Infinity),
    ).toThrow(RangeError);
    expect(initialState.objects).toHaveLength(1);
  });

  it("finds visible past objects that are absent or hidden in the present", () => {
    const past = getStateAt(seededHistory, 12);
    const empty: CanvasState = { ...cloneState(initialState), objects: [] };
    expect(hasRecoverableObject(initialState, past)).toBe(true);
    expect(hasRecoverableObject(empty, past)).toBe(true);
    expect(hasRecoverableObject(past, past)).toBe(false);
    expect(hasRecoverableObject(empty, initialState)).toBe(false);
  });
});
