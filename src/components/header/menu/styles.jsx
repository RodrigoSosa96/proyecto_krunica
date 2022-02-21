import styled from "styled-components"


export const Container = styled.nav`
    display: ${props => props.toggleMenu ? "flex" : "none"};

    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow: hidden;
    flex-direction: column;
    background-color: ${props => props.toggleMenu ? "red" : ""};


    /* max-height: ${({isOpen}) =>(isOpen ? "300px" : "0px")}; */

    
    @media (min-width: 768px) {
        gap: 1rem;
        flex-direction: row;
        
        
    }
    @media(min-width: 992px) {
        gap: 2rem;
        
    }

    
`


export const MenuLinks = styled.div`
        display: flex;
        
        align-items: center;
        justify-content: space-between;
        /* width: 488px; */
        height: 27px;
        font-family: ${props => props.theme.font.mainText}, sans-serif;
        a {
            position: relative;
            display: flex;

            justify-content: center;
            align-items: center;
            font-size: ${props => props.theme.fontSize.mainText};
            color: ${props => props.theme.color.text};
            text-decoration: none;
            width: 100px;
            height: 100%;
            line-height: 19px;
            font-weight: 500;
            &.active {
                font-weight: 600;
                /* ::after{
                    opacity: 1;
                } */
            }
            :after {
                transition: ease-in-out all 0.5s;
                content: '';
                opacity: 0;
                position: absolute;
                width: 80%;
                height: 5px;
                bottom: -5px;
                background-color: ${props => props.theme.color.blue};

                /* transition: 0.25s ease;
                transform: scalex(0); */

            }
            :hover {
                font-weight: 600;
            }
            :hover::after {
                opacity: 1;
                /* transform: scalex(1); */
                
            }
            
        }
        a+a {
            border-left: 2px solid ${props => props.theme.color.lines};
        }
        @media(min-width: 992px) {
            a{
                width: 120px;
            }
        }
        @media(min-width: 768px) {
            
        }
`


export const Social = styled.div`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .5rem;
        @media (min-width: 992px) {
            gap: 1rem;

        }
`

export const SocialImg = styled.a`
        background-image: url(${props => props.src});
        background-size: cover;
        background-position: center;
        width: 27px;
        height: 27px;

        @media (min-width: 992px) {
            width: 34px;
            height: 34px;

        }
`


