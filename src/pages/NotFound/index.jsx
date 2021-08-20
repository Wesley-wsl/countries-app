import Header from '../../components/Header';
import { ErrorStyle } from './styles';

export function NotFound() {
    return (
        <>
            <Header />
            <ErrorStyle>
                <h2>Not Found</h2>
            </ErrorStyle>
        </>
    );
}
