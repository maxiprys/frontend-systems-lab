import { Sidebar } from '@/components/layout/sidebar'
import { Topbar } from '@/components/layout/topbar'
import { RenderVisualizer } from '@/features/render-visualizer/render-visualizer'

export default function HomePage() {
  return (
    <main className="flex h-screen bg-[#09090b] text-zinc-100">
      <Sidebar />

      <section className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <div className="flex-1 overflow-auto p-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-8">
            <div>
              <p className="mb-2 text-sm text-zinc-500">
                Frontend Architecture Playground
              </p>

              <h1 className="text-4xl font-semibold tracking-tight">
                Render Performance Visualizer
              </h1>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-10">
              <RenderVisualizer />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}