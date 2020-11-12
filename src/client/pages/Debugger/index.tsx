import React from 'react'

const ActualDebugger = React.lazy(() =>
  import(/* webpackChunkName: "debugger" */ './ActualDebugger').then((m) => ({
    default: m.ActualDebugger,
  })),
)

export const Debugger: React.FC = () => {
  if (window.hedvigClientConfig.appEnvironment === 'production') {
    return null
  }

  return (
    <React.Suspense fallback="loading">
      <ActualDebugger />
    </React.Suspense>
  )
}
