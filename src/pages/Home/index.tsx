import { FormEvent, useEffect, useState } from 'react';

import { ICountries } from '../../@types';
import CountryCard from '../../components/CountryCard';
import Header from '../../components/Header';
import api from '../../services/api';
import { SearchCountry, Countries } from './styles';

export default function Home() {
    const [country, setCountry] = useState<ICountries[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectValue, setSelectValue] = useState('all');
    const [searchValue, setSearchValue] = useState('');

    function Search(e: FormEvent) {
        e.preventDefault();
        api.get(`name/${searchValue.trim()}`)
            .then(res => setCountry(res.data))
            .catch(error => console.log(error));
    }

    function FilterCountry() {
        api.get(`region/${selectValue}`)
            .then(res => setCountry(res.data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        api.get('all')
            .then(res => {
                if (selectValue !== 'all') FilterCountry();
                if (selectValue === 'all') setCountry(res.data);
                setLoading(false);
            })
            .catch(error => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectValue, searchValue]);

    return (
        <>
            <Header />
            <main>
                <SearchCountry>
                    <form className="search" onSubmit={Search}>
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                        <input
                            type="text"
                            placeholder="Search for a country..."
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                    </form>
                    <div>
                        <select
                            name="regions"
                            id="regions"
                            value={selectValue}
                            onChange={e => setSelectValue(e.target.value)}
                        >
                            <option value="all" style={{ display: 'none' }}>
                                Filter By Regions
                            </option>
                            <option value="Africa">África</option>
                            <option value="Americas">America</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                        <i className="fas fa-angle-down"></i>
                    </div>
                </SearchCountry>

                <Countries>
                    {loading == false
                        ? country.map(data => (
                              <CountryCard data={data} key={data.numericCode} />
                          ))
                        : 'Loading...'}
                </Countries>
            </main>
        </>
    );
}
