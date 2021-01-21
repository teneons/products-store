import {useState, useCallback, useEffect} from 'react'

 export const useAuth = () => {

  const [token, setToken] = useState(null)
  const [id, setId] = useState(null)

  const signIn = useCallback((userToken, userId) => {
    setToken(userToken)
    setId(userId)

    localStorage.setItem('sesіonData', JSON.stringify({token: userToken, id: userId}))
  }, [])
  
  const signOut = useCallback(() => {
    setToken(null)
    setId(null)
    localStorage.removeItem('sesіonData')
  }, [])

  //check LS during load app
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('sesіonData'))

    if(data && data.token) {
      signIn(data.token, data.id)
    }
  }, [signIn])


  return {signIn, signOut, token, id}

}