import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function MetricsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="space-y-4">
          <Skeleton className="h-4 w-24" />

          <Skeleton className="h-8 w-20" />
        </Card>
      ))}
    </div>
  )
}
