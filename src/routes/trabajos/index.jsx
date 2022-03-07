import styled from "styled-components";

import { Title } from "../../components/styled/Title.styled";

import { Link, Outlet } from "react-router-dom";

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
    font-weight: 400;
    font-size: 26px;
    line-height: 32px;
    user-select: none;
    :hover {
        cursor: pointer;
        font-weight: 500;
    }
    :hover::after {
        opacity: 1;
        /* transform: scalex(1); */
    }

`
function Trabajos() {




    return (
        <Wrapper>
            <Categories >
                <Link to="taller" >TRABAJOS TALLER</Link>
                <Link to="estudio" >TRABAJOS ESTUDIO</Link>
            </Categories>
            <Outlet/>
        </Wrapper>

    );

}

export default Trabajos;
