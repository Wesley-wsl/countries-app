import { HeaderStyle } from './styles.js';

export default function Header() {
    return (
        <HeaderStyle>
            <h1>Where in the world?</h1>

            <div>
                {' '}
                <span>
                    <i className="far fa-moon"></i>
                </span>{' '}
                Dark Mode
            </div>
        </HeaderStyle>
    );
}
