import { Link } from 'preact-router/match';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0 5%;
    margin: 100px 0;
`
const Notfound = () => {
    return (
        <Wrapper >
            <h1>Error 404</h1>
            <p>That page doesn&apos;t exist.</p>
            <Link href="/">
                <h4>Back to Home</h4>
            </Link>
        </Wrapper>
    );
};

export default Notfound;
