import React, { useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

const Loading: React.FC = () => {
    const context = useContext(ThemeContext);
    return (
        <Container>
            <ClipLoader color={context} />
        </Container>
    );
};

export default Loading;
