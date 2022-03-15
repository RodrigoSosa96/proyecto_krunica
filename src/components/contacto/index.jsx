import styled from "styled-components";
import { Title } from "../styled/Title.styled";
import { Container as C } from "../styled/Wrapper.styled";

const Container = styled(C)`
    gap: 1rem;
    @media (min-width: 992px) {
        gap: min(6vw, 130px);
        flex-direction: row;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    /* h2{
        align-self: center;
        font-size: var(--font-size-title);
        font-size: 2.25rem;
        font-size: clamp(1.7rem, 5vw, 2.25rem);
    } */
    p {
        width: 100%;
        line-height: clamp(1.2rem, 2vw, 2.25rem);
        font-size: 1.25rem;
        font-size: clamp(1rem, 2vw, 1.25rem);

        text-align: justify;

    }
    @media (min-width: 768px) {
        p {
            margin-top: .5rem;
        margin-bottom : .5rem;
        }

    }
    @media (min-width: 992px) {
        margin-bottom: 6rem;
        h2 {
            margin-bottom: 2.5rem;
        }
        p {
            margin-top: 1rem;
            
        }
    }

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 90%;

    height: 100%;  
    
    padding: 1rem 0;
    gap: 2.5rem;
    gap: min(2vw, 2.5rem);

    /* margin: 1rem; */

    input {
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: 1px solid black;
        /* padding: 0.5rem; */
        /* margin: 0.5rem; */
        font-size: 1rem;
        text-indent: 1rem;

        line-height: 26px;
        font-family: var(--font-helvetica);
        ::placeholder {
            color: #898A8D;
        }

        &:focus {
            outline: none;
        }
     }
    textarea {
        width: 100%;
        height: 8rem;
        border-radius: 0.5rem;
        border: 1px solid black;
        padding: 0.5rem;
        /* margin: 0.5rem; */
        font-size: 1rem;
        resize: none;


        font-family: Helvetica, sans-serif;

        &:focus {
            outline: none;
        }
    }
    input[type="submit"] {
        width: 50%;
        height: 51px;
        font-size: 1.2rem;
        text-indent: unset;
        background: #C4C4C4;
        border: none;
        &:hover {
            cursor: pointer;

        }

    }
    @media( min-width: 576px) {
        input {
            font-size: 1.4rem;

        }
        input[type="submit"] {
            /* align-self: baseline; */
            width: 132px;
            font-size: 1.4rem;

        }
        textarea {
            font-size: 1.4rem;

        }

    }
    @media (min-width: 768px) {
        width: 75%;

    }
    @media (min-width: 992px) {
        width: 591px;
        width: min(40%, 591px);
        input {
            height: 60px;
            text-indent: 2rem;
        }
        input[type="submit"] {
            align-self: baseline;

        }
        textarea {
            height: 10rem;
            text-indent: 1rem ;
            line-height: 46px;
            font-size: 1.4rem;

        }
    }
`


function Contacto() {
    return (
        <>
            <Container id="contacto">
                <Info>
                    <Title>ESCRIBÍNOS</Title>
                    <p><i>Si tenés alguna consulta no dudes en contactarnos!</i></p>
                    <p><b>Teléfono : </b>(011) 6127-1692</p>
                    <p style={{
                        wordBreak: "break-all"

                    }}><b>Mail: </b>clara@krunica.com.ar / info@krunica.com.ar </p>

                </Info>
                <Form action="" method="post">
                    <input type="text" name="nombre" placeholder="Nombre" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="tel" placeholder="Tel" />
                    <textarea name="mensaje" placeholder="Contame de tu proyecto" />
                    <input type="submit" value="ENVIAR" />
                </Form>
            </Container>
        </>
    )
}
export default Contacto;