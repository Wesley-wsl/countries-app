import React, { useState } from 'react';

import { IFilter } from '../../@types';
import { useFilter } from '../../hooks/useFilter';
import Loading from '../Loading';
import * as S from './styles';

const Filter: React.FC<IFilter> = ({ setCountry }) => {
    const [region, setRegion] = useState('all');
    const [showFilter, setShowFilter] = useState(false);
    const { loading } = useFilter(setCountry, region);

    if (loading) return <Loading />;

    function handleChooseARegion(region: string) {
        setRegion(region);
        setShowFilter(!showFilter);
    }

    return (
        <S.Filter>
            <button onClick={() => setShowFilter(!showFilter)}>
                {region == 'all' ? 'Filter By Region' : region}
                <i className="fas fa-angle-down"></i>
            </button>
            <ul style={showFilter ? { display: 'block' } : { display: 'none' }}>
                <li onClick={() => handleChooseARegion('all')}>All</li>
                <li onClick={() => handleChooseARegion('Africa')}>África</li>
                <li onClick={() => handleChooseARegion('Americas')}>America</li>
                <li onClick={() => handleChooseARegion('Asia')}>Asia</li>
                <li onClick={() => handleChooseARegion('Europe')}>Europe</li>
                <li onClick={() => handleChooseARegion('Oceania')}>Oceania</li>
            </ul>
        </S.Filter>
    );
};

export default Filter;
