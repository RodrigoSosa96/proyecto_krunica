import styled from "styled-components";
import { HashLink as L } from "react-router-hash-link";

import Logo from "../header/title/Logo"
// import { Social, SocialImg } from "../header/navbar/styles";
import Face from "../../assets/img/face.svg";
import Insta from "../../assets/img/insta.svg";
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
                    <Link scroll={scrollWithOffset} to="/#servicios">CLIENTES</Link>
                    <Link scroll={scrollWithOffset} to="/#contacto">CONTACTO</Link>
                </FooterNav>
            </MainFooter>
            <Social>
                <h3>seguinos</h3>
                <div className="footer-redes">
                    <SocialImg href="https://www.instagram.com" src={Insta}/>
                    <SocialImg href="https://www.facebook.com" src={Face}/>
                </div>
            </Social>
        </FooterContainer>
    )
}

export default Footer;