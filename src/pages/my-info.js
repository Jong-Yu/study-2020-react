import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../contexts/user-context'

function MyinfoPage() {
  const { user, setUser } = useUserContext()
  const history = useHistory()

  if (!user) {
    return null
  }

  const { id, name } = user

  const handleLogout = () => {
    setUser(null)
    history.replace('/')
  }

  return (
    <div>
      My-Info Page
      <div>아이디 : {id}@naver.com</div>
      <div>이름 : {name}</div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  )
}

export default MyinfoPage
