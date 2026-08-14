"use client";

import { useEffect, useState } from "react";
import {
  computePerformanceProfile,
  conservativePerformanceProfile,
  type PerformanceProfile,
  subscribePerformanceProfile,
} from "@/lib/performanceProfile";

export type { PerformanceProfile };

export function usePerformanceProfile(): PerformanceProfile {
  const [profile, setProfile] = useState<PerformanceProfile>(() => {
    if (typeof window === "undefined") {
      return conservativePerformanceProfile;
    }
    return computePerformanceProfile();
  });

  useEffect(() => {
    const update = () => setProfile(computePerformanceProfile());
    update();
    return subscribePerformanceProfile(update);
  }, []);

  return profile;
}
