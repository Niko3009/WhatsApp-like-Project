import { useRef, useEffect } from 'react'

import * as Styled from './style'

export default ({ chatHistory }) => {
    const chatRef = useRef()
    if (!Array.isArray(chatHistory)) chatHistory = []

    useEffect(() => {
        const chat = chatRef.current
        chat.scrollTop = chat.scrollHeight
    }, [chatHistory.length])

    return (
        <Styled.Wrapper ref={chatRef}>
            <div>
                <Styled.List>
                    {chatHistory
                        .map((messageData) => (
                            <Message
                                data={messageData}
                                key={String(messageData.idMessage)}
                            />
                        ))
                        .reverse()}
                </Styled.List>
            </div>
        </Styled.Wrapper>
    )
}

const Message = ({ data }) => {
    if (!data.textMessage) return

    const time = (date) => {
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const hh = (hours < 10 ? '0' : '') + hours
        const mm = (minutes < 10 ? '0' : '') + minutes
        const ss = (seconds < 10 ? '0' : '') + seconds
        const time = `${hh}:${mm}:${ss}`
        return `${time}`
    }

    return (
        <Styled.Row data={data}>
            <Styled.Cloud data={data}>
                <h1>{data.textMessage}</h1>
                <p>{time(new Date(data.timestamp))}</p>
            </Styled.Cloud>
        </Styled.Row>
    )
}
