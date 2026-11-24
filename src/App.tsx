import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  appendHistory,
  cloneState,
  getStateAt,
  initialState,
  restoreObject,
  seededHistory,
  type CanvasState,
  type HistoryEntry,
  type MemoryObject,
} from "./history";
import { createScene } from "./scene";

const ART = `${import.meta.env.BASE_URL}memory.webp`;
const REPO = "https://github.com/jash65571/time-heist";
const STORE = "time-heist-v1";
type Lens = { x: number; y: number; radius: number };
type Drag = {
  object: MemoryObject;
  x: number;
  y: number;
  source: "past" | "now";
  startX: number;
  startY: number;
};
const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));
const stamp = (seconds: number) =>
  `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
const retainHistory = (entries: HistoryEntry[]) =>
  entries.length <= 80
    ? entries
    : [...entries.slice(0, 4), ...entries.slice(-76)];

function readSession(): {
  state: CanvasState;
  entries: HistoryEntry[];
  time: number;
} | null {
  try {
    const data = JSON.parse(localStorage.getItem(STORE) || "null");
    if (
      !data ||
      !Array.isArray(data.entries) ||
      !data.entries.length ||
      data.entries.length > 80
    )
      return null;
    const valid = (s: CanvasState) =>
      s &&
      ["light", "dark"].includes(s.theme) &&
      typeof s.headline === "string" &&
      s.headline.length <= 120 &&
      Array.isArray(s.objects) &&
      s.objects.length <= 128 &&
      s.objects.every(
        (o) =>
          o &&
          typeof o.id === "string" &&
          o.id.length <= 160 &&
          ["x", "y", "width", "rotation", "asset"].every((k) =>
            Number.isFinite(o[k as keyof MemoryObject]),
          ) &&
          o.x >= 0 &&
          o.x <= 1 &&
          o.y >= 0 &&
          o.y <= 1 &&
          o.width > 0 &&
          o.width <= 1 &&
          Number.isInteger(o.asset) &&
          o.asset >= 0 &&
          o.asset <= 2 &&
          typeof o.visible === "boolean" &&
          (o.recoveredFrom === undefined ||
            (Number.isFinite(o.recoveredFrom) && o.recoveredFrom >= 0)),
      );
    if (
      !valid(data.state) ||
      !Number.isFinite(data.time) ||
      data.time < 0 ||
      !data.entries.every(
        (e: HistoryEntry) =>
          e &&
          typeof e.id === "string" &&
          typeof e.label === "string" &&
          e.label.length <= 200 &&
          Number.isFinite(e.time) &&
          e.time >= 0 &&
          valid(e.state),
      )
    )
      return null;
    const entries: HistoryEntry[] = [...data.entries].sort(
      (a, b) => a.time - b.time,
    );
    if (new Set(entries.map((e) => e.id)).size !== entries.length) return null;
    const state = cloneState(data.state);
    state.objects = state.objects.filter((o) => o.visible);
    return {
      state,
      entries,
      time: Math.max(data.time, entries[entries.length - 1].time),
    };
  } catch {
    return null;
  }
}

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    sound: <path d="M2 12c3-11 5-11 8 0s5 11 8 0 4-8 4-8" />,
    mute: (
      <>
        <path d="M3 12h18M5 5l14 14" />
      </>
    ),
    lens: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 1v4m0 14v4M1 12h4m14 0h4" />
      </>
    ),
    move: (
      <>
        <path d="M12 2v20M2 12h20m-14-6 4-4 4 4m-10 2-4 4 4 4m2 2 4 4 4-4m2-10 4 4-4 4" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    play: <path d="m9 5 11 7-11 7Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" />
      </>
    ),
    plus: <path d="M12 4v16M4 12h16" />,
    trash: (
      <>
        <path d="M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7" />
      </>
    ),
    reset: (
      <>
        <path d="M4 10a8 8 0 1 1 1 8M4 4v6h6" />
      </>
    ),
    github: (
      <path d="M9 20c-5 1-5-2-7-2m14 4v-4a3 3 0 0 0-1-2c4-.5 6-2 6-5a4 4 0 0 0-1-3c.3-1 .3-2 0-3-2 0-3 1-3 1a12 12 0 0 0-7 0S8 5 6 5c-.4 1-.4 2 0 3a4 4 0 0 0-1 3c0 3 2 4.5 6 5a3 3 0 0 0-1 2v4" />
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.lens}
    </svg>
  );
}

export default function App() {
  const [session] = useState(readSession);
  const [state, setState] = useState<CanvasState>(
    () => session?.state || cloneState(initialState),
  );
  const [entries, setEntries] = useState<HistoryEntry[]>(
    () =>
      session?.entries ||
      seededHistory.map((e) => ({ ...e, state: cloneState(e.state) })),
  );
  const [now, setNow] = useState(session?.time ?? 28);
  const [pastTime, setPastTime] = useState(() =>
    Math.max(12, session?.entries[0]?.time ?? 0),
  );
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);
  const [lens, setLens] = useState<Lens>({ x: 0.59, y: 0.49, radius: 200 });
  const [size, setSize] = useState({ width: 1200, height: 650 });
  const [mode, setMode] = useState<"lens" | "move">("lens");
  const [drag, setDrag] = useState<Drag | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [sound, setSound] = useState(false);
  const [motion, setMotion] = useState(
    () => !matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [demo, setDemo] = useState(false);
  const [helpTab, setHelpTab] = useState<"about" | "history">("about");
  const [lightbox, setLightbox] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const sceneHost = useRef<HTMLDivElement>(null);
  const scene = useRef<ReturnType<typeof createScene> | null>(null);
  const about = useRef<HTMLDialogElement>(null);
  const imageDialog = useRef<HTMLDialogElement>(null);
  const editDialog = useRef<HTMLDialogElement>(null);
  const headlineInput = useRef<HTMLInputElement>(null);
  const drawRef = useRef<{
    x: number;
    y: number;
    moving: boolean;
    lens: Lens;
    draw: boolean;
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  } | null>(null);
  const dragRef = useRef<Drag | null>(null);
  const timeRef = useRef(now);
  const stateRef = useRef(state);
  const audioRef = useRef<AudioContext | null>(null);
  const demoTimers = useRef<number[]>([]);
  const stopDemo = useCallback(() => {
    demoTimers.current.forEach(clearTimeout);
    demoTimers.current = [];
    setDemo(false);
    setDrag(null);
    dragRef.current = null;
    drawRef.current = null;
  }, []);
  const mobile = size.width < 640;
  const earliestTime = entries[0]?.time ?? 0;
  const historical = useMemo(() => {
    const exact = selectedEntryId
      ? entries.find((e) => e.id === selectedEntryId)
      : undefined;
    return exact ? cloneState(exact.state) : getStateAt(entries, pastTime);
  }, [entries, pastTime, selectedEntryId]);
  const pastObject = historical.objects.find((o) => o.visible);
  const visibleObjects = state.objects.filter((o) => o.visible);
  const picked = state.objects.find((o) => o.id === selected && o.visible);
  const effectiveRadius = clamp(
    lens.radius,
    65,
    Math.min(size.width * 0.46, size.height * 0.47),
  );
  const sourceIsPast = pastTime < now - 0.5;
  const crossing =
    drag?.source === "past" &&
    Math.hypot(
      drag.x * size.width - lens.x * size.width,
      drag.y * size.height - lens.y * size.height,
    ) >
      effectiveRadius * 0.75;

  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  useEffect(() => {
    timeRef.current = now;
  }, [now]);
  useEffect(() => {
    setPastTime((t) => clamp(t, earliestTime, now));
    if (selectedEntryId && !entries.some((e) => e.id === selectedEntryId))
      setSelectedEntryId(null);
  }, [earliestTime, now, entries, selectedEntryId]);
  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!document.hidden) setNow((t) => t + 1);
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const listener = () => setMotion(!media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);
  useEffect(() => {
    if (!sceneHost.current) return;
    const controller = createScene(sceneHost.current);
    scene.current = controller;
    return () => {
      controller.dispose();
      scene.current = null;
    };
  }, []);
  useEffect(() => {
    scene.current?.setReducedMotion(!motion);
  }, [motion]);
  useEffect(() => {
    if (!stage.current) return;
    let first = true;
    const observer = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect;
      setSize({ width, height });
      if (first) {
        setLens({
          x: width < 640 ? 0.53 : 0.58,
          y: width < 640 ? 0.51 : 0.47,
          radius:
            width < 640
              ? Math.min(width * 0.4, height * 0.47)
              : Math.min(width * 0.2, height * 0.35),
        });
        first = false;
      }
    });
    observer.observe(stage.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(
        STORE,
        JSON.stringify({
          state,
          entries: retainHistory(entries),
          time: timeRef.current,
        }),
      );
    } catch {
      /* private or full storage still permits play */
    }
  }, [state, entries]);
  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(() => setMessage(""), 3400);
    return () => window.clearTimeout(timer);
  }, [message]);
  useEffect(
    () => () => {
      demoTimers.current.forEach(clearTimeout);
      audioRef.current?.close();
    },
    [],
  );

  const chirp = useCallback(
    (recover = false) => {
      if (!sound) return;
      try {
        const ctx = audioRef.current || (audioRef.current = new AudioContext());
        void ctx.resume();
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(
          recover ? 440 : 220,
          ctx.currentTime,
        );
        oscillator.frequency.exponentialRampToValueAtTime(
          recover ? 880 : 150,
          ctx.currentTime + 0.15,
        );
        gain.gain.setValueAtTime(0.045, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        oscillator.connect(gain);
        gain.connect(ctx.destination);
        oscillator.start();
        oscillator.stop(ctx.currentTime + 0.26);
      } catch {
        /* Audio is optional. */
      }
    },
    [sound],
  );

  const commit = useCallback(
    (next: CanvasState, label: string) => {
      stopDemo();
      stateRef.current = next;
      setState(next);
      setEntries((previous) =>
        retainHistory(appendHistory(previous, next, label, timeRef.current)),
      );
      chirp();
    },
    [chirp, stopDemo],
  );

  function choosePastTime(time: number) {
    stopDemo();
    setSelectedEntryId(null);
    setPastTime(clamp(time, earliestTime, now));
  }

  function chooseMode(next: "lens" | "move") {
    stopDemo();
    setMode(next);
  }

  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const wheel = (event: WheelEvent) => {
      const rect = element.getBoundingClientRect();
      const inside =
        Math.hypot(
          event.clientX - rect.left - lens.x * size.width,
          event.clientY - rect.top - lens.y * size.height,
        ) <= effectiveRadius;
      if (!inside || event.deltaY === 0 || event.ctrlKey || event.metaKey)
        return;
      event.preventDefault();
      stopDemo();
      setSelectedEntryId(null);
      setPastTime((t) =>
        clamp(t + (event.deltaY > 0 ? -1 : 1), earliestTime, now),
      );
    };
    element.addEventListener("wheel", wheel, { passive: false });
    return () => element.removeEventListener("wheel", wheel);
  }, [
    lens.x,
    lens.y,
    size.width,
    size.height,
    effectiveRadius,
    earliestTime,
    now,
    stopDemo,
  ]);

  function restore(object = pastObject, position?: { x: number; y: number }) {
    stopDemo();
    if (!object || !sourceIsPast) {
      setMessage("Rewind to a moment with a photo first.");
      return;
    }
    if (stateRef.current.objects.filter((o) => o.visible).length >= 12) {
      setMessage(
        "Make some room. Remove a photo before bringing another back.",
      );
      return;
    }
    const next = restoreObject(
      stateRef.current,
      object,
      position || { x: mobile ? 0.58 : 0.75, y: mobile ? 0.71 : 0.67 },
      pastTime,
    );
    next.objects[next.objects.length - 1].rotation = 4;
    commit(next, `Recovered a photo from ${stamp(pastTime)}`);
    setSelected(next.objects[next.objects.length - 1].id);
    setMessage(`A memory from ${stamp(pastTime)}. Yours again.`);
    chirp(true);
  }

  const positionOf = (event: { clientX: number; clientY: number }) => {
    const rect = stage.current!.getBoundingClientRect();
    return {
      x: clamp((event.clientX - rect.left) / rect.width, 0.03, 0.97),
      y: clamp((event.clientY - rect.top) / rect.height, 0.04, 0.96),
    };
  };

  function beginObject(
    event: ReactPointerEvent,
    object: MemoryObject,
    source: "past" | "now",
  ) {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    stopDemo();
    if (source === "now") setSelected(object.id);
    const p = positionOf(event);
    const next = { object, ...p, source, startX: p.x, startY: p.y };
    setDrag(next);
    dragRef.current = next;
    stage.current?.setPointerCapture(event.pointerId);
  }

  function stageDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (
      event.button !== 0 ||
      (event.target as HTMLElement).closest(
        "button,input,a,[data-memory],.lens-handle,.lens-time",
      )
    )
      return;
    if (demo) stopDemo();
    setSelected(null);
    const p = positionOf(event);
    drawRef.current = {
      ...p,
      moving: false,
      lens: { ...lens },
      draw: mode === "lens",
      minX: p.x,
      maxX: p.x,
      minY: p.y,
      maxY: p.y,
    };
    if (mode === "lens") setLens((l) => ({ ...l, ...p }));
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function stageMove(event: ReactPointerEvent<HTMLDivElement>) {
    const p = positionOf(event);
    scene.current?.setPointer((p.x - 0.5) * 2, (p.y - 0.5) * 2);
    if (dragRef.current) {
      const next = { ...dragRef.current, ...p };
      setDrag(next);
      dragRef.current = next;
      return;
    }
    const drawing = drawRef.current;
    if (!drawing) return;
    drawing.moving = true;
    if (drawing.draw) {
      drawing.minX = Math.min(drawing.minX, p.x);
      drawing.maxX = Math.max(drawing.maxX, p.x);
      drawing.minY = Math.min(drawing.minY, p.y);
      drawing.maxY = Math.max(drawing.maxY, p.y);
      const radius =
        Math.max(
          (drawing.maxX - drawing.minX) * size.width,
          (drawing.maxY - drawing.minY) * size.height,
        ) / 2;
      setLens({
        x: (drawing.minX + drawing.maxX) / 2,
        y: (drawing.minY + drawing.maxY) / 2,
        radius: clamp(radius, 65, Math.min(size.width, size.height) * 0.45),
      });
    } else
      setLens({
        ...drawing.lens,
        x: clamp(drawing.lens.x + p.x - drawing.x, 0.08, 0.92),
        y: clamp(drawing.lens.y + p.y - drawing.y, 0.1, 0.9),
      });
  }

  function finishPointer(event: ReactPointerEvent<HTMLDivElement>) {
    const d = dragRef.current;
    if (d) {
      const moved =
        Math.hypot(
          (d.x - d.startX) * size.width,
          (d.y - d.startY) * size.height,
        ) > 5;
      if (d.source === "past" && moved) {
        const outside =
          Math.hypot(
            (d.x - lens.x) * size.width,
            (d.y - lens.y) * size.height,
          ) >
          effectiveRadius * 0.75;
        if (outside) restore(d.object, { x: d.x, y: d.y });
        else setMessage("Cross the blue edge to bring it into now.");
      } else if (d.source === "now" && moved) {
        const next = cloneState(stateRef.current);
        const object = next.objects.find((o) => o.id === d.object.id)!;
        object.x = d.x;
        object.y = d.y;
        commit(next, "Moved a memory");
      } else if (d.source === "past")
        setMessage(
          "Drag this photo beyond the circle, or choose Bring to now.",
        );
      setDrag(null);
      dragRef.current = null;
    }
    drawRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function deleteSelected() {
    if (!selected) return;
    const next = cloneState(stateRef.current);
    if (next.objects.some((o) => o.id === selected)) {
      next.objects = next.objects.filter((o) => o.id !== selected && o.visible);
      commit(next, "Removed a photo");
      setSelected(null);
      setMessage("Gone from now. Still there in the past.");
    }
  }

  function reset() {
    stopDemo();
    setState(cloneState(initialState));
    stateRef.current = cloneState(initialState);
    setEntries(
      seededHistory.map((e) => ({ ...e, state: cloneState(e.state) })),
    );
    setNow(28);
    timeRef.current = 28;
    setPastTime(12);
    setSelectedEntryId(null);
    setSelected(null);
    setLens({
      x: mobile ? 0.53 : 0.58,
      y: mobile ? 0.51 : 0.48,
      radius: mobile
        ? Math.min(size.width * 0.4, size.height * 0.47)
        : Math.min(size.width * 0.2, size.height * 0.35),
    });
    setMessage("A fresh timeline. The past is yours to explore.");
  }

  function runDemo() {
    reset();
    setDemo(true);
    setMessage("Watch the blue edge.");
    const base = seededHistory[1].state.objects[0];
    const timers = [
      window.setTimeout(() => {
        setPastTime(0);
        setMessage("The lens reveals the same page, earlier.");
      }, 800),
      window.setTimeout(() => {
        setPastTime(12);
        setMessage("The photo existed at 00:12.");
      }, 2200),
      window.setTimeout(() => {
        const frames = 55;
        let frame = 0;
        const tick = () => {
          if (frame >= frames) {
            setDrag(null);
            const next = restoreObject(
              cloneState(initialState),
              base,
              { x: mobile ? 0.6 : 0.76, y: 0.67 },
              12,
            );
            next.objects[next.objects.length - 1].rotation = 4;
            setState(next);
            stateRef.current = next;
            setEntries((old) =>
              retainHistory(
                appendHistory(
                  old,
                  next,
                  "Recovered a photo from 00:12",
                  timeRef.current,
                ),
              ),
            );
            demoTimers.current = [];
            setSelected(next.objects[next.objects.length - 1].id);
            setMessage("The past just became part of now. Your turn.");
            setDemo(false);
            chirp(true);
            return;
          }
          const t = frame++ / frames;
          const ease = t * t * (3 - 2 * t);
          setDrag({
            object: base,
            source: "past",
            x: base.x + ((mobile ? 0.6 : 0.76) - base.x) * ease,
            y: base.y + (0.67 - base.y) * ease,
            startX: base.x,
            startY: base.y,
          });
          demoTimers.current.push(window.setTimeout(tick, motion ? 22 : 1));
        };
        tick();
      }, 3400),
    ];
    demoTimers.current = timers;
  }

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.closest("input,textarea,dialog") ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey
      )
        return;
      if (event.key === "Escape") {
        stopDemo();
        setSelected(null);
      }
      if (event.key.toLowerCase() === "l") chooseMode("lens");
      if (event.key.toLowerCase() === "v") chooseMode("move");
      if (event.key === "?" && !about.current?.open) openAbout();
      if ((event.key === "Delete" || event.key === "Backspace") && selected) {
        event.preventDefault();
        deleteSelected();
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  });

  function photoStyle(object: MemoryObject, dragging = false): CSSProperties {
    const width = mobile ? Math.max(0.68, object.width) : object.width;
    return {
      left: `${object.x * 100}%`,
      top: `${object.y * 100}%`,
      width: `${width * 100}%`,
      transform: `translate(-50%,-50%) rotate(${dragging ? 3 : object.rotation}deg)`,
    };
  }

  function renderPhoto(object: MemoryObject, past = false) {
    return (
      <div
        key={object.id}
        data-memory={object.id}
        className={`memory ${past ? "past-memory" : ""} ${selected === object.id ? "selected" : ""} ${drag?.source === "now" && drag.object.id === object.id ? "being-dragged" : ""}`}
        style={photoStyle(object)}
      >
        <button
          className="photo-surface"
          tabIndex={past ? -1 : 0}
          aria-label={
            past
              ? "Drag this past photo into the present"
              : "Select or drag recovered photo"
          }
          onPointerDown={(e) => beginObject(e, object, past ? "past" : "now")}
          onDoubleClick={() => {
            if (!past) {
              stopDemo();
              setLightbox(true);
              imageDialog.current?.showModal();
            }
          }}
          onKeyDown={(e) => {
            if (past && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              restore(object);
            }
            if (!past && e.key.startsWith("Arrow")) {
              e.preventDefault();
              const next = cloneState(stateRef.current);
              const o = next.objects.find((item) => item.id === object.id)!;
              o.x = clamp(
                o.x +
                  (e.key === "ArrowRight"
                    ? 0.02
                    : e.key === "ArrowLeft"
                      ? -0.02
                      : 0),
                0.05,
                0.95,
              );
              o.y = clamp(
                o.y +
                  (e.key === "ArrowDown"
                    ? 0.02
                    : e.key === "ArrowUp"
                      ? -0.02
                      : 0),
                0.06,
                0.94,
              );
              commit(next, "Moved a memory");
            }
          }}
          onFocus={() => {
            if (!past) setSelected(object.id);
          }}
        >
          <img
            src={ART}
            alt="A cobalt loop above a concrete stair, a moment worth keeping"
            draggable="false"
          />
        </button>
        <span className="memory-caption">
          {past
            ? `STILL HERE / ${stamp(pastTime)}`
            : `Recovered from ${stamp(object.recoveredFrom ?? now)}`}
        </span>
      </div>
    );
  }

  function openAbout(tab: "about" | "history" = "about") {
    stopDemo();
    setHelpTab(tab);
    about.current?.showModal();
  }
  const lensStyle = {
    left: `${lens.x * 100}%`,
    top: `${lens.y * 100}%`,
    width: effectiveRadius * 2,
    height: effectiveRadius * 2,
  };

  return (
    <main className="app-shell">
      <a className="skip-link" href="#experiment">
        Skip to experiment
      </a>
      <header className="masthead">
        <a className="wordmark" href="./" aria-label="TIME HEIST home">
          TIME HEIST
          <span className="wordmark-dot" />
        </a>
        <h1>
          Reach into the past.
          <br />
          Bring something back.
        </h1>
        <nav className="header-actions" aria-label="Main controls">
          <button
            className={`sound-button ${sound ? "active" : ""}`}
            onClick={() => {
              setSound(!sound);
              if (!sound)
                setMessage("Sound on. A little signal when time shifts.");
            }}
            aria-label={sound ? "Mute sound" : "Enable sound"}
            aria-pressed={sound}
          >
            <Icon name={sound ? "sound" : "mute"} />
          </button>
          <button className="pill dark reset-button" onClick={reset}>
            RESET
            <span className="button-dot" />
          </button>
          <button className="pill" onClick={() => openAbout()}>
            ABOUT<span className="menu-dots">··</span>
          </button>
        </nav>
      </header>

      <section className="experiment-wrap" aria-label="Interactive time canvas">
        <div
          ref={stage}
          id="experiment"
          className={`stage ${state.theme} tool-${mode} ${demo ? "demo-running" : ""}`}
          onPointerDown={stageDown}
          onPointerMove={stageMove}
          onPointerUp={finishPointer}
          onPointerCancel={() => {
            setDrag(null);
            dragRef.current = null;
            drawRef.current = null;
          }}
        >
          <div ref={sceneHost} className="scene-host" aria-hidden="true" />
          <div className="scene-fallback" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="canvas-copy">
            <span className="eyebrow">A SMALL EXPERIMENT IN TIME</span>
            <h2>{state.headline}</h2>
            <span className="live-time">
              <span />
              LIVE / {stamp(now)}
            </span>
          </div>
          <div className="stage-tools" aria-label="Canvas tools">
            <button
              aria-label="Draw time lens (L)"
              aria-pressed={mode === "lens"}
              className={mode === "lens" ? "chosen" : ""}
              onClick={() => chooseMode("lens")}
            >
              <Icon name="lens" />
              <span>Lens</span>
            </button>
            <button
              aria-label="Move time lens (V)"
              aria-pressed={mode === "move"}
              className={mode === "move" ? "chosen" : ""}
              onClick={() => chooseMode("move")}
            >
              <Icon name="move" />
              <span>Move</span>
            </button>
          </div>
          <div
            className={`past-layer ${historical.theme}`}
            style={{
              clipPath: `circle(${effectiveRadius}px at ${lens.x * size.width}px ${lens.y * size.height}px)`,
            }}
            aria-label={`Page at ${stamp(pastTime)}`}
          >
            <div className="past-scene" aria-hidden="true" />
            <div className="canvas-copy">
              <span className="eyebrow">A SMALL EXPERIMENT IN TIME</span>
              <h2>{historical.headline}</h2>
              <span className="live-time">THEN / {stamp(pastTime)}</span>
            </div>
            {historical.objects
              .filter((o) => o.visible)
              .map((o) => renderPhoto(o, true))}
            {!pastObject && (
              <span className="empty-past">
                Nothing here at {stamp(pastTime)}.<br />
                Rewind a little further.
              </span>
            )}
          </div>
          <div
            className={`lens-ring ${crossing ? "crossing" : ""}`}
            style={lensStyle}
            aria-hidden="true"
          >
            <span className="rim-tick top" />
            <span className="rim-tick bottom" />
          </div>
          <button
            className="lens-time"
            style={{
              left: `${lens.x * 100}%`,
              top: `calc(${lens.y * 100}% - ${effectiveRadius}px - 16px)`,
            }}
            onClick={() =>
              choosePastTime(
                pastTime === earliestTime
                  ? Math.max(12, earliestTime)
                  : earliestTime,
              )
            }
            aria-label="Switch between the first two past moments"
          >
            {Math.max(0, Math.round(now - pastTime))} seconds ago
            <span />
          </button>
          <button
            className="lens-handle"
            style={{
              left: `calc(${lens.x * 100}% + ${effectiveRadius * 0.707}px)`,
              top: `calc(${lens.y * 100}% - ${effectiveRadius * 0.707}px)`,
            }}
            aria-label="Move the time lens. Use arrow keys to adjust."
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              stopDemo();
              const p = positionOf(e);
              drawRef.current = {
                ...p,
                moving: false,
                lens: { ...lens },
                draw: false,
                minX: p.x,
                maxX: p.x,
                minY: p.y,
                maxY: p.y,
              };
              stage.current?.setPointerCapture(e.pointerId);
            }}
            onKeyDown={(e) => {
              if (e.key.startsWith("Arrow")) {
                e.preventDefault();
                stopDemo();
                setLens((l) => ({
                  ...l,
                  x: clamp(
                    l.x +
                      (e.key === "ArrowLeft"
                        ? -0.025
                        : e.key === "ArrowRight"
                          ? 0.025
                          : 0),
                    0.1,
                    0.9,
                  ),
                  y: clamp(
                    l.y +
                      (e.key === "ArrowUp"
                        ? -0.025
                        : e.key === "ArrowDown"
                          ? 0.025
                          : 0),
                    0.15,
                    0.85,
                  ),
                }));
              }
            }}
          >
            <Icon name="move" />
          </button>
          {visibleObjects.map((o) => renderPhoto(o))}
          {drag && (
            <div
              className={`memory dragged-memory ${crossing ? "crossing" : ""}`}
              style={photoStyle({ ...drag.object, x: drag.x, y: drag.y }, true)}
              aria-hidden="true"
            >
              <img src={ART} alt="" draggable="false" />
              <span className="memory-caption">
                {drag.source === "past"
                  ? crossing
                    ? "Release. Make it yours."
                    : "Cross the blue edge."
                  : "A little closer to now."}
              </span>
            </div>
          )}
          <div className="stage-bottom">
            <span>
              {demo
                ? "A MOMENT, REPLAYING"
                : visibleObjects.length
                  ? "THE PAST IS PART OF NOW"
                  : "SOME THINGS ARE NEVER REALLY GONE"}
            </span>
            <button onClick={demo ? stopDemo : runDemo}>
              <Icon name={demo ? "close" : "play"} />
              {demo ? "Stop demo" : "Show me"}
            </button>
          </div>
        </div>
        <div className="canvas-controls">
          <div className="time-controls">
            <span className="control-label">
              THEN <b>{stamp(pastTime)}</b>
            </span>
            <input
              type="range"
              aria-label="Time inside the lens"
              min={earliestTime}
              max={now}
              step="1"
              value={pastTime}
              style={
                {
                  "--progress": `${((pastTime - earliestTime) / Math.max(1, now - earliestTime)) * 100}%`,
                } as CSSProperties
              }
              onChange={(e) => choosePastTime(Number(e.target.value))}
            />
            <span className="control-label now-label">
              NOW <b>{stamp(now)}</b>
            </span>
          </div>
          <button
            className="recover-button"
            onClick={() => restore()}
            disabled={!pastObject || !sourceIsPast || demo}
          >
            Bring to now
            <Icon name="plus" />
          </button>
        </div>
      </section>

      <footer className="footer">
        <span className="registration" aria-hidden="true">
          +
        </span>
        <button className="footer-instruction" onClick={() => openAbout()}>
          Draw a lens. Drag the past into now.
        </button>
        <span className="registration middle" aria-hidden="true">
          +
        </span>
        <div className="footer-links">
          <button onClick={() => openAbout("history")}>
            Your timeline <span className="count">{entries.length}</span>
          </button>
          <a href={REPO} target="_blank" rel="noreferrer">
            GitHub
            <Icon name="github" />
          </a>
        </div>
        <span className="registration" aria-hidden="true">
          +
        </span>
      </footer>

      <div className="edit-toolbar" aria-label="Edit the present">
        <span>MAKE A CHANGE</span>
        <button
          onClick={() => {
            stopDemo();
            editDialog.current?.showModal();
            window.setTimeout(() => headlineInput.current?.select(), 0);
          }}
        >
          Edit words
        </button>
        <button
          onClick={() =>
            commit(
              {
                ...cloneState(state),
                theme: state.theme === "dark" ? "light" : "dark",
              },
              "Changed the light",
            )
          }
        >
          <Icon name="sun" />
          Change light
        </button>
        <button disabled={!picked} onClick={deleteSelected}>
          <Icon name="trash" />
          Remove photo
        </button>
      </div>
      <div
        className="toast"
        role="status"
        aria-live="polite"
        data-visible={!!message}
      >
        {message}
      </div>

      <dialog
        ref={about}
        className="about-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
      >
        <div className="dialog-inner">
          <div className="dialog-top">
            <span>TIME HEIST</span>
            <button
              className="icon-button"
              aria-label="Close about"
              onClick={() => about.current?.close()}
            >
              <Icon name="close" />
            </button>
          </div>
          <div className="dialog-tabs">
            <button
              className={helpTab === "about" ? "active" : ""}
              onClick={() => setHelpTab("about")}
            >
              The experiment
            </button>
            <button
              className={helpTab === "history" ? "active" : ""}
              onClick={() => setHelpTab("history")}
            >
              Your timeline
            </button>
          </div>
          {helpTab === "about" ? (
            <>
              <h2>
                The past is
                <br />
                still touchable.
              </h2>
              <p>
                Every change leaves a trace. The circle is a window into an
                earlier version of this very page.
              </p>
              <ol className="instructions">
                <li>
                  <strong>Find a moment.</strong>
                  <span>
                    Move the time slider, or scroll inside the circle.
                  </span>
                </li>
                <li>
                  <strong>Reach through.</strong>
                  <span>
                    Drag a photo across the blue edge. On your phone, tap Bring
                    to now.
                  </span>
                </li>
                <li>
                  <strong>Change the present.</strong>
                  <span>
                    Move or remove the photo. Change the words or the light.
                    Then find those changes in the past.
                  </span>
                </li>
              </ol>
              <div className="preferences">
                <label>
                  <span>Gentle motion</span>
                  <input
                    type="checkbox"
                    checked={motion}
                    onChange={(e) => {
                      stopDemo();
                      setMotion(e.target.checked);
                    }}
                  />
                </label>
                <span>
                  Keyboard: L for lens, V to move, arrow keys on a photo or lens
                  handle, Delete to remove, ? for help.
                </span>
              </div>
              <p className="small-print">
                Made by{" "}
                <a
                  href="https://github.com/jash65571"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jash Patel
                </a>
                . Visual direction inspired by{" "}
                <a href="https://lusion.co" target="_blank" rel="noreferrer">
                  Lusion
                </a>
                . Original code and artwork. Your timeline stays in this
                browser.
              </p>
              <button
                className="dialog-primary"
                onClick={() => {
                  about.current?.close();
                  runDemo();
                }}
              >
                Watch the experiment
                <Icon name="play" />
              </button>
            </>
          ) : (
            <>
              <h2>
                Every change.
                <br />
                Still here.
              </h2>
              <p>
                Choose a moment to see it inside the lens. Your present keeps
                moving.
              </p>
              <div className="history-list">
                {[...entries].reverse().map((e) => (
                  <button
                    key={e.id}
                    onClick={() => {
                      stopDemo();
                      setSelectedEntryId(e.id);
                      setPastTime(e.time);
                      about.current?.close();
                    }}
                  >
                    <span>{stamp(e.time)}</span>
                    <strong>{e.label}</strong>
                    <span className="history-dot" />
                  </button>
                ))}
              </div>
              <button
                className="text-button"
                onClick={() => {
                  about.current?.close();
                  reset();
                }}
              >
                Start a fresh timeline
              </button>
            </>
          )}
        </div>
      </dialog>

      <dialog ref={editDialog} className="edit-dialog">
        <form
          method="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            const value = headlineInput.current?.value.trim();
            if (value)
              commit(
                {
                  ...cloneState(stateRef.current),
                  headline: value.slice(0, 100),
                },
                "Changed the words",
              );
            editDialog.current?.close();
          }}
        >
          <div className="dialog-top">
            <span>CHANGE THE PRESENT</span>
            <button
              type="button"
              className="icon-button"
              aria-label="Close text editor"
              onClick={() => editDialog.current?.close()}
            >
              <Icon name="close" />
            </button>
          </div>
          <label htmlFor="headline">Leave a few words behind.</label>
          <input
            ref={headlineInput}
            id="headline"
            defaultValue={state.headline}
            key={state.headline}
            maxLength={100}
            required
            autoComplete="off"
          />
          <p>They will be waiting when you look back.</p>
          <button className="dialog-primary" type="submit">
            Keep these words
          </button>
        </form>
      </dialog>

      <dialog
        ref={imageDialog}
        className="image-dialog"
        onClose={() => setLightbox(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
      >
        {lightbox && (
          <>
            <button
              className="icon-button"
              aria-label="Close photo"
              onClick={() => imageDialog.current?.close()}
            >
              <Icon name="close" />
            </button>
            <img
              src={ART}
              alt="Original artwork: a cobalt loop over a concrete staircase"
            />
            <p>A moment worth keeping. Original artwork for TIME HEIST.</p>
          </>
        )}
      </dialog>
    </main>
  );
}
