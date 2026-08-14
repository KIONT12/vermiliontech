export interface PerformanceProfile {
  reducedMotion: boolean;
  saveData: boolean;
  slowConnection: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  prefersLightEffects: boolean;
  allowLivePreviews: boolean;
  allowHeroVideo: boolean;
  allowBackgroundEffects: boolean;
  allowPreviewVideos: boolean;
}

export const conservativePerformanceProfile: PerformanceProfile = {
  reducedMotion: false,
  saveData: false,
  slowConnection: false,
  isMobile: true,
  isTablet: false,
  isDesktop: false,
  prefersLightEffects: false,
  allowLivePreviews: true,
  allowHeroVideo: true,
  allowBackgroundEffects: false,
  allowPreviewVideos: true,
};

function readConnection() {
  const connection = (
    navigator as Navigator & {
      connection?: {
        saveData?: boolean;
        effectiveType?: string;
        addEventListener?: (type: string, cb: () => void) => void;
        removeEventListener?: (type: string, cb: () => void) => void;
      };
    }
  ).connection;

  const saveData = Boolean(connection?.saveData);
  const slowConnection =
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g";

  return { connection, saveData, slowConnection };
}

export function computePerformanceProfile(): PerformanceProfile {
  if (typeof window === "undefined") {
    return conservativePerformanceProfile;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const { saveData, slowConnection } = readConnection();

  const prefersLightEffects = reducedMotion || saveData || slowConnection;

  const allowMedia = !reducedMotion && !saveData;

  return {
    reducedMotion,
    saveData,
    slowConnection,
    isMobile,
    isTablet,
    isDesktop,
    prefersLightEffects,
    allowLivePreviews: allowMedia,
    allowHeroVideo: allowMedia,
    allowBackgroundEffects: !isMobile && !reducedMotion,
    allowPreviewVideos: allowMedia,
  };
}

export function subscribePerformanceProfile(onChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mobile = window.matchMedia("(max-width: 767px)");
  const tablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
  const desktop = window.matchMedia("(min-width: 1024px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const { connection } = readConnection();

  const handler = () => onChange();
  mobile.addEventListener("change", handler);
  tablet.addEventListener("change", handler);
  desktop.addEventListener("change", handler);
  reducedMotion.addEventListener("change", handler);
  connection?.addEventListener?.("change", handler);

  return () => {
    mobile.removeEventListener("change", handler);
    tablet.removeEventListener("change", handler);
    desktop.removeEventListener("change", handler);
    reducedMotion.removeEventListener("change", handler);
    connection?.removeEventListener?.("change", handler);
  };
}

export function livePreviewScale(
  baseScale: number,
  profile: Pick<PerformanceProfile, "isMobile" | "isTablet">,
) {
  if (profile.isMobile) {
    return baseScale * 0.38;
  }
  if (profile.isTablet) {
    return baseScale * 0.58;
  }
  return baseScale;
}
