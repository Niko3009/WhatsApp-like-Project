import styled from 'styled-components'

export const Wrapper = styled('div')`
    height: calc(100vh - 200px);
    width: 100%;

    overflow-y: scroll;

    display: flex;
    justify-content: center;

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    &:hover {
        &::-webkit-scrollbar-thumb {
            background-color: white;
        }
    }
`

export const List = styled('div')`
    height: content;
    width: 1160px;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
`

export const Row = styled('div')`
    width: 100%;
    margin: 10px 0;

    display: flex;
    flex-direction: row;
    justify-content: ${(props) =>
        props.data.type === 'outgoing' ? `flex-start` : `flex-end`};
`

export const Cloud = styled('div')`
    width: 400px;
    max-width: 100%;

    padding: 12px 24px;
    border-radius: 24px;
    background-color: ${(props) =>
        props.data.type === 'outgoing' ? `green` : `blue`};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    gap: 10px;

    word-wrap: break-word;

    h1,
    p {
        width: 100%;
        color: white;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;
    }

    p {
        color: lightgrey;

        font-size: 16px;
    }
`
