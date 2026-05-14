import { Blocks, Zap } from 'lucide-react'

const items = [
  {
    label: 'Render Visualizer',
    icon: Zap,
    active: true,
  },
  {
    label: 'Virtualization',
    icon: Blocks,
    active: false,
  },
]

export function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-zinc-800">
      <div className="border-b border-zinc-800 px-6 py-5">
        <h2 className="text-lg font-semibold tracking-tight">
          Frontend Systems Lab
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Advanced React architecture patterns
        </p>
      </div>

      <nav className="flex flex-col gap-2 p-3">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.label}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors ${
                item.active
                  ? 'bg-zinc-900 text-white'
                  : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
              } `}
            >
              <Icon size={18} />
              {item.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
