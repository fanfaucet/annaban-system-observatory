import type { HealthStatus } from "@/types/system";

const styles: Record<HealthStatus, string> = {
  operational: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
  degraded: "bg-amber-500/20 text-amber-400 border-amber-500/40",
  maintenance: "bg-sky-500/20 text-sky-400 border-sky-500/40",
  offline: "bg-rose-500/20 text-rose-400 border-rose-500/40",
  simulated: "bg-violet-500/20 text-violet-300 border-violet-500/40",
};

export function StatusBadge({ status }: { status: HealthStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-soft" />
      {status}
    </span>
  );
}
