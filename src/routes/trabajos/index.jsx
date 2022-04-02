import { useEffect, useState } from "preact/hooks";
import { Link, Outlet, useParams } from "react-router-dom";
import {Wrapper, TrabajosTitle, Categories } from "./styled";


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
