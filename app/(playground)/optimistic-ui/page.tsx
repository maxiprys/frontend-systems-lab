import { OptimisticUiDemo } from '@/features/optimistic-ui/optimistic-ui-demo'

export default function OptimisticUiPage() {
  return (
    <>
      <div>
        <p className="mb-2 text-sm text-zinc-500">
          Frontend Architecture Playground
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">Optimistic UI</h1>
      </div>

      <OptimisticUiDemo />
    </>
  )
}
