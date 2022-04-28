import styled from "styled-components"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5vw;
    gap: 1rem;
    
    background-color: #E8E8E8;

    img {
        width: 90vw;
        height: 90vw;   
        object-fit: contain;
        object-position: center;

    }
    .review-text {
        display: flex;
        flex-direction: column;
        font-family: var(--font-menu);

        gap: 1rem;
        margin-bottom: 2rem;
        h3 {
            font-weight: 500;
            font-size: 1.6rem;

        }
        p {
            font-weight: 400;
            white-space: pre-wrap;
            font-size: 1rem;
        }
    }


    @media (min-width: 768px) {
        gap: 2rem;
        width: 100vw;
        height: 25vw;
        flex-direction: row;
        
        img {
            width: 50%;
            height: 100%;
        }
        .review-text {
            width: 50%;
            margin-bottom: unset;
                
            h3 {
                font-size: 1.6rem;
                font-size: clamp(1.2rem, 2vw, 1.6rem);        
            }
            p {
                font-size: clamp(.6rem, 1vw, 1rem);
                
                line-height: clamp(1.2rem, 2vw, 2.5rem);;
                text-align: justify;
            }
        }

    }
    @media (min-width: 992px) {

    }
`


function Review() {
    const text =`¡Hola soy Clara! Creadora de Krunica. Soy diseñadora gráfica recibida en la UBA. Hace más de 15 años que me dedico al diseño. En estos años trabajé y sigo trabajando de manera freelance para diferentes empresas.
¡Hola soy Clara! Creadora de Krunica. Soy diseñadora gráfica recibida en la UBA. Hace más de 15 años que me dedico al diseño. En estos años trabajé y sigo trabajando de manera freelance para diferentes empresas.`
    return (
        <Container  >
            {/* <img src="https://ik.imagekit.io/akxdmkcb7g5u/tr:w-600/Krunica/prensarevista.png" alt="" />     !Actualizar a cloudnary */}
            <div className="review-text">
                <h3>Revista Para Ti - 2013</h3>
                <p>{text}</p>
            </div>
        </Container>
    )
}

export default Review