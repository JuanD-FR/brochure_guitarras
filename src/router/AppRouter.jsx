import { Routes, Route } from "react-router-dom"
import { GuitarRoutes } from "../guitarras"
import { LoginPage } from "../auth/pages/LoginPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={ <LoginPage /> } />
            <Route path="/*" element={ <GuitarRoutes /> } />
        </Routes>
    </>
  )
}
