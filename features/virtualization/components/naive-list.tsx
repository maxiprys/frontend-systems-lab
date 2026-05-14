'use client'

import { Card } from '@/components/ui/card'

const items = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  label: `Item ${i}`,
}))

export function NaiveList() {
  return (
    <Card>
      <div className="mb-4">
        <h3 className="font-medium">Naive Rendering</h3>

        <p className="mt-1 text-sm text-zinc-500">
          Rendering all 10,000 rows at once
        </p>
      </div>

      <div className="h-[500px] overflow-auto rounded-xl border border-zinc-800">
        {items.map((item) => (
          <div
            key={item.id}
            className="border-b border-zinc-800 px-4 py-3 text-sm"
          >
            {item.label}
          </div>
        ))}
      </div>
    </Card>
  )
}
