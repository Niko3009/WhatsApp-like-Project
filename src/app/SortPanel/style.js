import styled from 'styled-components'

export const Wrapper = styled('div')`
    height: 100px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 20px;

    p {
        color: white;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        vertical-align: center;
        text-align: center;
    }
`

export const Button = styled('button')`
    height: 48px;
    padding: 20px 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 10px;

    background-color: transparent;
    border: 1.5px solid white;
    border-radius: 60px;

    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    vertical-align: center;
    text-align: center;

    transition: all 0.5s ease-out;

    &:hover {
        background-color: #353535;
        transform: scale(1.1);
    }
`

export const Detector = styled('div')`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    & p {
        color: white;
    }
`
