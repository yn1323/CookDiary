import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'src/store'
import { Router } from 'react-router-dom'
import Index from 'src/page/Index'
import registerServiceWorker from 'src/reagisterServiceWorker'
import 'src/asset/scss/index.scss'
import createHashHistory from 'history/createHashHistory'

const run = () => {
  const history = createHashHistory()

  ReactDOM.render(
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <Router history={history}>
            <Index />
          </Router>
        </Provider>
      </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
  )
  registerServiceWorker()
}

// eslint-disable-next-line no-prototype-builtins
if (window.hasOwnProperty('cordova')) {
  document.addEventListener('deviceready', run, false)
} else {
  run()
}
