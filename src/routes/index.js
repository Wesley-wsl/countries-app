import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import CountryDetails from '../pages/CountryDetails';

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
            </Switch>
        </>
    );
}
