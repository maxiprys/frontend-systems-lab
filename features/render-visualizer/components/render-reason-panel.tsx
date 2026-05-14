import { Card } from '@/components/ui/card'

type RenderReasonPanelProps = {
  callbackEnabled: boolean
  memoEnabled: boolean
}

export function RenderReasonPanel({
  callbackEnabled,
  memoEnabled,
}: RenderReasonPanelProps) {
  return (
    <Card>
      <h3 className="mb-4 font-medium">Render Analysis</h3>

      <div className="space-y-3 text-sm">
        <div className="rounded-xl border border-zinc-800 p-4">
          <p className="font-medium">React.memo</p>

          <p className="mt-1 text-zinc-500">
            {memoEnabled
              ? 'Child components skip rerenders when props are stable.'
              : 'Child components rerender with parent updates.'}
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 p-4">
          <p className="font-medium">useCallback</p>

          <p className="mt-1 text-zinc-500">
            {callbackEnabled
              ? 'Function reference remains stable between renders.'
              : 'New callback reference created on every render.'}
          </p>
        </div>
      </div>
    </Card>
  )
}
