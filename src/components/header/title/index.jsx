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
        
        font-size: clamp(1.7rem, 2.5vw, var(--font-size-title));
        
        font-family: var(--font-title);
        color: var(--color-text);
        line-height: 34px;
        letter-spacing: 0.075em;
    }
    svg {
        fill: black;
        /* height: 40px; */
        height: 50%;
        /* width: 46px; */
        


    }
    @media (min-width: 768px) {
        height: 90px;

        svg {
            height: clamp(2.4rem, 3vw, calc(var(--font-size-title) * 1.5));
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