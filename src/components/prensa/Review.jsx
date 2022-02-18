import styled from "styled-components"
import Star from "./Star"

import getImageUrl from "../../assets/getImageUrl"

const Tarjeta = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 414px;
    background-color: #E8E8E8;

`
const CardReview = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    height: 80%;
    padding: 0 35px 0 35px;
    background-color: #ffffff;
    border-radius: 1rem;
    gap: 2rem;

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
    gap: 4rem;
    padding: 0 2rem 0 2rem;
    .review-title {
        font-family: bitter;
        font-weight: bold;
        font-style: italic;
        line-height: 45px;
        h4 {
            font-size: 1rem;
        }
        p {
            font-size: 35px;
        }
    }
    .review-rate {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 3rem;
        font-family: ${props => props.theme.font.menu};
         h3 {
            font-weight: 100;
        }
        p {
            color: #718797;
            line-height: 28px;
            font-size: 1.125rem;
        }

        .rate {
            display: flex;
            gap: 0.4rem;
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