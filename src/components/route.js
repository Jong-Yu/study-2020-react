import React from 'react'
import { Route as BaseRoute, useHistory } from 'react-router-dom'

import { useUserContext } from '../contexts/user-context'

function Route({ auth, ...props }) {
  const { user } = useUserContext()
  const history = useHistory()

  if (auth && user === null) {
    history.replace('/login')
  }

  return <BaseRoute {...props} />
}

export default Route
