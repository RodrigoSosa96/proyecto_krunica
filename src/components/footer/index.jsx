import styled from "styled-components";
import { HashLink as L } from "react-router-hash-link";

import Logo from "../header/title/Logo"
// import { Social, SocialImg } from "../header/navbar/styles";
import Face from "../../assets/img/face.svg";
import Insta from "../../assets/img/insta.svg";
import {FooterContainer, MainFooter, Titulo, FooterNav, Link, Social, SocialImg} from "./styled"



function Footer() {
    return (
        <FooterContainer>
            <MainFooter>
                <Titulo>
                    <Logo/>
                    <h2>KRUNICA</h2>
                </Titulo>
                <FooterNav>
                    <Link to="/trabajos/taller">TRABAJOS</Link>
                    <Link to="/#sobre-mi">SOBRE MÍ</Link>
                    <Link to="/#servicios">SERVICIOS</Link>
                    <Link to="/#servicios">CLIENTES</Link>
                    <Link to="/#contacto">CONTACTO</Link>
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