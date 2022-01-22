import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { ICountries } from '../@types';
import api from '../services/api';

async function getCountryByAlphaCode(
    setCountry: Dispatch<SetStateAction<ICountries>>,
    alphaCode?: string,
) {
    return await api
        .get(`alpha/${alphaCode}`)
        .then(res => setCountry(res.data))
        .catch(error => {
            console.log(error);
            window.location.href = './';
        });
}

export function useCountry(alphaCode?: string) {
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState<ICountries>(Object);

    useEffect(() => {
        getCountryByAlphaCode(setCountry, alphaCode).then(() =>
            setLoading(false),
        );
    }, [alphaCode]);

    return { loading, country };
}
