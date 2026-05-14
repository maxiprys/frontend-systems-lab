import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6',
        className,
      )}
      {...props}
    />
  )
}
