import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const CenterDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    align-items: center;
    justify-content: center;

    
    width: 100%;
`
//main with 1400px max-width
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        
    max-width: 1654px;
    margin: 174px auto 2rem;

    & > * + * {
        position: relative;
        /* border-top: 3px solid #C4C4C4;
        padding-top: 2rem; */
        margin-top: 4rem;
        ::after {
            content: "";
            position: absolute;
            width: 90%;
            top: -3px;
            left: calc(50% - 45%);
            height: 3px;
            background-color: #C4C4C4;
            overflow: hidden;
            margin-top: -2rem;
            
            z-index: 2;

        }
    }

    @media (max-width: 992px) {
        margin: 110px auto;
    }
`