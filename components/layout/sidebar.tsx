'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Blocks, ChartNoAxesCombined, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  {
    label: 'Render Visualizer',
    href: '/render-visualizer',
    icon: Zap,
  },
  {
    label: 'Virtualization',
    href: '/virtualization',
    icon: Blocks,
  },
  {
    label: 'Optimistic UI',
    href: '/optimistic-ui',
    icon: ChartNoAxesCombined,
  },
]

export function Sidebar() {
  const pathname = usePathname()

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

          const active = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors',
                active
                  ? 'bg-zinc-900 text-white'
                  : 'text-zinc-400 hover:bg-zinc-900 hover:text-white',
              )}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
