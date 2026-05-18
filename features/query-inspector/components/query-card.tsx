import { Card } from '@/components/ui/card'

type QueryCardProps = {
  queryKey: string
  observers: number
  status: string
  stale: boolean
}

export function QueryCard({
  queryKey,
  observers,
  status,
  stale,
}: QueryCardProps) {
  return (
    <Card className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-zinc-500">Query Key</p>

          <p className="mt-1 font-medium">{queryKey}</p>
        </div>

        <span
          className={`rounded-full px-2 py-1 text-xs ${
            stale
              ? 'bg-yellow-500/20 text-yellow-400'
              : 'bg-green-500/20 text-green-400'
          } `}
        >
          {stale ? 'stale' : 'fresh'}
        </span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-zinc-500">Observers</span>

        <span>{observers}</span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-zinc-500">Status</span>

        <span>{status}</span>
      </div>
    </Card>
  )
}
