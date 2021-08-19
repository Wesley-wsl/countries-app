import { Link } from 'react-router-dom';
import { HeaderStyle } from './styles.js';

export default function Header() {
    return (
        <HeaderStyle>
            <h1>
                <Link to={'/'}> Where in the world?</Link>
            </h1>
        </HeaderStyle>
    );
}
