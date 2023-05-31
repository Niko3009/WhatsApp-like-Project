import styled from 'styled-components'

const colorN1 = 'rgb(30, 30, 30)'
const colorN2 = 'grey'
const colorN3 = 'rgb(20, 20, 20)'
const colorN4 = 'rgb(240, 240, 240)'

export const Wrapper = styled('div')`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-rows: 100px auto 100px;
`

export const MessageFooter = styled('div')`
    height: 100%;
    width: 100%;
    min-width: 480px;

    padding: 0 100px;

    background-color: ${colorN1};

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 40px;

    h1,
    h2,
    h3,
    p {
        color: ${colorN2};
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
`

export const Input = styled('input')`
    height: 60%;
    flex-grow: 1;
    background-color: ${colorN3};
    border-radius: 12px;
    border: none;

    padding: 13px 20px 14px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colorN4};

    :focus {
        outline: none;
    }

    &::placeholder {
        color: ${colorN2};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`

export const Button = styled('button')`
    width: 40px;
    height: 40px;
    border-radius: 30px;
    border: none;
    background-color: transparent;

    transition: all 0.2s;

    cursor: ${(props) => (!props.disabled ? `pointer` : `default`)};

    &:hover {
        transform: ${(props) => (!props.disabled ? `scale(1.2)` : `scale(1)`)};
    }
    &:disabled {
        transform: scale(0);
    }
`
