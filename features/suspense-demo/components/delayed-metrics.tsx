import { Card } from '@/components/ui/card'

async function getMetrics() {
  await new Promise((resolve) => setTimeout(resolve, 2500))

  return [
    {
      label: 'TTFB',
      value: '82ms',
    },
    {
      label: 'FPS',
      value: '60',
    },
    {
      label: 'Hydration',
      value: '1.2s',
    },
  ]
}

export async function DelayedMetrics() {
  const metrics = await getMetrics()

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.label}>
          <p className="text-sm text-zinc-500">{metric.label}</p>

          <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
        </Card>
      ))}
    </div>
  )
}
