import styled from 'styled-components';
import  M from 'react-masonry-css'


export const Masonry = styled(M)`
    display: flex;
    margin-left: -2rem; // gap
    width: 100%;
    padding-top: 70px;


    .my-masonry-grid_column {
        padding-left: 2rem; // gap
        background-clip: padding-box;
        article {
            position: relative;
            margin-bottom: 2rem; // gap
            
            width: 100%;
            height: 330px;

            background-color: var(--color-primary);

            cursor: pointer;
            user-select: none;


            :hover div {
                opacity: 1;
            }
            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 4rem;
                
                height: 100%;
                width: 100%;
                
                
                background-color:rgba(0, 0, 0, 0.6);
                color: white;
                font-family: var(--font-menu);
                
                transition: all 0.3s ease-in-out;
                opacity:0;
                
                h4 {
                    font-size: 24px;
                    font-weight: 500;
                    width: 60%;
                    text-align: center;
                    line-height: 26px;
                }
                p {
                    font-size: 18px;
                    font-weight: 400;
                    width: 80%;
                    line-height: 23px;
                    white-space: pre-wrap;
                    padding-bottom: 1rem;
                }
            }
            img {
                position: absolute;
                width: 100%;
                height: 100% ;
                object-fit: cover;
                object-position: center;
                z-index: -1;
            }
            
        }
    }
    
`

export const PhotoModal = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column ;
    justify-content: center;
    align-items: center;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    div {
        width: 60vw;
        height: 100%; /* relevant part */
        overflow-y: auto; /* relevant part */

        ::-webkit-scrollbar {
            display: none;
        }
        scrollbar-width: none;
        scrollbar-color: transparent transparent;
        
        


        div {
            margin-top: 2rem;
            margin-bottom: 2rem;
            
            height: 100%; /* relevant part */
            overflow-y: auto; /* relevant part */
        


            /* width: 70%; */
            /* height: 70%; */
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            /* justify-content: center; */
    
            
            img {
                width: 100%;
                user-select: none ;
                /* object-fit: cover;
                object-position: center; */
                /* background-color: #c4c4c4 ; */
                padding: 1rem 1rem;
            }
    
        }

    }
    
`

export const SectionTitle = styled.h4`
    font-family: var(--font-title);
    font-size: 20px;
    font-weight: 300;
    line-height: 24.3px;
    text-align: center;
    color: var(--color-text);

    border-top: 2px solid #C4C4C4;
    padding-top: 2.5rem;
`