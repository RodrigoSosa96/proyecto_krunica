import { Link } from "preact-router"
import styled from "styled-components"
import Logo from "./Logo"


const Container = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 235px; */
    gap: .7rem;
    height: 90px;
    


    h1 {
        
        font-size: 1.7rem;
        
        font-family: ${props => props.theme.font.title};
        color: ${props => props.theme.color.text};
        line-height: 34px;
        letter-spacing: 0.075em;
    }
    svg {
        fill: ${props => props.theme.color.text};
        height: 40px;
        /* width: 46px; */
        


    }
    @media (min-width: 992px) {
        h1 {
            font-size: ${props => props.theme.fontSize.title};
        }
    }
`

const Title = () => {

    return (
        <Container href="/" >
            <Logo />
            <h1>KRUNICA</h1>
        </Container>
    )
}

export default Title