import { Sidebar } from '@/components/layout/sidebar'
import { Topbar } from '@/components/layout/topbar'

export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex h-screen bg-[#09090b] text-zinc-100">
      <Sidebar />

      <section className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <div className="flex-1 overflow-auto p-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-8">
            {children}
          </div>
        </div>
      </section>
    </main>
  )
}
