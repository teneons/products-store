import { sign } from 'jsonwebtoken'
import {createContext} from 'react'

export const authContext = createContext({
  isAuth: false,
  token: null,
  id: null,
  singIn: sign,
  signOut: sign
})