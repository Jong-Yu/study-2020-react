import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 18px;
`

const TitleContainer = styled.div`
  overflow: hidden;
`
const Title = styled.span`
  float: left;
  font-weight: 400;
  color: rgb(102, 102, 102);
`

const HistoryRemoveBtn = styled.span`
  float: right;
  color: rgb(167, 167, 167);
`
const HistoryContainer = styled.ul`
  margin: 10px 0;
`

const KeywordsContainer = styled.li`
  padding: 10px 0px;
`

const Keywords = styled.span`
  font-size: 18px;
  font-weight: 400;
`

const KeywordsRemoveBtn = styled.button`
  float: right;
  color: #0cde8b;
  border: 1px solid #0cde8b;
  padding: 3px 5px;
  border-radius: 15px;
`

function RecentSearchList({ keywords, onRemoveKeyword, onAllRemobeKeyword }) {
  return (
    <Container>
      <TitleContainer>
        <Title>최근 검색어</Title>
        <HistoryRemoveBtn
          onClick={() => {
            onAllRemobeKeyword()
          }}
        >
          전체삭제
        </HistoryRemoveBtn>
      </TitleContainer>
      <HistoryContainer>
        {keywords.map(({ id, label }) => (
          <KeywordsContainer key={id}>
            <Keywords>{label}</Keywords>
            <KeywordsRemoveBtn onClick={() => onRemoveKeyword(id)}>
              삭제
            </KeywordsRemoveBtn>
          </KeywordsContainer>
        ))}
      </HistoryContainer>
    </Container>
  )
}

export default RecentSearchList
