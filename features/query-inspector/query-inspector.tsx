'use client'

import { useQueryClient } from '@tanstack/react-query'

import { QueryCard } from './components/query-card'

export function QueryInspector() {
  const queryClient = useQueryClient()

  const queries = queryClient.getQueryCache().getAll()

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">Query Inspector</h2>

        <p className="mt-2 text-zinc-500">
          Inspect query cache state and observer activity.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {queries.map((query) => (
          <QueryCard
            key={query.queryHash}
            queryKey={JSON.stringify(query.queryKey)}
            observers={query.getObserversCount()}
            status={query.state.status}
            stale={query.isStale()}
          />
        ))}
      </div>

      {queries.length === 0 && (
        <p className="text-sm text-zinc-500">No active queries detected.</p>
      )}
    </div>
  )
}
