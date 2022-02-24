import styled from "styled-components"
import Star from "./Star"

import getImageUrl from "../../assets/getImageUrl"

const Tarjeta = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25vw;
    background-color: #E8E8E8;

`
const CardReview = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;

    width: 95%;
    height: 90%;
    padding: 0 1.5rem 0 1.5rem;
    background-color: #ffffff;
    border-radius: 1rem;
    @media (min-width: 768px) {
        
    }
    @media (min-width: 992px) {
        padding: 0 2rem 0 2rem;
        gap: 2rem;
        height: 80%;
        width: 90%;

    }
`

const Imagen = styled.div`
    width: 50%;
    height: 90%;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 1rem;
	background-position: 0 39%;

`
const Texto = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    width: 50%;
    gap: 1rem;
    padding: 0 0rem 0 1rem;
    color: rgba(49, 50, 55, 1);
    .review-title {
        font-family: Bitter;
        font-weight: 400;
        font-style: italic;
        line-height: 45px;
        h4 {
            font-weight: 400;
            font-size: 0.5rem;
            font-size: clamp(0.5rem, 2.4vw, 1rem);

        }
        p {
            font-weight: 400;
            font-size: 0.5rem;
            font-size: clamp(0.9rem, -0.27rem + 4.25vw, 2.2rem);
            
        }
    }
    .review-rate {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 3rem;
        font-family: ${props => props.theme.font.menu};
         h3 {
            font-weight: 400;
            font-size: clamp(0.5rem, 2.4vw, 1rem);

        }
        p {
            color: rgba(113, 135, 151, 1);
            
            line-height: 28px;
            font-size: 1.125rem;
            
            font-size: 0.5rem;
            font-size: clamp(0.5rem, -0.25rem + 8vw, 1.25rem);
        }

        .rate {
            display: flex;
            gap: 0.4rem;
            svg {
                width: 1.438rem;
                height: 1.313rem;
            }
        }

    }
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {
        gap: 4rem;
        padding: 0 2rem 0 2rem;
        .review-rate {
            .rate {
                svg {
                    width: 1.625rem;
                    height: 1.5rem;
                }
            }
        }

    }
`

function Review() {

    return (
        <Tarjeta  >
            <CardReview className="card-review">
                <Imagen className="img-review" src={getImageUrl("home/prensa/revista.jpg")} />
                <Texto >
                    <div className="review-title">
                        <h4 >Almacén de ideas</h4>
                        <p>
                            “Un tesoro de papel”
                        </p>
                    </div>
                    <div className="review-rate">
                        <div className="author">
                            <h3>Revista Para Ti</h3>
                            <p>2013</p>
                        </div>
                        <div className="rate">
                            <Star check />
                            <Star check />
                            <Star check />
                            <Star check />
                            <Star />
                        </div>
                    </div>

                </Texto>
            </CardReview>
        </Tarjeta>
    )
}

export default Review