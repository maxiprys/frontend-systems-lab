'use client'

import { useEffect, useRef } from 'react'

export function useWhyDidYouRender(
  name: string,
  props: Record<string, unknown>,
) {
  const previousProps = useRef<Record<string, unknown>>(props)

  useEffect(() => {
    const allKeys = Object.keys({
      ...previousProps.current,
      ...props,
    })

    const changes = allKeys.reduce<
      Record<
        string,
        {
          previous: unknown
          current: unknown
        }
      >
    >((acc, key) => {
      if (previousProps.current[key] !== props[key]) {
        acc[key] = {
          previous: previousProps.current[key],
          current: props[key],
        }
      }

      return acc
    }, {})

    if (Object.keys(changes).length) {
      console.log(`[why-did-you-render] ${name}`, changes)
    }

    previousProps.current = props
  })
}
