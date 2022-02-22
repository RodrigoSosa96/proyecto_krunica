import styled from "styled-components"


export const Container = styled.nav`
    display: ${props => props.toggleMenu ? "flex" : "none"};
    /* display: flex; */

    align-items: center;
    /* justify-content: space-between; */

    flex-direction: column;



    transition: all 500ms ease-in-out;
    height: calc(100vh - 90px);

    //show font from white to black when menu is open

    @media (min-width: 768px) {
        display: flex;
        gap: 1rem;
        flex-direction: row;
        overflow: hidden;

        height: unset;
        
        
    }
    @media(min-width: 992px) {
        gap: 2rem;
        
    }

    
`


export const MenuLinks = styled.div`
        display: flex;
        
        align-items: center;
        justify-content: space-between;
        font-family: ${props => props.theme.font.mainText}, sans-serif;


        flex-direction: column;
        width: 100vw;
        gap: 3rem;


        a {
            position: relative;
            display: flex;

            justify-content: center;
            align-items: center;
            transition: all 1000ms ease-in-out;
            font-size: ${props => props.theme.fontSize.mainText};
            color: ${props => props.toggleLinks ? "black" : "white"}; //! no anda


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

        @media(min-width: 768px) {
            flex-direction: row;
            width: unset;
            height: 27px;
            gap: 0;
            a {
                color: ${props => props.theme.color.text};

            }
            a+a {
                border-left: 2px solid ${props => props.theme.color.lines};
            }
            
        }
        @media(min-width: 992px) {
            a{
                width: 120px;
            }
        }
`


export const Social = styled.div`
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 4rem;
        gap: 1.5rem;

        bottom: 4rem;

        @media(min-width: 768px) {
            position: relative;
            gap: .5rem;
            margin-top: 0;
            bottom: unset;
            

        }

        @media (min-width: 992px) {
            gap: 1rem;

        }
`

export const SocialImg = styled.a`
        background-image: url(${props => props.src});
        background-size: cover;
        background-position: center;
        width: 40px;
        height: 40px;
        @media(min-width: 768px) {
            width: 27px;
            height: 27px;
        }
        @media (min-width: 992px) {
            width: 34px;
            height: 34px;

        }
`


