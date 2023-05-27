import styled from 'styled-components'

import './animation.css'

export const Item = styled('div')`
    width: 100%;
    height: 160px;
    height: ${(props) => (props.activity ? 'max-content' : '')};

    padding: 20px 60px;
    border-radius: 10px;
    border: 2px solid white;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    transition: all 0.6s ease-out;
    cursor: ${(props) => (!props.activity ? 'pointer' : 'default')};

    overflow: hidden;
    transform: ${(props) => (props.activity ? 'scale(1.05)' : '')};
    background-color: ${(props) => (props.activity ? '#353535' : '')};

    animation: anima 0.4s ease 0s 1 normal forwards;

    &:hover {
        background-color: #353535;
    }

    button {
        height: 48px;
        width: 48px;
        margin: 20px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;

        background-color: transparent;
        border: 0px solid white;
        border-radius: 60px;

        color: white;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        vertical-align: center;
        text-align: center;
        transition: all 0.5s ease-out;

        & span {
            margin-left: 28px;
            flex-grow: 1;
            text-align: center;
        }
        &:hover {
            transform: scale(2);
        }
    }
`

export const Main = styled('div')`
    width: 100%;
    height: 160px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;

    img {
        object-fit: cover;
        width: 100px;
        height: 100px;
        border: 2px solid #0088ff;
        border-radius: 10px;
    }

    h1 {
        margin: 20px;
        color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        vertical-align: center;
    }
`

export const Details = styled('div')`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin: 20px 20px;

    td {
        min-width: auto;
        border: 2px solid darkgray;
        padding: 8px;
        overflow-x: hidden;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    p,
    a {
        height: 150px;
        display: inline-block;
        width: 400px;
        height: 20px;
        cursor: text;
    }
    a {
        text-decoration: underline;
        &:hover {
            color: #0088ff;
            cursor: pointer;
        }
    }
`
