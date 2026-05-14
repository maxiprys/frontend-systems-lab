'use client'

import { useCallback, useMemo, useState } from 'react'

import { ExpensiveList } from './components/expensive-list'
import { MemoChild } from './components/memo-child'
import { RenderBox } from './components/render-box'

export function RenderVisualizer() {
  const [count, setCount] = useState(0)

  const [memoEnabled, setMemoEnabled] =
    useState(true)

  const [callbackEnabled, setCallbackEnabled] =
    useState(true)

  const expensiveValue = useMemo(() => {
    return count * 2
  }, [count])

  const stableCallback = useCallback(() => {
    console.log('stable callback')
  }, [])

  const unstableCallback = () => {
    console.log('unstable callback')
  }

  const callback = callbackEnabled
    ? stableCallback
    : unstableCallback

  const ChildComponent = memoEnabled
    ? MemoChild
    : ({
        count,
        onAction,
      }: {
        count: number
        onAction: () => void
      }) => (
        <MemoChild
          count={count}
          onAction={onAction}
        />
      )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={() =>
            setCount((prev) => prev + 1)
          }
          className="rounded-xl bg-white px-5 py-3 font-medium text-black transition-opacity hover:opacity-90"
        >
          Increment
        </button>

        <button
          onClick={() =>
            setMemoEnabled((prev) => !prev)
          }
          className={`
            rounded-xl border px-5 py-3 text-sm transition-colors
            ${
              memoEnabled
                ? 'border-green-500 text-green-400'
                : 'border-zinc-700 text-zinc-400'
            }
          `}
        >
          React.memo: {memoEnabled ? 'ON' : 'OFF'}
        </button>

        <button
          onClick={() =>
            setCallbackEnabled((prev) => !prev)
          }
          className={`
            rounded-xl border px-5 py-3 text-sm transition-colors
            ${
              callbackEnabled
                ? 'border-green-500 text-green-400'
                : 'border-zinc-700 text-zinc-400'
            }
          `}
        >
          useCallback: {callbackEnabled ? 'ON' : 'OFF'}
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

      <ChildComponent
        count={count}
        onAction={callback}
      />

      <ExpensiveList value={expensiveValue} />
    </div>
  )
}