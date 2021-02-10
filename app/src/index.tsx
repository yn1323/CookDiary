import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'src/store'
import { Router } from 'react-router-dom'
import Index from 'src/page/Index'
import registerServiceWorker from 'src/reagisterServiceWorker'
import 'src/asset/scss/index.scss'
import createHashHistory from 'history/createHashHistory'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { initAd } from './helper'

const run = (isEmulator = true) => {
  const history = createHashHistory()
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffb400',
        contrastText: '#eee',
        dark: 'green',
        light: 'blue',
      },
      secondary: {
        main: '#2994b2',
        contrastText: '#666',
        dark: '#097492',
        light: 'blue',
      },
    },
  })
  ReactDOM.render(
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            <Router history={history}>
              <Index />
            </Router>
          </Provider>
        </Suspense>
      </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
  registerServiceWorker()
  if (isEmulator) {
    initAd()
  }
}

// eslint-disable-next-line no-prototype-builtins
if (window.hasOwnProperty('cordova')) {
  document.addEventListener('deviceready', () => run(true), false)
} else {
  run(false)
}
