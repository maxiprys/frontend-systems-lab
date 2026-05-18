import { QueryInspector } from '@/features/query-inspector/query-inspector'

export default function QueryInspectorPage() {
  return (
    <>
      <div>
        <p className="mb-2 text-sm text-zinc-500">
          Frontend Architecture Playground
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Query Inspector
        </h1>
      </div>

      <QueryInspector />
    </>
  )
}
