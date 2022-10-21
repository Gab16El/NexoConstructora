import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { NexoRoutes } from "../Nexo/routes/NexoRoutes"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={ <LoginPage /> }/>

            <Route path="/*" element={ <NexoRoutes /> } />
        </Routes>
    </>
  )
}
