import { API_HOST } from 'data/api'

export const sendMessage = async (
    idInstance,
    apiTokenInstance,
    phoneNumber,
    message
) => {
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

export const doGetChatHistory = async (
    idInstance,
    apiTokenInstance,
    phoneNumber
) => {
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

export const checkReceiveNotification = async (
    idInstance,
    apiTokenInstance
) => {
    const sendMessage = fetch(
        `${API_HOST}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
    )

    try {
        const promise = await sendMessage
        if (promise.status !== 200) return

        const response = await promise.json()
        if (response === null) {
            return null
        }

        const data = response?.body
        deleteNotification(idInstance, apiTokenInstance, response.receiptId)
        return data
    } catch (error) {
        return null
    }
}

export const deleteNotification = async (
    idInstance,
    apiTokenInstance,
    receiptId
) => {
    fetch(
        `${API_HOST}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
        {
            method: 'delete',
        }
    )
}
