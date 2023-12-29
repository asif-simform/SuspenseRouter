import { useLayoutEffect, useRef, useState, useTransition } from 'react'
import { Router } from 'react-router-dom'
import { BrowserHistory, createBrowserHistory, Update } from 'history'
import { endLoading, startLoading } from './nprogress';

export interface BrowserRouterProps {
  basename?: string
  children?: React.ReactNode
  window?: Window
}

export function SuspenseRouter({ basename, children, window }: BrowserRouterProps) {
  const historyRef = useRef<BrowserHistory>()
  const [ , startTransition] = useTransition()

  console.log('********* SuspenseRouter *********');

  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({ window })
  }

  const history = historyRef.current
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  function setStateAsync(update: Update) {
    startLoading();
    startTransition(() => {
      setState(update)
      endLoading();
    })
  }

  useLayoutEffect(() => history.listen(setStateAsync), [history])

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}
export default SuspenseRouter