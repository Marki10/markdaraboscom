import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render } from "@testing-library/react";
import { useToast } from "./use-toast";

function ToastHarness({
  apiRef,
}: {
  apiRef: React.MutableRefObject<ReturnType<typeof useToast> | null>;
}) {
  const toastApi = useToast();
  apiRef.current = toastApi;
  return null;
}

describe("useToast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.runAllTimers();
    vi.useRealTimers();
  });

  it("adds a toast and exposes it in state", () => {
    const apiRef = React.createRef<ReturnType<typeof useToast>>();
    render(<ToastHarness apiRef={apiRef} />);

    act(() => {
      apiRef.current?.toast({ title: "Hello", description: "World" });
    });

    const toast = apiRef.current?.toasts[0];
    expect(toast?.title).toBe("Hello");
    expect(toast?.description).toBe("World");
    expect(toast?.open).toBe(true);
  });

  it("enforces the toast limit", () => {
    const apiRef = React.createRef<ReturnType<typeof useToast>>();
    render(<ToastHarness apiRef={apiRef} />);

    act(() => {
      apiRef.current?.toast({ title: "First" });
      apiRef.current?.toast({ title: "Second" });
    });

    expect(apiRef.current?.toasts).toHaveLength(1);
    expect(apiRef.current?.toasts[0]?.title).toBe("Second");
  });

  it("updates a toast", () => {
    const apiRef = React.createRef<ReturnType<typeof useToast>>();
    render(<ToastHarness apiRef={apiRef} />);

    let updater: ((props: { title?: React.ReactNode }) => void) | null = null;
    act(() => {
      const handle = apiRef.current?.toast({ title: "Initial" });
      updater = handle?.update ?? null;
    });

    act(() => {
      updater?.({ title: "Updated" });
    });

    expect(apiRef.current?.toasts[0]?.title).toBe("Updated");
  });

  it("dismisses a toast and removes it after the delay", () => {
    const apiRef = React.createRef<ReturnType<typeof useToast>>();
    render(<ToastHarness apiRef={apiRef} />);

    let dismiss: (() => void) | null = null;
    act(() => {
      const handle = apiRef.current?.toast({ title: "Dismiss me" });
      dismiss = handle?.dismiss ?? null;
    });

    act(() => {
      dismiss?.();
    });

    expect(apiRef.current?.toasts[0]?.open).toBe(false);

    act(() => {
      vi.runAllTimers();
    });

    expect(apiRef.current?.toasts).toHaveLength(0);
  });
});
