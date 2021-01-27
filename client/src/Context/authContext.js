import {createContext} from 'react'

function sign() {}

export const authContext = createContext({
  token: null,
  id: null,
  isAuth: false,
  logIn: sign,
  logOut: sign
})