"use client";

import { useEffect, useState } from "react";
import {
  computePerformanceProfile,
  subscribePerformanceProfile,
  type PerformanceProfile,
} from "@/lib/performanceProfile";

interface MotionPreference {
  reducedMotion: boolean;
  isDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
  showEffects: boolean;
  effectsEnabled: boolean;
}

function toMotionPreference(profile: PerformanceProfile): MotionPreference {
  return {
    reducedMotion: profile.reducedMotion,
    isDesktop: profile.isDesktop,
    isMobile: profile.isMobile,
    isTablet: profile.isTablet,
    showEffects: !profile.isMobile,
    effectsEnabled: !profile.reducedMotion && !profile.isMobile,
  };
}

const defaultPreference: MotionPreference = toMotionPreference({
  reducedMotion: false,
  saveData: false,
  slowConnection: false,
  isMobile: true,
  isTablet: false,
  isDesktop: false,
  prefersLightEffects: true,
  allowLivePreviews: false,
  allowHeroVideo: false,
  allowBackgroundEffects: false,
  allowPreviewVideos: false,
});

export function useMotionPreference(): MotionPreference {
  const [prefs, setPrefs] = useState<MotionPreference>(() => {
    if (typeof window === "undefined") {
      return defaultPreference;
    }
    return toMotionPreference(computePerformanceProfile());
  });

  useEffect(() => {
    const update = () => setPrefs(toMotionPreference(computePerformanceProfile()));
    update();
    return subscribePerformanceProfile(update);
  }, []);

  return prefs;
}
