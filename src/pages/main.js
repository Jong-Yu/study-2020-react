import React from 'React'

import Navbar from '../components/main/navbar'
import SearchBar from '../components/main/search-bar'
import Logo from '../components/main/logo'

function MainPage() {
  return (
    <div>
      <Navbar />
      <Logo />
      <SearchBar />
    </div>
  )
}

export default MainPage
