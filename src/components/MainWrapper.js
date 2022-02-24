import styled from 'styled-components';
import { useState } from 'react';

import cardsData from '../data.json';

import MainCard from './MainCard';
import SmallCard from './SmallCard';

const StyledWrapper = styled.main`
    width: 64%;
    height: clamp(300px, 60vh, 500px);
    display: flex;
    position: relative;

    .small-cards-wrapper {
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 30px;
        column-gap: 30px;
    }

    @media(max-width: 900px) {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-rows: auto auto;
        margin-top: 50px;
        
        .small-cards-wrapper {
            display: flex;
            flex-direction: column;
            row-gap: 0px;
            column-gap: 0px;
            grid-template-rows: none;
            grid-template-columns: none;
        }
    }
`;

export default function MainWrapper() {
    const [state, setState] = useState('daily');

    function changeMode(ev) {
        let newState = ev.target.innerText.toLowerCase();

        if (state === newState) {
            return false
        }
        
        //manipulando as classes para o modo selecionado ficar destacado no card principal
        const buttons = Array.from(document.querySelectorAll('.mode-button'));
        const index = buttons.findIndex(el => el.classList.contains('active'));
        buttons[index].classList.remove('active');
        ev.target.classList.add('active');

        setState(newState);
    }
    
    return (
        <StyledWrapper>
            <MainCard changeMode={changeMode} />
            <div className='small-cards-wrapper'>
                {
                    cardsData.map(el => {
                        return <SmallCard title={el.title} timeframes={el.timeframes} mode={state}/>
                    })
                }
            </div>
        </StyledWrapper>
    )
}