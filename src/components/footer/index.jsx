import Logo from "../header/title/Logo"
import Face from "../../assets/img/icons8-facebook.svg";
import Insta from "../../assets/img/icons8-instagram.svg";
import {FooterContainer, MainFooter, Titulo, FooterNav, Link, Social, SocialImg} from "./styled"

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -125; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

function Footer() {
    return (
        <FooterContainer>
            <MainFooter>
                <Titulo>
                    <Logo/>
                    <h2>KRUNICA</h2>
                </Titulo>
                <FooterNav>
                    <Link to="/trabajos/estudio#">TRABAJOS</Link>
                    <Link scroll={scrollWithOffset} to="/#about-me">SOBRE MÍ</Link>
                    <Link scroll={scrollWithOffset} to="/#servicios">SERVICIOS</Link>
                    <Link scroll={scrollWithOffset} to="/#clientes">CLIENTES</Link>
                    <Link scroll={scrollWithOffset} to="/#contacto">CONTACTO</Link>
                </FooterNav>
            </MainFooter>
            <Social>
                <h3>SEGUINOS</h3>
                <div className="footer-redes">
                    <SocialImg href="https://www.instagram.com/krunica.taller.creativo/" target="_blank" rel="noreferrer noopener" src={Insta}/>
                    <SocialImg href="https://www.facebook.com/krunica.taller.creativo/" target="_blank" rel="noreferrer noopener" src={Face}/>
                </div>
            </Social>
        </FooterContainer>
    )
}

export default Footer;