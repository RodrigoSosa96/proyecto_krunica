import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    /* justify-content: center; */
    background-color: ${props => props.theme.color.primary};
    background-color: #99D3D5;
    height: 276px;
    width: 100%;
    h2 {
        font-size: ${props => props.theme.fontSize.title};
        padding-left: 5rem;
        font-size: 40px;
        font-weight: bolder;
        font-family: ${props => props.theme.font.title};
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