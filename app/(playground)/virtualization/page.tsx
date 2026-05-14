import { VirtualizationDemo } from '@/features/virtualization/virtualization-demo'

export default function VirtualizationPage() {
  return (
    <>
      <div>
        <p className="mb-2 text-sm text-zinc-500">
          Frontend Architecture Playground
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          List Virtualization
        </h1>
      </div>

      <VirtualizationDemo />
    </>
  )
}
