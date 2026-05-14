export function Topbar() {
    return (
      <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-6">
        <div>
          <p className="text-sm text-zinc-500">
            React Rendering & Performance
          </p>
        </div>
  
        <div className="flex items-center gap-2">
          <div className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
            Next.js
          </div>
  
          <div className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
            React 19
          </div>
        </div>
      </header>
    )
  }