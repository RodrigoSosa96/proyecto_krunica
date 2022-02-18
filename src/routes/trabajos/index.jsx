import { useState } from "preact/hooks";
import styled from "styled-components";
import { trabajos } from "../../data.json"
import { Title } from "../../components/styled/Title.styled";
import GridLayout from "../../components/trabajos/GridLayout.styled";
import FlexGrid from "../../components/trabajos/FlexGrid";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const Categories = styled.div`
    display: flex;
    gap: 5rem;
`
const TrabajosTitle = styled(Title)`
    font-family: ${props => props.theme.font.title};
    font-weight: 400;
    font-size: 26px;
    line-height: 32px;
    :hover {
        cursor: pointer;
    }

`
function Trabajos() {
    const [category, setCategory] = useState("taller");//taller
    const handleClick = (e) => {
        const { mssg } = e.target.dataset;
        setCategory(mssg);
    }



    return (
        <Wrapper>
            <Categories >

                <TrabajosTitle onClick={handleClick} data-mssg="taller" >TRABAJOS TALLER</TrabajosTitle>
                <TrabajosTitle onClick={handleClick} data-mssg="estudio" >TRABAJOS ESTUDIO</TrabajosTitle>
            </Categories>
            <FlexGrid/>
            {/* <GridLayout data={
                category === "taller" ?
                    trabajos.taller
                    :
                    trabajos.estudio
            } /> */}
        </Wrapper>

    );

}

export default Trabajos;
