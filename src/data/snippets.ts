export type Snippet = {
  title: string;
  description: string;
  code: string;
};

export type Category = {
  name: string;
  snippets: Snippet[];
};

export const snippetCategories: Category[] = [
  {
    name: "Converters & Calculators",
    snippets: [
      {
        title: "Unit Converter (length, weight, temperature)",
        description:
          "Converts common length, weight, and temperature units with a simple API.",
        code: `type LengthUnit = "m" | "km" | "mi" | "ft";
type WeightUnit = "kg" | "lb";
type TempUnit = "c" | "f" | "k";

export const convertLength = (value: number, from: LengthUnit, to: LengthUnit) => {
  const meters: Record<LengthUnit, number> = { m: 1, km: 1000, mi: 1609.34, ft: 0.3048 };
  return (value * meters[from]) / meters[to];
};

export const convertWeight = (value: number, from: WeightUnit, to: WeightUnit) => {
  const kilograms: Record<WeightUnit, number> = { kg: 1, lb: 0.453592 };
  return (value * kilograms[from]) / kilograms[to];
};

export const convertTemperature = (value: number, from: TempUnit, to: TempUnit) => {
  if (from === to) return value;
  const toCelsius = (v: number, unit: TempUnit) =>
    unit === "c" ? v : unit === "f" ? (v - 32) * (5 / 9) : v - 273.15;
  const fromCelsius = (v: number, unit: TempUnit) =>
    unit === "c" ? v : unit === "f" ? v * (9 / 5) + 32 : v + 273.15;
  return fromCelsius(toCelsius(value, from), to);
};

// Example results:
// convertLength(5, "km", "mi") -> 3.1069
// convertWeight(150, "lb", "kg") -> 68.0389
// convertTemperature(72, "f", "c") -> 22.2222`,
      },
    ],
  },
  {
    name: "React Hooks",
    snippets: [
      {
        title: "useDebounce",
        description: "Delays updates until the input stops changing.",
        code: `import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}`,
      },
      {
        title: "useThrottle",
        description: "Limits updates to a fixed interval for high-frequency events.",
        code: `import { useEffect, useRef, useState } from "react";

export function useThrottle<T>(value: T, interval = 200): T {
  const [throttled, setThrottled] = useState(value);
  const lastRun = useRef(0);

  useEffect(() => {
    const now = Date.now();
    if (now - lastRun.current >= interval) {
      lastRun.current = now;
      setThrottled(value);
      return;
    }

    const id = setTimeout(() => {
      lastRun.current = Date.now();
      setThrottled(value);
    }, interval - (now - lastRun.current));

    return () => clearTimeout(id);
  }, [value, interval]);

  return throttled;
}`,
      },
      {
        title: "useLocalStorage",
        description: "Persists state in local storage with JSON serialization.",
        code: `import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}`,
      },
      {
        title: "useClickOutside",
        description: "Detects clicks outside a given element.",
        code: `import { RefObject, useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  onOutside: () => void
) {
  useEffect(() => {
    function handler(event: MouseEvent) {
      const target = event.target as Node | null;
      if (ref.current && target && !ref.current.contains(target)) {
        onOutside();
      }
    }

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onOutside]);
}`,
      },
      {
        title: "useInfiniteScroll",
        description: "Triggers a callback when the sentinel enters the viewport.",
        code: `import { RefObject, useEffect } from "react";

export function useInfiniteScroll(
  ref: RefObject<Element>,
  onLoadMore: () => void
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) onLoadMore();
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, onLoadMore]);
}`,
      },
      {
        title: "usePrevious",
        description: "Stores the previous value for comparison.",
        code: `import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T) {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}`,
      },
    ],
  },
  {
    name: "UI Patterns",
    snippets: [
      {
        title: "Search + filter pattern",
        description: "Combines search text with multiple filters for list views.",
        code: `type Filters = { query: string; status: string; tags: string[] };

export function filterItems<T extends { name: string; status: string; tags: string[] }>(
  items: T[],
  filters: Filters
) {
  return items.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(filters.query.toLowerCase());
    const matchesStatus = filters.status === "all" || item.status === filters.status;
    const matchesTags = filters.tags.length === 0 || filters.tags.every((tag) => item.tags.includes(tag));
    return matchesQuery && matchesStatus && matchesTags;
  });
}`,
      },
      {
        title: "Pagination logic",
        description: "Calculates visible pages and slicing for results.",
        code: `export function paginate<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * perPage;
  return {
    page: currentPage,
    totalPages,
    data: items.slice(start, start + perPage),
  };
}`,
      },
      {
        title: "Skeleton loader component",
        description: "A simple skeleton block with animated pulse.",
        code: `type SkeletonProps = { className?: string };

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={\`animate-pulse rounded-md bg-muted/60 \${className}\`}
      aria-busy="true"
      aria-live="polite"
    />
  );
}`,
      },
      {
        title: "Toast notification system",
        description: "A simple queue-based toast manager API.",
        code: `type Toast = { id: string; message: string };

const listeners = new Set<(toasts: Toast[]) => void>();
let store: Toast[] = [];

export function pushToast(message: string) {
  store = [...store, { id: crypto.randomUUID(), message }];
  listeners.forEach((listener) => listener(store));
}

export function subscribeToToasts(listener: (toasts: Toast[]) => void) {
  listeners.add(listener);
  listener(store);
  return () => listeners.delete(listener);
}`,
      },
      {
        title: "Multi-step form wizard",
        description: "Keeps step state and validates before moving forward.",
        code: `type Step = { id: string; validate: () => boolean };

export function nextStep(steps: Step[], current: number) {
  const canAdvance = steps[current]?.validate();
  return canAdvance ? Math.min(current + 1, steps.length - 1) : current;
}`,
      },
    ],
  },
  {
    name: "Utilities",
    snippets: [
      {
        title: "Fetch wrapper with retries",
        description: "Retries failed requests with exponential backoff.",
        code: `export async function fetchWithRetries(
  input: RequestInfo,
  init: RequestInit = {},
  retries = 2
) {
  let attempt = 0;
  while (attempt <= retries) {
    try {
      const response = await fetch(input, init);
      if (!response.ok) throw new Error("Request failed");
      return response;
    } catch (error) {
      if (attempt === retries) throw error;
      const delay = 300 * 2 ** attempt;
      await new Promise((resolve) => setTimeout(resolve, delay));
      attempt += 1;
    }
  }
  throw new Error("Unreachable");
}`,
      },
      {
        title: "Error boundary component",
        description: "Catches render errors and displays a fallback UI.",
        code: `import { Component, ErrorInfo, ReactNode } from "react";

type Props = { fallback: ReactNode; children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary", error, info);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}`,
      },
      {
        title: "Modal manager",
        description: "Centralizes modal state with a simple stack.",
        code: `type Modal = { id: string; content: string };

let stack: Modal[] = [];
const listeners = new Set<(modals: Modal[]) => void>();

export function openModal(content: string) {
  stack = [...stack, { id: crypto.randomUUID(), content }];
  listeners.forEach((listener) => listener(stack));
}

export function closeModal() {
  stack = stack.slice(0, -1);
  listeners.forEach((listener) => listener(stack));
}

export function subscribeModals(listener: (modals: Modal[]) => void) {
  listeners.add(listener);
  listener(stack);
  return () => listeners.delete(listener);
}`,
      },
      {
        title: "Validation helpers",
        description: "Lightweight validation utilities for forms.",
        code: `export const isEmail = (value: string) =>
  /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);

export const minLength = (value: string, length: number) =>
  value.trim().length >= length;
`,
      },
    ],
  },
  {
    name: "Performance Optimisation",
    snippets: [
      {
        title: "Memoized expensive calculation",
        description: "Caches heavy computations using useMemo.",
        code: `import { useMemo } from "react";

export function useExpensiveValue(input: number[]) {
  return useMemo(() => input.reduce((sum, item) => sum + item ** 2, 0), [input]);
}`,
      },
      {
        title: "Code-splitting example",
        description: "Lazily loads a component at runtime.",
        code: `import { lazy, Suspense } from "react";

const AnalyticsPanel = lazy(() => import("./AnalyticsPanel"));

export function Dashboard() {
  return (
    <Suspense fallback={<div>Loading analytics...</div>}>
      <AnalyticsPanel />
    </Suspense>
  );
}`,
      },
      {
        title: "Virtualized list pattern",
        description: "Renders only visible rows for large lists.",
        code: `type Row = { id: string; label: string };

export function getVisibleRows(rows: Row[], start: number, end: number) {
  return rows.slice(start, end);
}`,
      },
    ],
  },
  {
    name: "JavaScript Deep Dives",
    snippets: [
      {
        title: "Closure trap example",
        description: "Shows how closures capture loop variables.",
        code: `const handlers: Array<() => void> = [];

for (var i = 0; i < 3; i += 1) {
  handlers.push(() => console.log("var", i));
}

for (let j = 0; j < 3; j += 1) {
  handlers.push(() => console.log("let", j));
}`,
      },
      {
        title: "Event loop (microtask vs macrotask)",
        description: "Highlights the ordering between microtasks and macrotasks.",
        code: `console.log("script start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("microtask"));

console.log("script end");`,
      },
      {
        title: "Promise.race and allSettled",
        description: "Compares race and allSettled behaviors.",
        code: `const slow = new Promise((resolve) => setTimeout(() => resolve("slow"), 300));
const fast = new Promise((resolve) => setTimeout(() => resolve("fast"), 100));

Promise.race([slow, fast]).then(console.log);
Promise.allSettled([slow, fast]).then(console.log);`,
      },
      {
        title: "Throttle vs debounce",
        description: "Simple implementations to compare timing behaviors.",
        code: `export const debounce = (fn: (...args: unknown[]) => void, delay: number) => {
  let id: ReturnType<typeof setTimeout> | undefined;
  return (...args: unknown[]) => {
    if (id) clearTimeout(id);
    id = setTimeout(() => fn(...args), delay);
  };
};

export const throttle = (fn: (...args: unknown[]) => void, delay: number) => {
  let last = 0;
  return (...args: unknown[]) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn(...args);
    }
  };
};`,
      },
      {
        title: "Structural sharing example",
        description: "Updates nested data immutably to preserve references.",
        code: `type User = { id: string; profile: { name: string } };

export function updateUserName(users: User[], id: string, name: string) {
  return users.map((user) =>
    user.id === id ? { ...user, profile: { ...user.profile, name } } : user
  );
}`,
      },
    ],
  },
];
