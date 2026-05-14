'use client'

import { useState } from 'react'

import { NaiveList } from './components/naive-list'
import { VirtualizedList } from './components/virtualized-list'

export function VirtualizationDemo() {
  const [mode, setMode] = useState<'naive' | 'virtualized'>('naive')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMode('naive')}
          className={`rounded-xl border px-5 py-3 text-sm transition-colors ${
            mode === 'naive'
              ? 'border-red-500 text-red-400'
              : 'border-zinc-700 text-zinc-400'
          } `}
        >
          Naive Rendering
        </button>

        <button
          onClick={() => setMode('virtualized')}
          className={`rounded-xl border px-5 py-3 text-sm transition-colors ${
            mode === 'virtualized'
              ? 'border-green-500 text-green-400'
              : 'border-zinc-700 text-zinc-400'
          } `}
        >
          Virtualized Rendering
        </button>
      </div>

      {mode === 'naive' ? <NaiveList /> : <VirtualizedList />}
    </div>
  )
}
