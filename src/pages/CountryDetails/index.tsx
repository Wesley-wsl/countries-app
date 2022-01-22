import { Link, useParams } from 'react-router-dom';

import Loading from '../../components/Loading';
import { useCountry } from '../../hooks/useCountry';
import countryCodes from '../../utils/countryCodes';
import * as S from './styles';

export default function CountryDetails() {
    const { alphaCode } = useParams();
    const { loading, country } = useCountry(alphaCode || '');

    if (loading) return <Loading />;

    return (
        <main>
            <S.Back onClick={() => history.back()}>
                <i className="fas fa-long-arrow-alt-left"></i> Back
            </S.Back>

            <S.Details>
                <img src={country.flag} alt={`Flag of ${country.name}`} />

                <div id="details">
                    <h2>{country.name}</h2>
                    <S.Informations>
                        <div className="left">
                            <p>
                                <span>Native Name:</span> {country.nativeName}
                            </p>
                            <p>
                                <span>Population:</span>{' '}
                                {country.population.toLocaleString()}
                            </p>
                            <p>
                                <span>Region:</span> {country.region}
                            </p>
                            <p>
                                <span>Sub Region:</span> {country.subregion}
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
                                {country.languages.map((language, index) => {
                                    if (country.languages.length === index + 1)
                                        return `${language.name}.`;

                                    return `${language.name}, `;
                                })}
                            </p>
                        </div>
                    </S.Informations>
                    <S.BorderCountries>
                        <p>
                            <span>Border Countries:</span>{' '}
                            {country.borders
                                ? country.borders.map((border, index) => (
                                      <Link
                                          to={`/details/${border}`}
                                          className="border"
                                          key={index}
                                      >
                                          {countryCodes[border]}
                                      </Link>
                                  ))
                                : 'none'}
                        </p>
                    </S.BorderCountries>
                </div>
            </S.Details>
        </main>
    );
}
