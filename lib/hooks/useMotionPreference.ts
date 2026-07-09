"use client";

import { useEffect, useState } from "react";

interface MotionPreference {
  reducedMotion: boolean;
  isDesktop: boolean;
  showEffects: boolean;
  effectsEnabled: boolean;
}

const defaultPreference: MotionPreference = {
  reducedMotion: false,
  isDesktop: false,
  showEffects: true,
  effectsEnabled: true,
};

export function useMotionPreference(): MotionPreference {
  const [prefs, setPrefs] = useState<MotionPreference>(defaultPreference);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tablet = window.matchMedia("(min-width: 768px)");
    const desktop = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      setPrefs({
        reducedMotion: reduced.matches,
        isDesktop: desktop.matches,
        showEffects: tablet.matches,
        effectsEnabled: !reduced.matches,
      });
    };

    update();
    reduced.addEventListener("change", update);
    tablet.addEventListener("change", update);
    desktop.addEventListener("change", update);

    return () => {
      reduced.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
    };
  }, []);

  return prefs;
}
