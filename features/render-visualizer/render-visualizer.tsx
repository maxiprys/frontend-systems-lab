'use client'

import { useMemo, useState } from 'react'

import { ExpensiveList } from './components/expensive-list'
import { RenderBox } from './components/render-box'

export function RenderVisualizer() {
  const [count, setCount] = useState(0)
  const [memoEnabled, setMemoEnabled] = useState(false)

  const expensiveValue = memoEnabled
    ? useMemo(() => count * 2, [count])
    : count * 2

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="rounded-xl bg-white px-5 py-3 font-medium text-black transition-opacity hover:opacity-90"
        >
          Increment
        </button>

        <button
          onClick={() =>
            setMemoEnabled((prev) => !prev)
          }
          className={`
            rounded-xl border px-5 py-3 font-medium transition-colors
            ${
              memoEnabled
                ? 'border-green-500 text-green-400'
                : 'border-zinc-700 text-zinc-400'
            }
          `}
        >
          useMemo: {memoEnabled ? 'ON' : 'OFF'}
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <RenderBox
          title="Counter"
          value={count}
        />

        <RenderBox
          title="Computed Value"
          value={expensiveValue}
        />
      </div>

      <ExpensiveList value={expensiveValue} />
    </div>
  )
}