import styled from 'styled-components';
import  M from 'react-masonry-css'


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

export const Masonry = styled(M)`
    display: flex;
    margin-left: -1.5rem; // gap
    /* margin-left: -1vw; // gap */
    width: 100%;
    padding-top: 70px;


    .my-masonry-grid_column {
        padding-left: 1.5rem; // gap
        /* padding-left: 1vw; // gap */
        background-clip: padding-box;

    }
    @media(min-width: 992px) {
        margin-left: -2vw; // gap
        .my-masonry-grid_column {
            padding-left: 2vw; // gap
        }
    }

    
`

export const Article = styled.article`
    position: relative;
    margin-bottom: 1.5rem; // gap

    width: 100%;
    //height: 330px;
    // height: ${(props) => props.height * 33}vw;
    //height: ${(props) => props.height * 90}vw;
    aspect-ratio: 1/${(props) => props.height};


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
        gap: min(4rem, 10vw);


        height: 100%;
        width: 100%;

        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        font-family: var(--font-menu);

        transition: all 0.3s ease-in-out;
        opacity: 0;

        h4 {

        font-size: 1.5rem;

        font-weight: 500;
        width: 70%;
        text-align: center;
        line-height: 1.625rem;
        }
        p {

            font-size: 1rem;
            font-weight: 400;
            width: 80%;
            line-height: 1.2rem;
            white-space: pre-wrap;
            padding-bottom: 1rem;
        }
    }
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: -1;
    }
    @media(min-width: 576px) {
        margin-bottom: 2rem; // gap
        div {
            gap: min(3vw);
            gap: clamp(1rem, 1vw, 4rem);

            h4 {
                /* font-size: 1.5rem; */
                font-size: clamp(.9rem, 2.5vw, 1.5rem);
                /* line-height: 1.5rem; */
                line-height: clamp(1.1rem, 2.5vw, 1.5rem);
            }
            p {
                font-size: clamp(0.7rem, 2vw, 1rem);
                line-height: clamp(.8rem, 2vw, 1.2rem);
                /* font-size: 2rem;
                line-height: 1.2rem; */

            }
        }
    }
    @media(min-width: 992px) {
        div {
            gap: clamp(.5rem, 1vw, 4rem);

            h4 {
                font-size: clamp(1rem, 1.5vw, 1.5rem);
                line-height: clamp(1.1rem, 1.5vw, 1.5rem);
            }
            p {
                font-size: clamp(0.7rem, 1vw, 1rem);
                line-height: clamp(.8rem, 1vw, 1.2rem);

            }
        }
    }

`;


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
        width: 85vw;
        height: 98vh;
        overflow-y: auto;

        ::-webkit-scrollbar {
            display: none;
        }
        scrollbar-width: none;
        scrollbar-color: transparent transparent;
        
        


        div {
            padding-top: 2rem;
            padding-bottom: 2rem;
            
            height: 100%; /* relevant part */
            overflow-y: auto; /* relevant part */
        
            

            /* width: 70%; */
            /* height: 70%; */
            background-color: white;
            /* display: flex;
            flex-direction: column;
            align-items: center; */
            /* justify-content: center; */
            & > * {
                padding: 1rem 1rem;
                ${props => props.$nogap && "padding: 0rem 1rem"}
            }
            
            img {
                width: 100%;
                user-select: none ;
                -webkit-user-drag: none;
                -khtml-user-drag: none;
                -moz-user-drag: none;
                -o-user-drag: none;
                user-drag: none;
                
                /* object-fit: cover;
                object-position: center; */
                /* background-color: #c4c4c4 ; */
            }
            video {
                width: 100%;
                height: 100%;
                user-select: none ;
                -webkit-user-drag: none;
                -khtml-user-drag: none;
                -moz-user-drag: none;
                -o-user-drag: none;
                user-drag: none;
                
            }
            iframe {
                /* width: 600px; */
                /* height: 500px; */
                width: 100%;
                height: 100%;
                user-select: none ;
                //Block image dragging
                -webkit-user-drag: none;
                -khtml-user-drag: none;
                -moz-user-drag: none;
                -o-user-drag: none;
                user-drag: none;

                /* padding: 1rem 1rem; */
            }
    
        }

    }

    @media(min-width: 768px) {
        div {
            width: 60vw;
        }

    }
    @media(min-width: 992px) {
    }    
`

