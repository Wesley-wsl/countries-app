import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';
import { Back, Details } from './styles';
// import COUNTRYCODES from './countryCodes';

export default function CountryDetails() {
    const alphaCode = useParams();
    const [country, setCountry] = useState(undefined);

    useEffect(() => {
        api.get(`alpha/${alphaCode.alphaCode}`)
            .then(res => {
                setCountry(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [alphaCode]);

    return (
        <>
            <Header />
            <main>
                <Back>
                    <Link to="/">
                        <i className="fas fa-long-arrow-alt-left"></i> Back
                    </Link>
                </Back>
                {country !== undefined ? (
                    <Details>
                        <img
                            src={country.flag}
                            alt={`Flag of ${country.name}`}
                        />

                        <div id="details">
                            <h2>{country.name}</h2>
                            <div className="container">
                                <div className="left">
                                    <p>
                                        <span>Native Name:</span>{' '}
                                        {country.nativeName}
                                    </p>
                                    <p>
                                        <span>Population:</span>{' '}
                                        {country.population.toLocaleString()}
                                    </p>
                                    <p>
                                        <span>Region:</span> {country.region}
                                    </p>
                                    <p>
                                        <span>Sub Region:</span>{' '}
                                        {country.subregion}
                                    </p>
                                    <p>
                                        <span>Capital:</span> {country.capital}
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        <span>Top Level Domain:</span>{' '}
                                        {country.topLevelDomain}
                                    </p>
                                    <p>
                                        <span>Currencies:</span>{' '}
                                        {country.currencies[0].name}
                                    </p>
                                    <p>
                                        <span>Languages:</span>{' '}
                                        {country.languages.map(
                                            (language, index) => {
                                                if (
                                                    country.languages.length ===
                                                    index + 1
                                                )
                                                    return `${language.name}.`;

                                                return `${language.name}, `;
                                            },
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className="BorderCountries">
                                <p>
                                    <span>Border Countries:</span>{' '}
                                    {country.borders.map((border, index) => (
                                        <Link
                                            to={`/details/${border}`}
                                            className="border"
                                            key={index}
                                        >
                                            {border}
                                        </Link>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </Details>
                ) : (
                    'Loading...'
                )}
            </main>
        </>
    );
}
