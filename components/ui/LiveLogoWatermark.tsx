import Image from "next/image";

export default function LiveLogoWatermark() {
  return (
    <div className="logo-watermark-wrap absolute inset-0 flex items-center justify-center">
      <div className="logo-glow" aria-hidden />
      <Image
        src="/vermiliontech-logo.png"
        alt=""
        width={720}
        height={720}
        priority
        sizes="(max-width: 768px) 90vw, 720px"
        className="logo-watermark logo-live-css h-[min(90vw,720px)] w-[min(90vw,720px)] object-contain"
      />
    </div>
  );
}
