import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px 0px;
`

const LogoImg = styled.img`
  width: 165px;
  margin: 0px auto;
  display: block;
`

function Logo() {
  return (
    <Container>
      <LogoImg src="https://s.pstatic.net/static/www/m/2019/img_logo_main_home.png"></LogoImg>
    </Container>
  )
}

export default Logo
