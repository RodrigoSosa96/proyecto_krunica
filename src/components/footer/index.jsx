import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    background-color: var(--color-primary);
    height: 90px;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    font-family: var(--font-title);

    padding-left: 1.5rem;
    padding-right: 1.5rem;
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
    }
    @media(min-width: 768px) {
        padding-left: 2rem;
        h2 {
            font-size: 2rem;
        }
    }
    @media(min-width: 992px) {
        /* flex-direction: column; */
        
        /* justify-content: center; */
        height: 276px;
        padding-left: 5rem;
        h2 {
            font-size: 40px;
        }

    }
`

function Footer() {
    return (
        <StyledFooter>
            <h2>KRUNICA</h2>
        </StyledFooter>
    )
}

export default Footer;