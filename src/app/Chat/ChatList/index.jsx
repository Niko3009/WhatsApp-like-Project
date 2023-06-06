import { useRef, useEffect } from 'react'

import * as Styled from './style'

export default ({ chatHistory }) => {
    const chatRef = useRef()

    useEffect(() => {
        const chat = chatRef.current
        chat.scrollTop = chat.scrollHeight
    }, [chatHistory.length])

    return (
        <Styled.Wrapper ref={chatRef}>
            <div>
                <Styled.List>
                    {chatHistory.map((messageData) => (
                        <Message
                            data={messageData}
                            key={String(messageData.idMessage)}
                        />
                    ))}
                </Styled.List>
            </div>
        </Styled.Wrapper>
    )
}

const Message = ({ data }) => {
    const { textMessage, type, timestamp } = data

    if (!textMessage) return

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
        <Styled.Row type={type}>
            <Styled.Cloud type={type}>
                <h1>{textMessage}</h1>
                <p>{time(new Date(timestamp))}</p>
            </Styled.Cloud>
        </Styled.Row>
    )
}
