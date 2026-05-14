import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function TaskSkeleton() {
  return (
    <Card className="space-y-3">
      <Skeleton className="h-4 w-1/2" />

      <Skeleton className="h-4 w-1/4" />
    </Card>
  )
}
