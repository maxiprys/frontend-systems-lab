import { SuspenseDemo } from '@/features/suspense-demo/suspense-demo'

export default function SuspenseDemoPage() {
  return (
    <>
      <div>
        <p className="mb-2 text-sm text-zinc-500">
          Frontend Architecture Playground
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Suspense & Streaming
        </h1>
      </div>

      <SuspenseDemo />
    </>
  )
}
