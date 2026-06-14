export function StepChip({
  step,
  total,
  label,
}: {
  step: number;
  total: number;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-3 py-1 text-accent">
      <span className="font-display text-base leading-none">
        {step.toString().padStart(2, "0")}
        <span className="text-accent/40">/</span>
        {total.toString().padStart(2, "0")}
      </span>
      <span className="h-3 w-px bg-accent/30" aria-hidden />
      <span className="text-[0.7rem] font-medium uppercase tracking-[0.08em]">
        {label}
      </span>
    </span>
  );
}
