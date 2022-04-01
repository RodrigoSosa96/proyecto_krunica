import {  useEffect, useState } from 'preact/hooks';

import { Container, MenuLinks, Social, SocialImg, Link } from './styles';
import Face from "../../../assets/img/face.svg";
import Insta from "../../../assets/img/insta.svg";
import { StyledHamburger } from '../styled';


const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    useEffect(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            if(menu) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
            
    }, [menu])

    return (
        <>
            <StyledHamburger onClick={() => setMenu(!menu)}>
                <span></span>
                <span></span>
                <span></span>
            </StyledHamburger>

            <Container toggleMenu={menu} >
                <MenuLinks toggleLinks={menu} onClick={() => setMenu(!menu)}  >
                    <Link smooth to="/trabajos/taller" scroll={scrollWithOffset} activeClassName="active" >TRABAJOS</Link>
                    <Link smooth to="/#about-me" scroll={scrollWithOffset} activeClassName="active" >SOBRE MÍ</Link>
                    <Link smooth to="/#servicios" scroll={scrollWithOffset} activeClassName="active" >SERVICIOS</Link>
                    <Link smooth to="/#clientes" scroll={scrollWithOffset} activeClassName="active" >CLIENTES</Link>
                    <Link smooth to="/#contacto" scroll={scrollWithOffset} activeClassName="active" >CONTACTO</Link>
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