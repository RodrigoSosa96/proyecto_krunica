import { useEffect, useState } from 'preact/hooks';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


import getImageUrl from '../../assets/getImageUrl';
import { trabajos as dataTrabajos } from "../../data.json" 

const Grid = styled.div`
    //3 columnas
    display: grid;
    gap: 2rem;
    margin-top: 1rem;
    grid-template-columns: 1fr;
    width: 100%;
    article {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        height: 330px;
        img {
            //covers the whole article
            position: absolute;
            width: 100%;
            height: 100% ;
            object-fit: cover;
            object-position: center;
            z-index: -1;
            
        }
        :hover div {
            opacity: 1;

        }
        div {
            transition: all 0.3s ease-in-out;
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4rem;

            width: 100%;
            height: 100%;
            
            z-index: 1;
            opacity: 0 ;


            background-color:rgba(0, 0, 0, 0.6);
            color: white;
            font-family: var(--font-menu);
            h4 {
                font-size: 24px;
                font-weight: 500;
                width: 60%;
                text-align: center;
                line-height: 26px;
            }
            p {
                font-size: 18px;
                font-weight: 400;
                width: 80%;
                line-height: 23px;
		        white-space: pre-wrap;
                padding-bottom: 1rem;
            }
        }

        &.medium {
            width: 100%;
            height: 540px;
        }
        &.tall {
            width: 100%;
            height: 660%;
        }
        &.large {
            grid-column: span 2;
        }
    }


    @media (min-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`


function Trabajos(props) {
    const { category } = useParams()
    const [trabajos, setTrabajos] = useState(dataTrabajos[category])
    useEffect(() => {
        setTrabajos(dataTrabajos[category])
        console.log(trabajos)
    }, [category])

    const test = {
    
        "titulo": "Cuadernos artesanales 80 hojas anillados",
        "descripcion": "Regalos empresariales. Cuadernos  anillados a pedido. Personalizados.\n\n Cuadernos 15 x 21 cm. - 80 hojas lisas con bajo relieve en la tapa y elástico sujetador.",
        "img": [
            "trabajos/taller/cuadernos-anillados/cuadernos-anillados-krunica-tienda-2.jpg",
        ],
        "height": "410px" 
    }
    console.log(getImageUrl(test.img[0]))
    return (
        <>
            <h3>{trabajos.titulo}</h3>
            <Grid>
                {
                    // trabajos.tarjetas.map((trabajo, index) => {
                    //     return (
                    //         <article key={index} className={trabajo.size}>
                    //             <img src={getImageUrl(trabajo.image)} alt={trabajo.title} />
                    //         </article>
                    //     )   
                    // })
                    //use test to display data
                }
                <article
                    style={{
                        height: test.height
                    }}
                >
                    <img src={getImageUrl(test.img[0])} alt={test.titulo} />
                    <div>
                        <h4>{test.titulo}</h4>
                        <p>{test.descripcion}</p>
                    </div>
                </article>
                <article
                    style={{
                        height: "300px"
                    }}
                >
                    <img src={getImageUrl(test.img[0])} alt={test.titulo} />
                    <div>
                        <h4>{test.titulo}</h4>
                        <p>{test.descripcion}</p>
                    </div>
                </article>
                
                
            </Grid>
        </>
    )
}

export default Trabajos;