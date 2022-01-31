import styled from 'styled-components';

import Navbar from './menu';
import {Container, StyledHeader} from './styled';
import Title from './title';

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Title/>
                <Navbar />
            </Container>
        </StyledHeader>
    );
};

export default Header;
