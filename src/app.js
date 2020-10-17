import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import LoginPage from './pages/longin'
import MainPage from './pages/main'
import MyinfoPage from './pages/my-info'
import SearchPage from './pages/search'

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/myinfo" component={MyinfoPage}></Route>
          <Route path="/search" component={SearchPage}></Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App
