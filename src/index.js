import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import { UserContextProvider } from './contexts/user-context'

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('app'),
)
