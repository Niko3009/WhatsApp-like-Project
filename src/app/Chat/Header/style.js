import styled from 'styled-components'

const colorN1 = 'rgb(30, 30, 30)'
const colorN2 = 'grey'

export const Wrapper = styled('div')`
    height: 100%;
    width: 100%;

    min-width: 480px;
    padding: 0 100px;

    background-color: ${colorN1};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

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

export const ContactInfo = styled('div')`
    display: flex;
    align-items: center;
    gap: 40px;

    & > img {
        height: 100%;
        width: 100%;
    }
`

export const Avatar = styled('div')`
    width: 64px;
    height: 64px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    & > img {
        height: 100%;
        width: 100%;
    }
`

export const ExitButton = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
        width: 40px;
        height: 40px;
        border-radius: 30px;
        border: none;
        background-color: transparent;
        :hover {
            transform: scale(1.1);
        }
    }
`
