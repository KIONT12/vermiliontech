"use client";

import { useEffect, useState } from "react";
import { useMotionPreference } from "@/lib/hooks/useMotionPreference";

const LEFT_LINES = [
  "// VermilionTech",
  "const site = build({",
  "  stack: ['Next.js', 'React'],",
  "  goal: 'visitors → customers',",
  "})",
];

const RIGHT_LINES = [
  "// live client work",
  "await deploy({",
  "  gsoundz: true,",
  "  portfolio: 'live',",
  "})",
];

function TypewriterPanel({
  lines,
  title,
  className,
  paused,
}: {
  lines: string[];
  title: string;
  className: string;
  paused: boolean;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (paused) return;

    const currentLine = lines[lineIndex] ?? "";
    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), 48);
      return () => clearTimeout(timer);
    }

    if (lineIndex < lines.length - 1) {
      const timer = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 130);
      return () => clearTimeout(timer);
    }

    const resetTimer = setTimeout(() => {
      setLineIndex(0);
      setCharIndex(0);
    }, 4500);
    return () => clearTimeout(resetTimer);
  }, [paused, lineIndex, charIndex, lines]);

  const visibleLines = lines.slice(0, lineIndex + 1);
  const activeLine = lines[lineIndex] ?? "";
  const typed = activeLine.slice(0, charIndex);

  return (
    <div className={`code-terminal font-mono text-[10px] leading-relaxed lg:text-[11px] ${className}`}>
      <div className="code-terminal__bar">
        <span className="code-terminal__dot bg-red-400/70" />
        <span className="code-terminal__dot bg-yellow-400/70" />
        <span className="code-terminal__dot bg-green-400/70" />
        <span className="code-terminal__title">{title}</span>
      </div>
      <div className="code-terminal__body">
        {visibleLines.slice(0, -1).map((line, i) => (
          <div key={i} className="code-terminal__line text-zinc-500">
            {line || "\u00A0"}
          </div>
        ))}
        <div className="code-terminal__line text-zinc-500">
          {typed}
          <span className="typing-cursor" />
        </div>
      </div>
    </div>
  );
}

export default function LiveTypingBackground() {
  const { effectsEnabled } = useMotionPreference();
  const [tabHidden, setTabHidden] = useState(false);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (!effectsEnabled) {
    return null;
  }

  const paused = tabHidden;

  return (
    <>
      <TypewriterPanel
        lines={LEFT_LINES}
        title="build.tsx"
        paused={paused}
        className="absolute left-[4%] top-[18%] hidden w-[210px] md:block lg:w-[230px]"
      />
      <TypewriterPanel
        lines={RIGHT_LINES}
        title="deploy.tsx"
        paused={paused}
        className="absolute right-[4%] top-[22%] hidden w-[200px] xl:block"
      />
    </>
  );
}
