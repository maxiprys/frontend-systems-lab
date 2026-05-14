'use client'

import { useMemo, useState } from 'react'
import { Card } from '@/components/ui/card'

const ITEM_HEIGHT = 48
const VISIBLE_ITEMS = 12

const items = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  label: `Item ${i}`,
}))

export function VirtualizedList() {
  const [scrollTop, setScrollTop] = useState(0)

  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT)

  const visibleItems = useMemo(() => {
    return items.slice(startIndex, startIndex + VISIBLE_ITEMS)
  }, [startIndex])

  return (
    <Card>
      <div className="mb-4">
        <h3 className="font-medium">Virtualized Rendering</h3>

        <p className="mt-1 text-sm text-zinc-500">
          Rendering only visible rows
        </p>
      </div>

      <div
        onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
        className="relative h-[500px] overflow-auto rounded-xl border border-zinc-800"
      >
        <div
          style={{
            height: items.length * ITEM_HEIGHT,
          }}
        >
          <div
            style={{
              transform: `translateY(${startIndex * ITEM_HEIGHT}px)`,
            }}
          >
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="flex h-12 items-center border-b border-zinc-800 px-4 text-sm"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
