import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const horizontalCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`
const Container = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 2px solid rgb(11, 222, 139);
  background-color: rgb(255, 255, 255);
  padding: 20px 60px;
  box-sizing: border-box;
`

const SearchArrow = styled(Link)`
  ${horizontalCenter}
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 18px;
  display: block;
  width: 21px;
  height: 18px;
  background-position: -164px -343px;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`

const InputContainer = styled.div`
  position: relative;
`
const Input = styled.input`
  width: 100%;
  background-color: #fff;
  font-weight: 700;
  font-size: 20px;
  box-sizing: border-box;
`

const SearchIcon = styled.span`
  ${horizontalCenter}
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  width: 24px;
  height: 24px;
  background-position: -356px -260px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: middle;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`

function SearchInput({ onAddkeyword }) {
  const [text, setText] = useState('')

  const handleTest = (event) => {
    setText(event.target.value)
  }

  const handleEnter = (event) => {
    if (event.keyCode === 13 && text) {
      onAddkeyword(text)
      setText('')
    }
  }

  return (
    <Container>
      <SearchArrow to="/"></SearchArrow>
      <InputContainer>
        <Input
          placeholder="검색어를 입력해주세요"
          value={text}
          onChange={handleTest}
          onKeyDown={handleEnter}
        ></Input>
      </InputContainer>
      <SearchIcon></SearchIcon>
    </Container>
  )
}

export default SearchInput
