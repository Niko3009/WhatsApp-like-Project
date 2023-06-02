import { API_HOST } from 'data/api'

export const doSendMessage = async (chatData, message) => {
    const { idInstance, apiTokenInstance, phoneNumber } = chatData

    const sendMessage = fetch(
        `${API_HOST}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        {
            method: 'post',
            body: JSON.stringify({ chatId: `${phoneNumber}@c.us`, message }),
        }
    )

    try {
        const promise = await sendMessage
        if (promise.status !== 200) return

        const response = await promise.json()
        return response
    } catch (error) {
        return
    }
}

export const doGetChatHistory = async (chatData) => {
    const { idInstance, apiTokenInstance, phoneNumber } = chatData

    const sendMessage = fetch(
        `${API_HOST}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
        {
            method: 'post',
            body: JSON.stringify({ chatId: `${phoneNumber}@c.us` }),
        }
    )

    try {
        const promise = await sendMessage
        if (promise.status !== 200) return

        const data = await promise.json()

        return data
    } catch (error) {
        return
    }
}

export const doCheckReceiveNotification = async (chatData) => {
    const { idInstance, apiTokenInstance } = chatData

    const sendMessage = fetch(
        `${API_HOST}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
    )

    try {
        const promise = await sendMessage
        if (promise.status !== 200) return

        const response = await promise.json()
        const data = response?.body

        doDeleteNotification(chatData, response)

        return data
    } catch (error) {
        return null
    }
}

export const doDeleteNotification = async (chatData, receipt) => {
    const { idInstance, apiTokenInstance } = chatData
    fetch(
        `${API_HOST}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receipt?.receiptId}`,
        {
            method: 'delete',
        }
    )
}
