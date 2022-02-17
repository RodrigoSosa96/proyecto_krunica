import styled from "styled-components"

// const Container = styled.div`
//     position: relative;
// 	display: flex;
// 	flex-direction: row;
// 	align-items: center;
// 	justify-content: center;
// 	gap : 2rem;
// `

export const CenterDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    align-items: center;
    justify-content: center;
`
//main with 1400px max-width
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1654px;
    margin: 174px auto;
    @media (max-width: 992px) {
        margin: 110px auto;
    }
`