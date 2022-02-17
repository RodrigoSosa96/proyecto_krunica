import styled from "styled-components";
import { Title } from "../../components/styled/Title.styled";
import GridLayout from "./GridLayout.styled";
import { trabajos } from "../../data.json"
import Separator from "../../components/styled/Separator.styled";
import { useState } from "preact/hooks";

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
    const [category, setCategory] = useState("estudio");//taller
    // const [categoria, setCategoria] = useState({
    //     //toggle estudio y trabajo
    //     estudio: true,
    //     trabajo: false
    // });

    // const handleClick = (e) => {
    //     const { mssg } = e.target.dataset;
    //     console.log(mssg);
    //     setCategoria({
    //         ...categoria,
    //         [mssg]: !categoria[mssg]
    //     })
    //     console.log(categoria)
    // }
    const handleClick = (e) => {
        const { mssg } = e.target.dataset;
        setCategory(mssg);
        console.log(category)
    }



    return (
        <Wrapper>
            <Categories >

                <TrabajosTitle onClick={handleClick} data-mssg="taller" >TRABAJOS TALLER</TrabajosTitle>
                <TrabajosTitle onClick={handleClick} data-mssg="estudio" >TRABAJOS ESTUDIO</TrabajosTitle>
            </Categories>
            <Separator />
            {/* <GridLayout data={
                category === "taller" ?
                    trabajos.taller
                    :
                    trabajos.estudio
            } /> */}
            <GridLayout data={trabajos.estudio} />
        </Wrapper>

    );

}

export default Trabajos;
