'use client'

import { useRenderCount } from '../hooks/use-render-count'
import { useWhyDidYouRender } from '../hooks/use-why-did-you-render'

type ChildProps = {
  count: number
  onAction: () => void
}

export function Child({ count, onAction }: ChildProps) {
  const renders = useRenderCount()

  useWhyDidYouRender('Child', {
    count,
    onAction,
  })

  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Child Component</h3>

        <span className="text-sm text-zinc-500">renders: {renders}</span>
      </div>

      <p className="mt-6 text-4xl font-semibold">{count}</p>

      <button
        onClick={onAction}
        className="mt-6 rounded-xl bg-zinc-900 px-4 py-2 text-sm transition-opacity hover:opacity-80"
      >
        Trigger callback
      </button>
    </div>
  )
}
