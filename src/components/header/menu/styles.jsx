import styled from "styled-components"

export const Social = styled.div`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 86px;
        height: 34px;
`

export const SocialImg = styled.a`
        background-image: url(${props => props.src});
        background-size: cover;
        background-position: center;
        width: 34px;
        height: 34px;
`
export const MenuLinks = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 488px;
        height: 27px;
        font-family: ${props => props.theme.font.mainText}, sans-serif;
        /* Children links */
        a {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${props => props.theme.fontSize.mainText};
            color: ${props => props.theme.color.text};
            text-decoration: none;
            width: 120px;
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
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 604px;
    height: auto;
`
