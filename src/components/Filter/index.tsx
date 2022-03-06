import React, { useState } from 'react';

import { IFilter } from '../../@types';
import * as S from './styles';

const Filter: React.FC<IFilter> = ({ setFilter, filter }) => {
    const [showFilter, setShowFilter] = useState(false);

    function handleChooseARegion(region: string) {
        setFilter(region);
        setShowFilter(!showFilter);
    }

    return (
        <S.Filter>
            <button onClick={() => setShowFilter(!showFilter)}>
                {filter == 'all' ? 'Filter By Region' : filter}
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
