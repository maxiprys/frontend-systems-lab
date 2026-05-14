'use client'

type ExpensiveListProps = {
  value: number
}

export function ExpensiveList({
  value,
}: ExpensiveListProps) {
  const items = Array.from(
    { length: 5000 },
    (_, i) => i * value,
  )

  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h3 className="mb-4 font-medium">
        Expensive Computation
      </h3>

      <p className="mb-4 text-sm text-zinc-500">
        Rendering 5,000 computed items
      </p>

      <div className="max-h-48 overflow-auto text-sm text-zinc-400">
        {items.slice(0, 100).map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  )
}