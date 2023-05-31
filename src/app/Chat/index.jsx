import { useState, useEffect } from 'react'

import { IconContext } from 'react-icons'
import { IoSend as SendArrow } from 'react-icons/io5'

import * as Styled from './style'
import {
    useGetChatHistory,
    useSendMessage,
    useCheckReceiveNotification,
} from './hooks'

import Header from './Header'
import ChatList from './ChatList'

export default () => {
    const data = {
        chatHistory: [],
        draftMessage: '',
    }

    for (const key in data) data[key] = { initValue: data[key] }
    for (const key in data)
        [data[key].value, data[key].setValue] = useState(data[key].initValue)

    const chatData = { ...localStorage }
    const useUpdateChatHistory = () =>
        useGetChatHistory(data.chatHistory, chatData)

    const useCheck = () =>
        setTimeout(() => {
            useCheckReceiveNotification(chatData, useUpdateChatHistory)
            useCheck()
        }, 5 * 1000)

    useEffect(() => {
        useUpdateChatHistory()
        useCheck()
    }, [])

    return (
        <Styled.Wrapper>
            <Header {...{ chatData }} />

            <ChatList chatHistory={data.chatHistory} />

            <Styled.MessageFooter>
                <Styled.Input
                    value={data.draftMessage.value}
                    onChange={(e) => data.draftMessage.setValue(e.target.value)}
                    type="text"
                    placeholder="Введите сообщение..."
                />
                <Styled.Button
                    onClick={() =>
                        useSendMessage(
                            data.draftMessage,
                            chatData,
                            useUpdateChatHistory
                        )
                    }
                    disabled={!data.draftMessage.value}
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
