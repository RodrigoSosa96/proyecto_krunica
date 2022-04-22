import { Container, MenuLinks, Social, SocialImg, Link } from './styles';
import Face from "../../../assets/img/face.svg";
import Insta from "../../../assets/img/insta.svg";
import { StyledHamburger } from '../styled';


const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const Navbar = ({toggle}) => {
    const { menu, setMenu } = toggle

    return (
        <>
            <StyledHamburger onClick={() => setMenu(!menu)}>
                <span></span>
                <span></span>
                <span></span>
            </StyledHamburger>

            <Container toggleMenu={menu} >
                <MenuLinks toggleLinks={menu} onClick={() => setMenu(!menu)}  >
                    <Link smooth to="/trabajos/estudio#" scroll={scrollWithOffset} className={(navData) => (navData.isActive ? "active" : 'none')} >TRABAJOS</Link>
                    <Link smooth to="/#about-me" scroll={scrollWithOffset} className={(navData) => (navData.isActive ? "active" : 'none')}>SOBRE MÍ</Link>
                    <Link smooth to="/#servicios" scroll={scrollWithOffset} className={(navData) => (navData.isActive ? "active" : 'none')} >SERVICIOS</Link>
                    <Link smooth to="/#clientes" scroll={scrollWithOffset} className={(navData) => (navData.isActive ? "active" : 'none')} >CLIENTES</Link>
                    <Link smooth to="/#contacto" scroll={scrollWithOffset} className={(navData) => (navData.isActive ? "active" : 'none')} >CONTACTO</Link>
                </MenuLinks>
                <Social toggleSocial={menu}>
                    <SocialImg href="https://www.instagram.com" src={Insta} />
                    <SocialImg href="https://www.facebook.com" src={Face} />
                </Social>
            </Container>

        </>
    )
}
export default Navbar;