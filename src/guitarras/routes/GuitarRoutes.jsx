import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { FenderPage, GuitarPage, IbanezPage, SchecterPage, CharvelPage, SearchPage } from "../pages"



export const GuitarRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="fender" element={ <FenderPage /> } />
                <Route path="ibanez" element={ <IbanezPage /> } />
                <Route path="schecter" element={ <SchecterPage /> } />
                <Route path="charvel" element={ <CharvelPage /> } />
                <Route path="guitars/:id" element={ <GuitarPage /> } />
                
                <Route path="search" element={ <SearchPage /> } />
                <Route path="/" element={ <Navigate to="/" /> } />
            </Routes>
        </div>

    </>
  )
}