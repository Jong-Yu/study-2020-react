import React, { useState } from 'react'
import styled from 'styled-components'
import { fecthLogin } from './service'

import { useHistory } from 'react-router-dom'
import { useUserContext } from '../../contexts/user-context'

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`

function From() {
  const { setUser } = useUserContext()
  const history = useHistory()
  const [fromValues, setFromValues] = useState({
    id: '',
    password: '',
  })

  const { id, password } = fromValues

  const handleFromValue = ({ target: { id, value } }) => {
    setFromValues({
      ...fromValues,
      [id]: value,
    })
  }

  const handleSubmit = async () => {
    try {
      const user = await fecthLogin({ id, password })

      setUser(user)

      history.replace('/')
    } catch (error) {
      window.alert(error)
    }

    // setUser({
    //   id,
    //   password,
    // })
    // history.replace('/')
  }

  const isSubmitable = id && password

  return (
    <Container>
      <Input
        id="id"
        placeholder="아이디를 입력해주세요"
        value={id}
        onChange={handleFromValue}
      />
      <Input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={handleFromValue}
      />
      <Button
        disabled={!isSubmitable}
        onClick={isSubmitable ? handleSubmit : () => {}}
      >
        로그인
      </Button>
    </Container>
  )
}

export default From
