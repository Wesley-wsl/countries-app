import { Route, Routes as Router } from 'react-router-dom';

import CountryDetails from '../pages/CountryDetails';
import Home from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export function Routes() {
    return (
        <>
            <Router>
                <Route path="/" element={Home} />
                <Route path="/details/:alphaCode" element={CountryDetails} />
                <Route path="*" element={NotFound} />
            </Router>
        </>
    );
}
