"use client";

type Listener = (activeKey: string | null) => void;

const visibility = new Map<string, number>();
const listeners = new Set<Listener>();

let activeKey: string | null = null;

/** Minimum visibility before a preview can become active. Kept low for mobile cards. */
const MIN_RATIO = 0.08;

function pickActiveKey() {
  let bestKey: string | null = null;
  let bestRatio = 0;

  for (const [key, ratio] of visibility) {
    if (ratio > bestRatio) {
      bestRatio = ratio;
      bestKey = key;
    }
  }

  if (!bestKey || bestRatio < MIN_RATIO) {
    return null;
  }

  return bestKey;
}

function notify() {
  const next = pickActiveKey();
  if (next === activeKey) return;
  activeKey = next;
  listeners.forEach((listener) => listener(activeKey));
}

export function reportLivePreviewVisibility(key: string, ratio: number) {
  if (ratio <= 0) {
    visibility.delete(key);
  } else {
    visibility.set(key, ratio);
  }
  notify();
}

export function unregisterLivePreview(key: string) {
  visibility.delete(key);
  notify();
}

export function subscribeLivePreview(listener: Listener) {
  listeners.add(listener);
  listener(activeKey);
  return () => {
    listeners.delete(listener);
  };
}

export function refreshLivePreviewActive() {
  notify();
}
