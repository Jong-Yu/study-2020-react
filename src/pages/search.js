import React, { useState } from 'React'

import Input from '../components/search/input'
import RecentSearchList from '../components/search/recent-search-list'

function SearchPage() {
  const [] = useState()

  return (
    <div>
      <Input />
      <RecentSearchList />
    </div>
  )
}

export default SearchPage
