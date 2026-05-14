'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { useState } from 'react'

import { createTask, getTasks, type Task } from './api/fake-api'

import { TaskCard } from './components/task-card'
import { Button } from '@/components/ui/button'
import { TaskSkeleton } from './components/task-skeleton'

export function OptimisticUiDemo() {
  const [title, setTitle] = useState('')

  const queryClient = useQueryClient()

  const { data = [], isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })

  const mutation = useMutation({
    mutationFn: createTask,

    onMutate: async (newTitle) => {
      await queryClient.cancelQueries({
        queryKey: ['tasks'],
      })

      const previousTasks = queryClient.getQueryData<Task[]>(['tasks']) || []

      const optimisticTask: Task = {
        id: Date.now(),
        title: newTitle,
      }

      queryClient.setQueryData<Task[]>(['tasks'], (old = []) => [
        ...old,
        optimisticTask,
      ])

      setTitle('')

      return {
        previousTasks,
      }
    },

    onError: (_error, _variables, context) => {
      queryClient.setQueryData(['tasks'], context?.previousTasks)
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Add new task..."
          className="flex-1 rounded-xl border border-zinc-800 bg-transparent px-4 py-3 outline-none"
        />

        <Button onClick={() => mutation.mutate(title)} disabled={!title}>
          Add Task
        </Button>
      </div>

      {isLoading && (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <TaskSkeleton key={index} />
          ))}
        </div>
      )}

      {!isLoading && (
        <div className="space-y-3">
          {data.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}

      {mutation.isError && (
        <div className="rounded-xl border border-red-500 bg-red-500/10 p-4 text-sm text-red-400">
          Server rejected optimistic update. Rolling back UI state.
        </div>
      )}
    </div>
  )
}
