import styled from "styled-components";

import { Title } from "../../components/styled/Title.styled";

import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "preact/hooks";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const Categories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem ;
    width: 90% ;
    a {
        text-decoration: none;
        color: var(--color-text);
    }
    @media (min-width: 768px) {
        gap: 2rem;
        width: 100% ;
    }
    @media(min-width: 992px) {
        gap: 5rem;

    }
`
const TrabajosTitle = styled(Title)`
    font-weight: 400;
    font-size: clamp(1rem, 2vw, 2.25rem);
    user-select: none;
    :hover {
        cursor: pointer;
        font-weight: 500;
    }
    :hover::after {
        opacity: 1;
        /* transform: scalex(1); */
    }
    ${props => props.active && `
        font-weight: 500;
        ::after {
            opacity: 1;
        }
    `}

    @media(min-width: 768px) {
        font-size: 24px;
    }

    @media(min-width: 992px) {
        font-size: 26px;
        line-height: 32px;
    }
`
function Trabajos() {
    const { category } = useParams()
    const [categorie, setCategorie] = useState("taller")

    useEffect(() => {
        console.log(category)
        setCategorie(category)
    }, [category])

    return (
			<Wrapper>
				<Categories>
					<Link to='taller'>
						<TrabajosTitle active={categorie === "taller" ? true : false}>
							TRABAJOS TALLER
						</TrabajosTitle>
					</Link>
					<Link to='estudio'>
						<TrabajosTitle active={categorie === "estudio" ? true : false}>
							TRABAJOS ESTUDIO
						</TrabajosTitle>
					</Link>
				</Categories>
				<Outlet />
			</Wrapper>
		);

}

export default Trabajos;
