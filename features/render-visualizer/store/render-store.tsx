'use client'

import { createContext, useContext, useMemo, useState } from 'react'

type RenderEvent = {
  id: number
  component: string
  timestamp: number
}

type RenderStoreContextValue = {
  events: RenderEvent[]

  addEvent: (component: string) => void
}

const RenderStoreContext = createContext<RenderStoreContextValue | null>(null)

export function RenderStoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [events, setEvents] = useState<RenderEvent[]>([])

  const value = useMemo(() => {
    return {
      events,

      addEvent(component: string) {
        setEvents((prev) => [
          {
            id: Date.now() + Math.random(),
            component,
            timestamp: Date.now(),
          },

          ...prev.slice(0, 19),
        ])
      },
    }
  }, [events])

  return (
    <RenderStoreContext.Provider value={value}>
      {children}
    </RenderStoreContext.Provider>
  )
}

export function useRenderStore() {
  const context = useContext(RenderStoreContext)

  if (!context) {
    throw new Error('useRenderStore must be used within RenderStoreProvider')
  }

  return context
}
