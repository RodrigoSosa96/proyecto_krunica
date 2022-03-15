import { useEffect, useRef, useState } from 'preact/hooks';

import Navbar from './navbar';
import { Container, StyledHeader } from './styled';
import Title from './title';

const Header = () => {
    const [shrunk, setShrunk] = useState(false);

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
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })


    return (
        <StyledHeader ref={headerRef} shrunk={shrunk} >
            <Container>
                <Title />
                <Navbar/>
            </Container>
        </StyledHeader>

    );
};

export default Header;
