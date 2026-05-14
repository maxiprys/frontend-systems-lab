'use client'

import { useEffect, useState } from 'react'

import { useRenderCount } from '../hooks/use-render-count'

type RenderBoxProps = {
  title: string
  value: number
}

export function RenderBox({ title, value }: RenderBoxProps) {
  const renderCount = useRenderCount()

  const [flash, setFlash] = useState(false)

  useEffect(() => {
    setFlash(true)

    const timeout = setTimeout(() => {
      setFlash(false)
    }, 300)

    return () => clearTimeout(timeout)
  })

  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 ${flash ? 'border-green-400 bg-green-400/10' : 'border-zinc-800'} `}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>

        <span className="text-sm text-zinc-500">renders: {renderCount}</span>
      </div>

      <div className="mt-6 text-5xl font-semibold tracking-tight">{value}</div>
    </div>
  )
}
