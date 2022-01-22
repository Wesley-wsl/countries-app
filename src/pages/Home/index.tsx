import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ICountries } from '../../@types';
import CountryCard from '../../components/CountryCard';
import Filter from '../../components/Filter';
import api from '../../services/api';
import * as S from './styles';

export default function Home() {
    const [country, setCountry] = useState<ICountries[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    function Search(e: FormEvent) {
        e.preventDefault();

        if (searchValue.trim() === '') return;

        api.get(`name/${searchValue}`)
            .then(res => {
                if (res.data.status == 404) return navigate('/notFound');
                setCountry(res.data);
            })
            .catch(() => navigate('/notFound'));
    }

    return (
        <main>
            <S.SearchCountry>
                <S.Search onSubmit={Search}>
                    <button type="submit" aria-label="Search country by name">
                        <i className="fas fa-search"></i>
                    </button>
                    <input
                        type="text"
                        placeholder="Search for a country..."
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                    />
                </S.Search>
                <Filter setCountry={setCountry} />
            </S.SearchCountry>

            <S.Countries>
                {country.map(data => (
                    <CountryCard data={data} key={data.numericCode} />
                ))}
            </S.Countries>
        </main>
    );
}
