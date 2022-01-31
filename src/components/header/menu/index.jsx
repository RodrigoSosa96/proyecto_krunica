import { Link } from 'preact-router/match';
import { Container, MenuLinks, Social, SocialImg } from './styles';


const Navbar = () => {

    const face = "/assets/icons/face.svg";
    const insta = "/assets/icons/insta.svg";

    return (
        <Container>
            <MenuLinks>
                <Link activeClassName="active" href="/">SOBRE MÍ</Link>
                <Link activeClassName="active" href="/trabajos">TRABAJOS</Link>
                <Link activeClassName="active" href="/servicios">SERVICIOS</Link>
                <Link activeClassName="active" href="/contacto">CONTACTO</Link>

            </MenuLinks>
            <Social>
                <SocialImg href="https://www.instagram.com" src={insta} />
                <SocialImg href="https://www.facebook.com" src={face} />
            </Social>
        </Container>
    )
}
export default Navbar;