import styled from 'styled-components';

const StyledCard = styled.div`
    height: 100%;
    width: 30%;
    border-radius: 15px;
    overflow: hidden;
    background: var(--darkBlue);
    margin-right: 30px;
    display: grid;
    grid-template-rows: 68% 32%;

    section {
        padding: 30px;
        display: flex;
        flex-direction: column;

        &:first-of-type {
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            background: var(--mainBlue);
            color: rgba(255,255,255,0.9);

            .profile-pic {
                border: solid 2.5px white;
                border-radius: 50px;
                width: 45%;
                margin-bottom: 20%; 
            }

            small {
                margin-bottom: 5px;
                font-weight: 400;
                color: rgba(255,255,255,0.5);
            }

            h1 {
                font-weight: 300;
                font-size: 2.3vw;
            }
        }

        &:last-of-type {
            justify-content: space-evenly;
            padding: 5px 30px;

            .mode-button {
                text-align: left;
                background: rgba(0,0,0,0);
                border: none;
                cursor: pointer;
                color: rgba(255,255,255,0.5);
                font-size: 1vw;

                &:hover {
                    color: rgba(255,255,255,0.8);
                }

                &.active {
                    color: white;
                }
            }
        }

    }

    //-------------------------media queries--------------------------//

    @media(max-width: 900px) {
        width: 90%;
        display: grid;
        grid-template-rows: auto auto;
        padding: 0;
        margin: 0 auto;

        section:first-of-type {
            display: grid;
            grid-template-columns: 30% auto;
            grid-template-areas:
                        "pic small"
                        "pic header"
            ;
            padding: 10px 0;
            height: fit-content;

            .profile-pic {
                width: 70%;
                border-radius: 150px;
                grid-area: pic;
                place-self: center;
                margin: 20px 0;
            }

            small, h1 {
                height: min-content;
                width: 100%;
            }

            small {
                font-size: 4vw;
                grid-area: small;
                place-self: end start;
                margin-bottom: 0;
            }

            h1 {
                font-weight: 300;
                font-size: 7vw;
                place-self: start;
                grid-area: header;
            }
        }

        section:last-of-type {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: 100%;
            height: fit-content;
            place-items: center;
            padding: 0;

            .mode-button {
                padding: 15px 0;
                font-size: 5vw;
            }
        }
    }
`;

export default function MainCard({ changeMode }) {
    return (
        <StyledCard>
            <section>
                <img className='profile-pic' src='./images/image-jeremy.png' alt='profile picture' />
                <small>Report for</small>
                <h1>Jeremy Robson</h1>
            </section>

            <section>
                <button className={`mode-button active`} onClick={changeMode}>Daily</button>
                <button className={`mode-button`} onClick={changeMode}>Weekly</button>
                <button className={`mode-button`} onClick={changeMode}>Monthly</button>
            </section>
        </StyledCard>
    )
}