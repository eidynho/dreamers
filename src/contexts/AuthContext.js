import { createContext, useState, useEffect } from 'react'

import { auth } from '../services/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export const AuthContext = createContext({})

export function AuthContextProvider({ children }) {

  const [ user, setUser ] = useState()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [user])

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    const result = await signInWithPopup(auth, provider)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user
  
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}