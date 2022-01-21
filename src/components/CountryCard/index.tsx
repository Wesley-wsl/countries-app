import { Link } from 'react-router-dom';

import { ICountriesData } from '../../@types';
import { CardStyle } from './styles';

export default function CountryCard({ data }: ICountriesData) {
    return (
        <CardStyle>
            <Link to={`details/${data.alpha3Code}`}>
                <img src={data.flag} alt={`Flag ${data.name}`} />
                <h3>{data.name}</h3>

                <p>
                    <span>Population</span>: {data.population.toLocaleString()}
                </p>
                <p>
                    <span>Region</span>: {data.region}
                </p>
                <p>
                    <span>Capital</span>: {data.capital}
                </p>
            </Link>
        </CardStyle>
    );
}
