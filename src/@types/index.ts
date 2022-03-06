import { Dispatch, SetStateAction } from 'react';
export interface ICountries {
    name: string;
    alpha3Code: string;
    population: number;
    region: string;
    capital: string;
    flag: string;
    numericCode: string;
    nativeName: string;
    subregion: string;
    topLevelDomain: string[];
    currencies: ICurrencies[];
    languages: ILanguages[];
    borders: string[];
}
export interface ICountriesData {
    data: ICountries;
}
export interface ICurrencies {
    code: string;
    name: string;
}
export interface ILanguages {
    name: string;
    nativeName: string;
}
export interface ITheme {
    theme: IThemeProps;
}
export interface IThemeProps {
    body: string;
    elements: string;
    color: string;
    boxShadow: string;
}
export interface IHeader {
    themeToggler: () => void;
}
export interface IFilter {
    setFilter: Dispatch<SetStateAction<string>>;
    filter: string;
}
