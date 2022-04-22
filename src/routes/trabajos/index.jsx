import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import {Wrapper, TrabajosTitle, Categories } from "./styled";


function Trabajos() {
    const { category } = useParams()
    const [categoria, setCategoria] = useState("taller")

    useEffect(() => {
        console.log(category)
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
			</Wrapper>
		);

}

export default Trabajos;
