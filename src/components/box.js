import React, { useState } from 'react'

import styled from 'styled-components'

const Box = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  width: 200px;
  height: 200px;

  ${({ color }) => `background-color: ${color};`}
`
// ${({ width }) => `width: ${color}px;`}

function BoxContainer() {
  const [color, setColor] = useState('gray')
  const [width, setWidth] = useState('100px')
  return (
    <>
      <input
        onChange={(event) => {
          setColor(event.target.value)
        }}
      />
      <input
        onChange={(event) => {
          setwitdh(event.target.value)
        }}
      />
      <Box color={color} />
    </>
  )
}

export default BoxContainer
