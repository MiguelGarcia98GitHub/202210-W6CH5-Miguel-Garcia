import { Navigate, Routes, Route } from 'react-router-dom';
import { ComputersPage } from '../pages/computerspage/ComputersPage';
import { OffersPage } from '../pages/offerspage/OffersPage';
import { PhonesPage } from '../pages/phonespage/PhonesPage';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/offers" />}></Route>
            <Route path="/offers" element={<OffersPage />}></Route>
            <Route path="/phones" element={<PhonesPage />}></Route>
            <Route path="/computers" element={<ComputersPage />}></Route>
            <Route path="" element={<OffersPage />}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
