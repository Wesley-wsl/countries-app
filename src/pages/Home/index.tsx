import { useState } from 'react';

import { ICountries } from '../../@types';
import CountryCard from '../../components/CountryCard';
import Filter from '../../components/Filter';
import Loading from '../../components/Loading';
import { useFetch } from '../../hooks/useFetch';
import * as S from './styles';

export default function Home() {
    const [searchValue, setSearchValue] = useState('');
    const [filter, setFilter] = useState('all');

    const { data } = useFetch('all');

    if (!data) return <Loading />;

    return (
        <main>
            <S.SearchCountry>
                <S.Search>
                    <button type="button" aria-label="Search country by name">
                        <i className="fas fa-search"></i>
                    </button>
                    <input
                        type="text"
                        placeholder="Search for a country..."
                        value={searchValue}
                        onChange={({ target }) => setSearchValue(target.value)}
                    />
                </S.Search>
                <Filter setFilter={setFilter} filter={filter} />
            </S.SearchCountry>

            <S.Countries>
                {data
                    .filter((data: ICountries) => {
                        if (searchValue === '') return data;
                        if (
                            data.name
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                            return data;
                    })
                    .filter((data: ICountries) => {
                        if (filter === 'all') return data;
                        if (
                            data.region
                                .toLowerCase()
                                .includes(filter.toLowerCase())
                        )
                            return data;
                    })
                    .map((data: ICountries) => (
                        <CountryCard data={data} key={data.numericCode} />
                    ))}
            </S.Countries>
        </main>
    );
}
