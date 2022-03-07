import { HashLink } from "react-router-hash-link";
import styled from "styled-components"

import Logo from "./Logo"

const Container = styled(HashLink)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 235px; */
    gap: .7rem;
    height: 60px;
    


    h1 {
        
        font-size: 1.7rem;
        
        font-family: var(--font-title);
        color: var(--color-text);
        line-height: 34px;
        letter-spacing: 0.075em;
    }
    svg {
        fill: black;
        height: 40px;
        /* width: 46px; */
        


    }
    @media (min-width: 768px) {
        height: 90px;
        

    }
    @media (min-width: 992px) {
        h1 {
            font-size: var(--font-size-title);
        }
    }
`

const Title = () => {

    return (
        <Container to="/#">
            <Logo />
            <h1>KRUNICA</h1>
        </Container>
    )
}

export default Title