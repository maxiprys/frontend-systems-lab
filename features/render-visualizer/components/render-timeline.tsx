'use client'

import { useRenderStore } from '../store/render-store'
import { Card } from '@/components/ui/card'

export function RenderTimeline() {
  const { events } = useRenderStore()

  return (
    <Card>
      <div className="mb-4">
        <h3 className="font-medium">Render Timeline</h3>

        <p className="mt-1 text-sm text-zinc-500">Recent component rerenders</p>
      </div>

      <div className="space-y-2">
        {events.length === 0 && (
          <p className="text-sm text-zinc-500">No renders tracked yet.</p>
        )}

        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between rounded-xl border border-zinc-800 px-4 py-3 text-sm"
          >
            <span>{event.component}</span>

            <span className="text-zinc-500">
              {new Date(event.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
