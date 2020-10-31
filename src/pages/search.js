import React, { useState, useEffect } from 'react'

import Input from '../components/search/input'
import RecentSearchList from '../components/search/recent-search-list'

function SearchPage() {
  const [keywords, setKeywords] = useState([])

  useEffect(() => {
    setKeywords(JSON.parse(localStorage.getItem('keywords') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  const handleAddKeyword = (keyword) => {
    setKeywords([...keywords, { id: Date.now(), label: keyword }])
  }

  const handleRemoveKeyword = (id) => {
    setKeywords(
      keywords.filter((keywords) => {
        return keywords.id !== id
      }),
    )
  }

  const handleAllRemoveKeyword = () => {
    setKeywords([])
  }

  return (
    <div>
      <Input keywords={keywords} onAddkeyword={handleAddKeyword} />
      <RecentSearchList
        keywords={keywords}
        onRemoveKeyword={handleRemoveKeyword}
        onAllRemobeKeyword={handleAllRemoveKeyword}
      />
    </div>
  )
}

export default SearchPage
