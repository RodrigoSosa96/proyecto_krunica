import { Container, MenuLinks, Social, SocialImg, Link } from './styles';
import Face from "../../../assets/img/icons8-facebook.svg";
import Insta from "../../../assets/img/icons8-instagram.svg";


const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const Navbar = ({toggle}) => {
    const { menu, setMenu } = toggle

    return (
        <>
            <Container toggleMenu={menu} >
                <MenuLinks toggleLinks={menu} onClick={() => setMenu(!menu)}  >
                    <Link smooth to="/trabajos/estudio#" scroll={scrollWithOffset} className={(navData) => (navData.isActive ? "active" : 'none')} >TRABAJOS</Link>
                    <Link smooth to="/#about-me" scroll={scrollWithOffset} className={(navData) => (navData.isActive ? "active" : 'none')}>SOBRE MÍ</Link>
                    <Link smooth to="/#servicios" scroll={scrollWithOffset} className={(navData) => (navData.isActive ? "active" : 'none')} >SERVICIOS</Link>
                    <Link smooth to="/#clientes" scroll={scrollWithOffset} className={(navData) => (navData.isActive ? "active" : 'none')} >CLIENTES</Link>
                    <Link smooth to="/#contacto" scroll={scrollWithOffset} className={(navData) => (navData.isActive ? "active" : 'none')} >CONTACTO</Link>
                </MenuLinks>
                <Social toggleSocial={menu}>
                    <SocialImg href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" src={Insta} />
                    <SocialImg href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" src={Face} />
                </Social>
            </Container>

        </>
    )
}
export default Navbar;