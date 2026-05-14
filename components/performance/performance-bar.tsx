'use client'

import { usePathname } from 'next/navigation'

import { useIsMutating, useQueryClient } from '@tanstack/react-query'

import { PerformanceMetric } from './performance-metric'

const moduleMap: Record<string, string> = {
  '/render-visualizer': 'Render Visualizer',

  '/virtualization': 'Virtualization',

  '/optimistic-ui': 'Optimistic UI',
}

export function PerformanceBar() {
  const pathname = usePathname()

  const queryClient = useQueryClient()

  const mutations = useIsMutating()

  const cacheSize = queryClient.getQueryCache().getAll().length

  const activeModule = moduleMap[pathname] ?? 'Unknown'

  return (
    <div className="grid gap-3 md:grid-cols-4">
      <PerformanceMetric label="Active Module" value={activeModule} />

      <PerformanceMetric label="Query Cache" value={`${cacheSize} entries`} />

      <PerformanceMetric label="Pending Mutations" value={mutations} />

      <PerformanceMetric label="Runtime" value="Stable" />
    </div>
  )
}
