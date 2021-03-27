import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import * as Sentry from '@sentry/react'
// import { Integrations } from '@sentry/tracing'

import { Provider as BusProvider } from '@/hooks/useBus'

// redux
import { Provider } from 'react-redux'
import store from '@/redux'

// styles
import '@/assets/icons/iconfont'
import '@/styles/index.less'

// Sentry.init({
//   dsn: 'https://923de7951ed64b0793fdd1fe4ece9204@o552443.ingest.sentry.io/5678284',
//   integrations: [new Integrations.BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// })

var fundebug = require('fundebug-javascript')
fundebug.apikey = '4963424eb3fb387d0695dafec7b232143eea36fe872a2d691e112e9766189ff4'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
    // 将component中的报错发送到Fundebug
    fundebug.notifyError(error, {
      metaData: {
        info: info
      }
    })
  }

  render() {
    if (this.state.hasError) {
      return null
      // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
    }
    return this.props.children
  }
}

ReactDOM.render(
  < ErrorBoundary >
    <BusProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </BusProvider>
  </ErrorBoundary>,
  document.getElementById('root')
)
