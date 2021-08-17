import { CardStyle } from './styles';

export default function CountryCard() {
    return (
        <CardStyle>
            <img src="https://restcountries.eu/data/afg.svg" alt="Flag" />
            <h3>Example</h3>
            <p>
                <span>Population</span>: 81,770,900
            </p>
            <p>
                <span>Region</span>: Europe
            </p>
            <p>
                <span>Capital</span>: Berlin
            </p>
        </CardStyle>
    );
}
