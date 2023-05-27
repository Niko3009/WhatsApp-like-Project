import styled from 'styled-components'

const colorN1 = '#ffffff'
const colorN2 = '#555555'

export const Wrapper = styled('div')`
    width: 100%;
    border-bottom: 1px solid #4e4e4e;
    margin-top: 10px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Input = styled('input')`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colorN1};

    &::placeholder {
        background-color: transparent;
        color: ${colorN2};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`

export const Icon = styled('svg')`
    width: 22px;
    height: 22px;
    margin-left: 12px;
    margin-right: 12px;

    transform: ${(props) => `scale(${props.activity ? 1.5 : 1})`};
    &:hover {
        transform: ${(props) => `scale(${props.activity ? 2 : 1})`};
    }
    &:active {
        transform: ${(props) => `scale(${props.activity ? 1.7 : 1})`};
    }

    transition: all 0.2s ease-out;
    cursor: ${(props) => (props.activity ? 'pointer' : 'default')};
`
