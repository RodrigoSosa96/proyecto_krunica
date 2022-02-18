import { Link } from 'preact-router/match';
import { Container, MenuLinks, Social, SocialImg } from './styles';
import Face from "../../../assets/img/face.svg";
import Insta from "../../../assets/img/insta.svg";


const Navbar = () => {
    return (
        <Container>
            <MenuLinks>
                <Link activeClassName="active" href="/">SOBRE MÍ</Link>
                <Link activeClassName="active" href="/trabajos">TRABAJOS</Link>
                <Link activeClassName="active" href="/servicios">SERVICIOS</Link>
                <Link activeClassName="active" href="/contacto">CONTACTO</Link>

            </MenuLinks>
            <Social>
                <SocialImg href="https://www.instagram.com" src={Insta} />
                <SocialImg href="https://www.facebook.com" src={Face} />
            </Social>
        </Container>
    )
}
export default Navbar;