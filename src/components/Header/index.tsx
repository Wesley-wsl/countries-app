import { Link } from 'react-router-dom';

import { IHeader } from '../../@types';
import { ChangeTheme, HeaderStyle } from './styles';

export default function Header({ themeToggler }: IHeader) {
    return (
        <HeaderStyle>
            <h1>
                <Link to={'/'}> Where in the world?</Link>
            </h1>

            <ChangeTheme onClick={() => themeToggler()}>
                <span>
                    <i className="far fa-moon"></i>
                </span>{' '}
                Dark Mode
            </ChangeTheme>
        </HeaderStyle>
    );
}
