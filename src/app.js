import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyles from './components/common/global-styles'
import LoginPage from './pages/longin'
import MainPage from './pages/main'
import MyinfoPage from './pages/my-info'
import SearchPage from './pages/search'
import SignupPage from './pages/signup'
import Route from './components/route'

const Container = styled.div`
  max-width: 720px;
  margin: 0px auto;
`

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route auth path="/myinfo" component={MyinfoPage}></Route>
          <Route path="/signup" component={SignupPage}></Route>
          <Route path="/search" component={SearchPage}></Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App
