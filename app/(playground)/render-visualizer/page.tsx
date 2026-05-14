import { RenderVisualizer } from '@/features/render-visualizer/render-visualizer'

export default function RenderVisualizerPage() {
  return (
    <>
      <div>
        <p className="mb-2 text-sm text-zinc-500">
          Frontend Architecture Playground
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Render Performance Visualizer
        </h1>
      </div>

      <RenderVisualizer />
    </>
  )
}
