import styled from 'styled-components';
import MainWrapper from './components/MainWrapper';
import './variables.css';

const StyledApp = styled.div`
    width: 100vw;
    height: 100vh;
    background: var(--veryDarkBlue);
    display: grid;
    place-items: center;

    @media(max-width: 900px) {
        height: auto;
    }
`;

export default function App() {
    return (
        <StyledApp>
            <MainWrapper />
        </StyledApp>
    )
}