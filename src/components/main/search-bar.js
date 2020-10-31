import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0px 20px;
`

const SearchBox = styled.div`
  border: 1px solid rgb(11, 222, 139);
  height: 54px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
`

function SearchBar() {
  return (
    <Container>
      <a href="/search">
        <SearchBox></SearchBox>
      </a>
    </Container>
  )
}

export default SearchBar
