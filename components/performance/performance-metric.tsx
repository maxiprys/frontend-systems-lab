type PerformanceMetricProps = {
  label: string
  value: string | number
}

export function PerformanceMetric({ label, value }: PerformanceMetricProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
      <p className="text-xs text-zinc-500">{label}</p>

      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  )
}
