interface BrandNameProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { primary: "text-sm", secondary: "text-sm" },
  md: { primary: "text-lg", secondary: "text-lg" },
  lg: { primary: "text-2xl sm:text-3xl", secondary: "text-2xl sm:text-3xl" },
};

export default function BrandName({ className = "", size = "md" }: BrandNameProps) {
  const s = sizes[size];

  return (
    <span className={`inline-flex items-baseline font-bold tracking-tight ${className}`}>
      <span className={`${s.primary} text-red-500`}>VERMILION</span>
      <span className={`${s.secondary} text-white`}>TECH</span>
    </span>
  );
}
