import styled from 'styled-components'

const colorN1 = 'rgb(45, 45, 45)'
const colorN2 = 'grey'
const colorN3 = 'rgb(30,180,140)'
const colorN4 = 'rgba(45, 45, 45, 0)'

export const Wrapper = styled('div')`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colorN4};
`

export const Form = styled('div')`
    min-width: 480px;
    padding: 40px;

    border-radius: 10px;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    overflow: hidden;

    h1,
    h2,
    h3,
    p {
        color: ${colorN1};
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        vertical-align: center;
        text-align: center;
    }

    h1 {
        font-size: 24px;
    }
    h2 {
        font-size: 18px;
    }
    h3 {
        font-size: 18px;
    }
    p {
        font-size: 18px;
        height: 24px;
        overflow: hidden;
    }

    a:hover {
        text-decoration: underline;
        color: green;
    }
`

export const Item = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
`

export const Input = styled('input')`
    height: 24px;
    width: 50%;
    background-color: transparent;

    border: none;
    border-bottom: 1px solid;
    padding: 13px 10px 14px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colorN1};

    vertical-align: center;
    text-align: center;

    &::placeholder {
        background-color: transparent;
        color: ${colorN2};
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`

export const Button = styled('button')`
    min-height: max-content;
    min-width: max-content;

    padding: 10px;

    border: none;
    border-radius: 12px;
    background: ${colorN3};

    transition: all 0.2s ease-out;

    display: flex;
    flex-direction: row;
    justify-content: center;

    color: white;
    text-transform: uppercase;
    font-size: 24px;
    vertical-align: center;
    text-align: center;

    overflow: hidden;
    cursor: ${(props) => (!props.disabled ? `pointer` : `default`)};

    &:hover {
        transform: ${(props) => (!props.disabled ? `scale(1.05)` : `scale(1)`)};
    }
    &:disabled {
        background: lightgrey;
    }
`
