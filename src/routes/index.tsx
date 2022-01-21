import { Route, Routes } from 'react-router-dom';

import CountryDetails from '../pages/CountryDetails';
import Home from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:alphaCode" element={<CountryDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
