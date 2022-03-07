import { useEffect, useState } from 'preact/hooks';
// import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

import { Container, MenuLinks, Social, SocialImg, Link } from './styles';
import Face from "../../../assets/img/face.svg";
import Insta from "../../../assets/img/insta.svg";
import { StyledHamburger } from '../styled';

const scrollTo = (element, to, duration) => {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(() => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}



const Navbar = () => {
    const [menu, setMenu] = useState(false);


    return (
        <>
            <StyledHamburger onClick={() => setMenu(!menu)}>
                <span></span>
                <span></span>
                <span></span>
            </StyledHamburger>

            <Container toggleMenu={menu} onDoubleClick={() => setMenu(!menu)} >
                <MenuLinks onClick={() => setMenu(!menu)}  >
                    <Link
                        activeClassName="active"
                        to="/about-me"
                        onClick={() => {
                            let element = document.getElementById('about-me');
                            scrollTo(document.documentElement, element.offsetTop, 100);
                        }}
                    >SOBRE MÍ</Link>
                    <Link activeClassName="active" href="/trabajos">TRABAJOS</Link>
                    <Link
                        activeClassName="active"
                        to="/servicios"
                        onClick={() => {
                            let element = document.getElementById('servicios');
                            scrollTo(document.documentElement, element.offsetTop, 100);
                        }}
                    >SERVICIOS</Link>
                    <Link
                        activeClassName="active"
                        to="/contacto"
                        onClick={() => {
                            let element = document.getElementById("contacto");
                            scrollTo(document.documentElement, element.offsetTop, 100);
                        }}

                    >CONTACTO</Link>
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