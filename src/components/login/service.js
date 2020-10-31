export const fecthLogin = async ({ id, password }) => {
  const response = await fetch('http://localhost:8888/users')

  if (response.ok) {
    const users = await response.json()

    const user = users.find((user) => user.id === id)

    if (!user) {
      throw new Error('가입된 정보 유저가 없습니다')
    }
    if (user.password !== password) {
      throw new Error('비밀번호가 다릅니다')
    }

    return user
  }

  throw new Error('일시적인 데이터 오류.... ')
}
