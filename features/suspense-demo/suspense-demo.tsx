import { Suspense } from 'react'

import { DelayedMetrics } from './components/delayed-metrics'
import { MetricsSkeleton } from './components/metrics-skeleton'

export function SuspenseDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">Streaming Metrics</h2>

        <p className="mt-2 text-zinc-500">
          Server components stream progressively while preserving responsive UI.
        </p>
      </div>

      <Suspense fallback={<MetricsSkeleton />}>
        <DelayedMetrics />
      </Suspense>
    </div>
  )
}
