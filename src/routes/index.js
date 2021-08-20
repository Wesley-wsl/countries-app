import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import CountryDetails from '../pages/CountryDetails';
import { NotFound } from '../pages/NotFound';

export function Routes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route
                    path="/details/:alphaCode"
                    exact
                    component={CountryDetails}
                />
                <Route pat="*" component={NotFound} />
            </Switch>
        </>
    );
}
