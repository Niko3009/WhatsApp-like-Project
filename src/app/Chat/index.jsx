import { useState, useEffect } from 'react'

import { IconContext } from 'react-icons'
import { IoSend as SendArrow } from 'react-icons/io5'

import * as Styled from './style'
import { doGetChatHistory, sendMessage, checkReceiveNotification } from './api'

import Header from './Header'
import ChatList from './ChatList'

export default () => {
    const [chatHistory, setChatHistory] = useState([])
    const [draftMessage, setDraftMessage] = useState('')

    const idInstance = localStorage.getItem('idInstance')
    const apiTokenInstance = localStorage.getItem('apiTokenInstance')
    const phoneNumber = localStorage.getItem('phoneNumber')

    const updateChatHistory = async () => {
        const responseHistory = await doGetChatHistory(
            idInstance,
            apiTokenInstance,
            phoneNumber
        )
        if (Array.isArray(responseHistory)) {
            const filteredHistory = responseHistory
                .filter(function (message) {
                    return message.idMessage !== undefined
                })
                .reverse()
            setChatHistory(filteredHistory)
        }
    }

    useEffect(() => {
        updateChatHistory()

        const delay = 3 * 1000
        let timerId = setTimeout(async function request() {
            const receiveNotification = await checkReceiveNotification(
                idInstance,
                apiTokenInstance
            )
            if (receiveNotification !== null) {
                updateChatHistory()
            }

            if (timerId === null) return // если ответ от сервера придет после удаления компонента таймер будет запущен снова (см.стр.54)
            timerId = setTimeout(request, delay)
        }, delay)

        return () => {
            clearTimeout(timerId)
            timerId = null
        }
    }, [])

    return (
        <Styled.Wrapper>
            <Header
                idInstance={idInstance}
                apiTokenInstance={apiTokenInstance}
                phoneNumber={phoneNumber}
            />

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
                        const response = await sendMessage(
                            idInstance,
                            apiTokenInstance,
                            phoneNumber,
                            draftMessage
                        )
                        if (response) {
                            setDraftMessage('')
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
