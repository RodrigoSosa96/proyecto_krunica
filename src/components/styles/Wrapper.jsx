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
