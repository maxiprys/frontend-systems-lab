import { cn } from '@/lib/utils'
import type { Task } from '../api/fake-api'

type TaskCardProps = {
  task: Task
  optimistic?: boolean
}

export function TaskCard({ task, optimistic }: TaskCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border p-4 transition-all',
        optimistic ? 'border-yellow-500 bg-yellow-500/10' : 'border-zinc-800',
      )}
    >
      <div className="flex items-center justify-between">
        <p>{task.title}</p>

        {optimistic && (
          <span className="text-xs text-yellow-400">syncing...</span>
        )}
      </div>
    </div>
  )
}
