import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { ICountries } from '../@types';
import api from '../services/api';

async function getAllCountries(
    setCountry: Dispatch<SetStateAction<ICountries[]>>,
) {
    return await api
        .get('all')
        .then(res => {
            setCountry(res.data);
        })
        .catch(error => console.log(error));
}

async function getCountryByRegion(
    setCountry: Dispatch<SetStateAction<ICountries[]>>,
    region: string,
) {
    return await api
        .get(`region/${region}`)
        .then(res => setCountry(res.data))
        .catch(error => console.log(error));
}

export function useFilter(
    setCountry: Dispatch<SetStateAction<ICountries[]>>,
    region: string,
) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (region === 'all')
            getAllCountries(setCountry).then(() => setLoading(false));
        if (region !== 'all')
            getCountryByRegion(setCountry, region).then(() =>
                setLoading(false),
            );
    }, [region, setCountry]);

    return { loading };
}
