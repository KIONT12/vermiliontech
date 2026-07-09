import LiveTypingBackground from "@/components/ui/LiveTypingBackground";
import LiveLogoWatermark from "@/components/ui/LiveLogoWatermark";

export default function ThemeBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden theme-bg">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute inset-0 grid-bg opacity-25" />

      <LiveLogoWatermark />

      <LiveTypingBackground />

      <div className="theme-bg-glow absolute top-0 left-1/2 h-[480px] w-[640px] -translate-x-1/2 rounded-full bg-red-600/8 blur-[120px]" />
      <div className="theme-bg-glow absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-red-900/8 blur-[100px]" />
    </div>
  );
}
