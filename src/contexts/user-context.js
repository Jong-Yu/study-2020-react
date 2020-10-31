import React, { useState, createContext, useContext, useEffect } from 'react'

const Context = createContext()

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null,
  )

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  )
}

export function useUserContext() {
  return useContext(Context)
}
