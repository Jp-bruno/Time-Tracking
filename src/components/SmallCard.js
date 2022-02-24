import styled from 'styled-components';

const StyledSmallCard = styled.div`
    border-radius: 15px;
    display: grid;
    grid-template-rows: 20% auto;

    &.work {
        background: var(--lightOrange);
    }

    &.play {
        background: var(--softBlue);
    }

    &.study {
        background: var(--lightRed);
    }

    &.exercise {
        background: var(--limeGreen);
    }

    &.social {
        background: var(--violet);
    }

    &.self-care {
        background: var(--softYellow);
    }
    
    .image-section {
        position: relative;
        overflow: hidden;

        img {
            transform: scale(0.9);
            position: absolute;
            right: 10px;
            top: -15px;
        }
    }

    .content-section {
        padding: 20px 20px 0;
        background: var(--darkBlue);
        border-radius: 12px;
        cursor: pointer;
        transition: background-color 0.2s ease;

        &:hover {
            background: hsl(235, 46%, 40%);
        }

        div:first-of-type {
            display: flex;
            justify-content: space-between;   
        }

        button {
            background: rgba(0,0,0,0);
            border: none;
            display: grid;
            place-items: center;
            cursor: pointer;
        }

        h1 {
            font-weight: 300;
            font-size: 3.5vw;
            margin: 10% 0 2%;
        }

        small {
            font-weight: 300;
            color: rgba(255,255,255,0.5);
        }
    }

    @media(max-width: 900px) {
        width: 90%;
        margin: 0 auto 40px;

        &:first-of-type {
            margin-top: 20px;
        }

        .content-section {
            padding: 20px;

            .card-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 10px;

                h1 {
                    font-size: 2rem;
                    margin: 0;
                }
            }


        }

    }

`;

export default function SmallCard({ title, timeframes, mode }) {
    return (
        <StyledSmallCard className={`${title.toLowerCase().replace(/ /g, "-")}`}>
            <section className='image-section'>
                <img src={`./images/icon-${title.toLowerCase().replace(/ /g, "-")}.svg`} />
            </section>
            <section className='content-section'>
                <div className='title-div'>
                    <p>{title}</p>
                    <button><img src='./images/icon-ellipsis.svg' /></button>
                </div>

                <div className='card-info'>
                    <h1>
                        {
                            timeframes[mode].current
                        }hrs
                    </h1>

                    <small>Last Week - {timeframes[mode].previous}hrs</small>
                </div>
            </section>
        </StyledSmallCard>
    )
}