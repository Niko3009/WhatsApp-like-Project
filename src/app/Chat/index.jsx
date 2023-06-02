import { useState, useEffect } from 'react'

import { IconContext } from 'react-icons'
import { IoSend as SendArrow } from 'react-icons/io5'

import * as Styled from './style'
import {
    doGetChatHistory,
    doSendMessage,
    doCheckReceiveNotification,
} from './api'

import Header from './Header'
import ChatList from './ChatList'

export default () => {
    const [chatHistory, setChatHistory] = useState([])
    const [draftMessage, setDraftMessage] = useState('')

    const chatData = {
        idInstance: localStorage.getItem('idInstance'),
        apiTokenInstance: localStorage.getItem('apiTokenInstance'),
        phoneNumber: localStorage.getItem('phoneNumber'),
    }

    const doUpdateChatHistory = async () => {
        const newChatHistory = await doGetChatHistory(chatData)
        if (newChatHistory) setChatHistory(newChatHistory)
    }

    useEffect(() => {
        doUpdateChatHistory()

        const intervalID = setInterval(async () => {
            const response = await doCheckReceiveNotification(chatData)
            if (response.typeWebhook === 'incomingMessageReceived') {
                doUpdateChatHistory()
            }
        }, 5 * 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <Styled.Wrapper>
            <Header chatData={chatData} />

            <ChatList chatHistory={chatHistory} />

            <Styled.MessageFooter>
                <Styled.Input
                    value={draftMessage}
                    onChange={(e) => setDraftMessage(e.target.value)}
                    type="text"
                    placeholder="Введите сообщение..."
                />

                <Styled.Button
                    onClick={async () => {
                        const response = await doSendMessage(
                            chatData,
                            draftMessage
                        )
                        if (response) {
                            setDraftMessage('')
                            setTimeout(doUpdateChatHistory, 1000)
                        }
                    }}
                    disabled={!draftMessage}
                >
                    <IconContext.Provider
                        value={{ color: 'grey', size: '100%' }}
                    >
                        <SendArrow />
                    </IconContext.Provider>
                </Styled.Button>
            </Styled.MessageFooter>
        </Styled.Wrapper>
    )
}
