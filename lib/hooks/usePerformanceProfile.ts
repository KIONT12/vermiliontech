"use client";

import { useEffect, useState } from "react";

export interface PerformanceProfile {
  reducedMotion: boolean;
  saveData: boolean;
  isMobile: boolean;
  prefersLightEffects: boolean;
}

const defaultProfile: PerformanceProfile = {
  reducedMotion: false,
  saveData: false,
  isMobile: false,
  prefersLightEffects: false,
};

export function usePerformanceProfile(): PerformanceProfile {
  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    const saveData = Boolean(connection?.saveData);
    const slowConnection =
      connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g";

    setProfile({
      reducedMotion,
      saveData,
      isMobile,
      prefersLightEffects: reducedMotion || saveData || slowConnection || isMobile,
    });
  }, []);

  return profile;
}
