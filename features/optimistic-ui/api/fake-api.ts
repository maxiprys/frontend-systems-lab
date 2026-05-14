export type Task = {
  id: number
  title: string
}

let tasks: Task[] = [
  {
    id: 1,
    title: 'Refactor dashboard layout',
  },
  {
    id: 2,
    title: 'Optimize rendering performance',
  },
]

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getTasks() {
  await sleep(800)

  return tasks
}

export async function createTask(title: string) {
  await sleep(1200)

  const shouldFail = Math.random() > 0.7

  if (shouldFail) {
    throw new Error('Failed to create task')
  }

  const task = {
    id: Date.now(),
    title,
  }

  tasks = [...tasks, task]

  return task
}
