import React from 'react'

import Navbar from '../components/main/navbar'
import SearchBar from '../components/main/search-bar'
import Logo from '../components/main/logo'
import Webtoons from '../components/main/webtoons'
import RecommendWebtoons from '../components/main/recommend-webtoons'
import { useUserContext } from '../contexts/user-context'

function MainPage() {
  const { user } = useUserContext()

  return (
    <div>
      <Navbar />
      <Logo />
      <SearchBar />
      <Webtoons />
      {user && <RecommendWebtoons />}
    </div>
  )
}

export default MainPage
