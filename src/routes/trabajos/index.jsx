import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import {Wrapper, TrabajosTitle, Categories } from "./styled";
import Contacto from "../../components/contacto";

function Trabajos() {
    const { category } = useParams()
    const [categoria, setCategoria] = useState("taller")

    useEffect(() => {
        setCategoria(category)
    }, [category])

    return (
			<Wrapper>
				<Categories>
					<Link to='taller'>
						<TrabajosTitle active={categoria === "taller" ? true : false}>
							TRABAJOS TALLER
						</TrabajosTitle>
					</Link>
					<Link to='estudio'>
						<TrabajosTitle active={categoria === "estudio" ? true : false}>
							TRABAJOS ESTUDIO
						</TrabajosTitle>
					</Link>
				</Categories>
				<Outlet />
				<Contacto/>
			</Wrapper>
		);

}

export default Trabajos;
