import { useEffect, useRef, useState } from 'preact/hooks';

import Navbar from './menu';
import { Container, StyledHeader } from './styled';
import Title from './title';

const Header = () => {
    const [shrunk, setShrunk] = useState(true);
    const headerRef = useRef(null);
    useEffect(() => {
        const headerHeight = headerRef.current.offsetHeight;
        const handleScroll = (e) => {
            let headerWidth = window.innerWidth;
            let scrollpos = window.scrollY;
            if (headerWidth > 992) {
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
                <Navbar />
            </Container>
        </StyledHeader>
        
    );
};

export default Header;
