import styled from "styled-components";
import { Title } from "../styled/Title.styled";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    gap: 2.5rem;
    margin: 1rem;

    input {
        width: 100%;
        height: 60px;
        border-radius: 10px;
        border: 1px solid black;
        padding: 0.5rem;
        /* margin: 0.5rem; */
        font-size: 1.4rem;
        text-indent: 2rem;
        line-height: 26px;
        font-family: Helvetica, sans-serif;
        ::placeholder {
            color: #898A8D;
        }

        &:focus {
            outline: none;
        }
    }
    textarea {
        width: 100%;
        height: 10rem;
        border-radius: 0.5rem;
        border: 1px solid black;
        padding: 0.5rem;
        /* margin: 0.5rem; */
        font-size: 1.4rem;
        resize: none;
        text-indent: 2rem;
        ::placeholder {
            padding-top: 1rem;
        }
        font-family: Helvetica, sans-serif;

        &:focus {
            outline: none;
        }
    }
    input[type="submit"] {
        align-self: baseline;
        width: 132px;
        height: 51px;
        text-indent: unset;
        background: #C4C4C4;
        border: none;
        &:hover {
            cursor: pointer;

        }
    }
`
const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100%;
    padding: 1rem;
    margin-top: 7rem;
    div {
        width: 590px;
    }
    
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    margin-top:6rem;
    /* width: 100%; */
    height: 462px;
    h3{
        align-self: center;
        font-size: ${props => props.theme.fontSize.title};
        margin-bottom: 2.5rem;
    }

    p {
        font-size: ${props => props.theme.fontSize.backgroundTextSmall};
        line-height: 28px;   
        margin-top: 1rem;
        margin-bottom : .5rem;
        text-align: justify;
        &.italic {
            font-style: italic;
        }

    }
`
const ContactTitle = styled(Title)`
    width: fit-content;
    align-self: center;
`

function Contacto() {
    return (
        <Card >
            <div>
                <Info>
                    <ContactTitle>ESCRIBÍNOS</ContactTitle>
                    <p className="italic">Si tenés alguna consulta no dudes en contactarnos!</p>
                    <p><b>Teléfono: </b>(011) 6127-1692</p>
                    <p><b>Mail: </b>clara@krunica.com.ar / info@krunica.com.ar </p>
                </Info>
            </div>
            <div>
                <Form action="" method="post">
                    <input type="text" name="nombre" placeholder="Nombre" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="tel" placeholder="Tel" />
                    <textarea name="mensaje" placeholder="Contame de tu proyecto" />
                    <input type="submit" value="ENVIAR" />
                </Form>
            </div>
        </Card>
    )
}
export default Contacto;