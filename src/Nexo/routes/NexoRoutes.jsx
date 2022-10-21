import { Navigate, Route, Routes } from 'react-router-dom';
import {  Navbar } from '../../ui';
import { CanteraPage, LotizacionPage, ApoyoPage } from '../pages';
import { PendientesPage } from '../pages/PendientesPage';

export const NexoRoutes = () => {
  return (
    <>
        <Navbar />

        <div> 

          <Routes>
              <Route path="lotizacion" element={ <LotizacionPage /> }/>
              <Route path="cantera" element={ <CanteraPage /> }/>
              <Route path="pendientes" element={ <PendientesPage/> }/>
              <Route path="apoyo" element={ <ApoyoPage /> }/>
              {/* Search hero by id */ }
              <Route path="/" element={<Navigate to="/lotizacion" />} />

          </Routes>

        </div>



    </>
  )
}
