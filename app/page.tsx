import Link from 'next/link'

import { Activity, Boxes, Database, Gauge } from 'lucide-react'

const features = [
  {
    title: 'Render Visualization',
    description:
      'Explore rerender patterns, memoization strategies, and rendering behavior.',
    href: '/render-visualizer',
    icon: Activity,
  },

  {
    title: 'Virtualization',
    description:
      'Simulate high-volume rendering with virtual scrolling techniques.',
    href: '/virtualization',
    icon: Boxes,
  },

  {
    title: 'Optimistic UI',
    description:
      'Visualize async mutations, optimistic updates, and rollback flows.',
    href: '/optimistic-ui',
    icon: Gauge,
  },

  {
    title: 'Query Inspector',
    description:
      'Inspect query cache state, observers, and stale/fresh lifecycles.',
    href: '/query-inspector',
    icon: Database,
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
      <section className="flex flex-col gap-6 pt-10">
        <div className="inline-flex w-fit items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-400">
          Frontend Architecture Playground
        </div>

        <div className="max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Frontend Systems Lab
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Interactive frontend engineering playground focused on rendering
            behavior, async state, streaming, and modern React architecture
            patterns.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/render-visualizer"
            className="rounded-xl bg-white px-5 py-3 font-medium text-black transition-opacity hover:opacity-90"
          >
            Explore Playground
          </Link>

          <a
            href="https://github.com/maxiprys/frontend-systems-lab"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-800 px-5 py-3 text-zinc-300 transition-colors hover:bg-zinc-900"
          >
            View Source
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon

          return (
            <Link
              key={feature.href}
              href={feature.href}
              className="group rounded-3xl border border-zinc-800 bg-zinc-950/40 p-8 transition-all hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
                <Icon className="h-5 w-5 text-zinc-300" />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-white">
                {feature.title}
              </h2>

              <p className="mt-3 leading-7 text-zinc-400">
                {feature.description}
              </p>

              <div className="mt-8 text-sm text-zinc-500 transition-colors group-hover:text-zinc-300">
                Explore →
              </div>
            </Link>
          )
        })}
      </section>
    </div>
  )
}
