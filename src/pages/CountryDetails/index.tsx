import { Link, useParams } from 'react-router-dom';

import Loading from '../../components/Loading';
import { useFetch } from '../../hooks/useFetch';
import countryCodes from '../../utils/countryCodes';
import * as S from './styles';

export default function CountryDetails() {
    const { alphaCode } = useParams();
    const { data } = useFetch(`alpha/${alphaCode}`);

    if (!data) return <Loading />;

    return (
        <main>
            <S.Back onClick={() => history.back()}>
                <i className="fas fa-long-arrow-alt-left"></i> Back
            </S.Back>

            <S.Details>
                <img src={data.flag} alt={`Flag of ${data.name}`} />

                <div id="details">
                    <h2>{data.name}</h2>
                    <S.Informations>
                        <div className="left">
                            <p>
                                <span>Native Name:</span> {data.nativeName}
                            </p>
                            <p>
                                <span>Population:</span>{' '}
                                {data.population.toLocaleString()}
                            </p>
                            <p>
                                <span>Region:</span> {data.region}
                            </p>
                            <p>
                                <span>Sub Region:</span> {data.subregion}
                            </p>
                            <p>
                                <span>Capital:</span> {data.capital}
                            </p>
                        </div>

                        <div>
                            <p>
                                <span>Top Level Domain:</span>{' '}
                                {data.topLevelDomain}
                            </p>
                            <p>
                                <span>Currencies:</span>{' '}
                                {data.currencies[0].name}
                            </p>
                            <p>
                                <span>Languages:</span>{' '}
                                {data.languages.map(
                                    (
                                        language: { name: string },
                                        index: number,
                                    ) => {
                                        if (data.languages.length === index + 1)
                                            return `${language.name}.`;

                                        return `${language.name}, `;
                                    },
                                )}
                            </p>
                        </div>
                    </S.Informations>
                    <S.BorderCountries>
                        <p>
                            <span>Border Countries:</span>{' '}
                            {data.borders
                                ? data.borders.map(
                                      (border: string, index: number) => (
                                          <Link
                                              to={`/details/${border}`}
                                              className="border"
                                              key={index}
                                          >
                                              {countryCodes[border]}
                                          </Link>
                                      ),
                                  )
                                : 'none'}
                        </p>
                    </S.BorderCountries>
                </div>
            </S.Details>
        </main>
    );
}
