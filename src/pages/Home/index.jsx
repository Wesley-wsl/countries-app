import Header from '../../components/Header';
import { SearchCountry, Countries } from './styles.js';
import CountryList from '../../components/CountryList';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <SearchCountry>
                    <div className="search">
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                        <input
                            type="text"
                            placeholder="Search for a country..."
                        />
                    </div>

                    <select name="regions" id="regions">
                        <option value="all" style={{ display: 'none' }}>
                            Filter By Regions
                        </option>
                        <option value="africa">África</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </SearchCountry>

                <Countries>
                    <CountryList />
                </Countries>
            </main>
        </>
    );
}
