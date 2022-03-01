import { useEffect, useRef, useState } from 'preact/hooks';

import Navbar from './menu';
import { Container, StyledHamburger, StyledHeader } from './styled';
import Title from './title';

const Header = () => {
    const [shrunk, setShrunk] = useState(false);
    const [menu, setMenu] = useState(false);

    const headerRef = useRef(null);
    useEffect(() => {
        const headerHeight = headerRef.current.offsetHeight;
        const handleScroll = (e) => {
            let headerWidth = window.innerWidth;
            if (headerWidth > 992) {
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
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })


    return (
        <StyledHeader ref={headerRef} shrunk={shrunk} >
            <Container>
                <Title />
                <StyledHamburger onClick={() => setMenu(!menu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </StyledHamburger>
                <Navbar toggle={menu} />
            </Container>
        </StyledHeader>

    );
};

export default Header;


/**
 * SPDX-License-Identifier: (EUPL-1.2)
 */