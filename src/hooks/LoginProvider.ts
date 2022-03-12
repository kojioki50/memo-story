import { useContext } from "react"
import { login, LoginInfoContext } from "../components/provider/loginInfoProvider"

export const loginInfoProvider = ():login  => useContext(LoginInfoContext)