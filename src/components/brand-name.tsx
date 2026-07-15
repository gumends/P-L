import { cn } from "@/lib/utils";

export function BrandName({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-2 sm:gap-2.5", className)}>
      <span>P&L</span>
      <span>AGROLOGÍSTICA</span>
    </span>
  );
}
