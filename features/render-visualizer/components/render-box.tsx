'use client'

import { useEffect } from 'react'

import { useRenderCount } from '../hooks/use-render-count'
import { useRenderStore } from '../store/render-store'
import { Card } from '@/components/ui/card'

type RenderBoxProps = {
  title: string
  value: number
}

export function RenderBox({ title, value }: RenderBoxProps) {
  const renders = useRenderCount()

  const { addEvent } = useRenderStore()

  useEffect(() => {
    addEvent(title)
  }, [addEvent, title, value])

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>

        <span className="text-sm text-zinc-500">renders: {renders}</span>
      </div>

      <p className="mt-6 text-4xl font-semibold">{value}</p>
    </Card>
  )
}
