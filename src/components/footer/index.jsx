import styled from "styled-components";
import Navbar from "../header/menu";

const StyledFooter = styled.footer`
    display: flex;
    background-color: var(--color-primary);
    height: 90px;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    font-family: var(--font-title);

    h2 {
        font-size: 1.5rem;
        padding-left: 1.5rem;
        font-weight: 700;
    }
    @media(min-width: 768px) {
        h2 {
            font-size: 2rem;
            padding-left: 2rem;
        }
    }
    @media(min-width: 992px) {
        /* flex-direction: column; */
        
        /* justify-content: center; */
        height: 276px;
        h2 {
            padding-left: 5rem;
            font-size: 40px;
        }

    }
`

function Footer() {
    return (
        <StyledFooter>
            <h2>KRUNICA</h2>
            <Navbar/>
        </StyledFooter>
    )
}

export default Footer;