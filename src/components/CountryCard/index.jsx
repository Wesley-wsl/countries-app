/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { CardStyle } from './styles';

export default function CountryCard(props) {
    return (
        <CardStyle>
            <Link to={`details/${props.data.alpha3Code}`}>
                <img src={props.data.flag} alt={`Flag ${props.data.name}`} />
                <h3>{props.data.name}</h3>
            </Link>
            <p>
                <span>Population</span>:{' '}
                {props.data.population.toLocaleString()}
            </p>
            <p>
                <span>Region</span>: {props.data.region}
            </p>
            <p>
                <span>Capital</span>: {props.data.capital}
            </p>
        </CardStyle>
    );
}
