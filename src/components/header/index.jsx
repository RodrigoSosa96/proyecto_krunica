import { useEffect, useRef, useState } from 'react';

import Navbar from './navbar';
import { Container, StyledHeader } from './styled';
import Title from './title';
import { StyledHamburger } from './styled';


const Header = () => {
    const [shrunk, setShrunk] = useState(false);
    const [menu, setMenu] = useState(false);

    const headerRef = useRef(null);
    useEffect(() => {
        const headerHeight = headerRef.current.offsetHeight;
        const handleScroll = (e) => {
            let headerWidth = window.innerWidth;
            if (headerWidth > 768) {
                let scrollpos = window.scrollY;
                if (scrollpos >= headerHeight) {
                    setShrunk(true);
                } else {
                    setShrunk(false);
                }
            } else {
                setShrunk(false);
            }
        }
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [headerRef])

    useEffect(() => {
        const headerWidth = window.innerWidth;
        const handleResize = () => {
            if (headerWidth > 768) {
                setMenu(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    // useEffect(() => {
    //     const headerWidth = window.innerWidth; 
    //     if (headerWidth < 768) {
    //         if(menu) {
    //             document.body.style.overflow = 'hidden';
    //         } else {
    //             document.body.style.overflow = 'auto';
    //         }
    //     }
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     }
    // }, [menu])



    return (
        <StyledHeader ref={headerRef} shrunk={shrunk} >
            <Container>
                <Title />
                <StyledHamburger onClick={() => setMenu(!menu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </StyledHamburger>
                <Navbar toggle={{menu, setMenu}}/>
            </Container>
        </StyledHeader>

    );
};

export default Header;
