import { API_HOST } from 'data/api'

export const useSendMessage = async (
    draftMessage,
    chatData,
    useUpdateChatHistory
) => {
    const { idInstance, apiTokenInstance, phoneNumber } = chatData
    const message = draftMessage.value

    fetch(
        `${API_HOST}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        {
            method: 'post',
            body: JSON.stringify({ chatId: `${phoneNumber}@c.us`, message }),
        }
    )
        .then((response) => response.json())
        .then((response) => {
            draftMessage.setValue('')
            setTimeout(useUpdateChatHistory, 1000)
        })
        .catch((error) => {})
}

export const useGetChatHistory = async (chatHistory, chatData) => {
    const { idInstance, apiTokenInstance, phoneNumber } = chatData
    fetch(
        `${API_HOST}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
        {
            method: 'post',
            body: JSON.stringify({ chatId: `${phoneNumber}@c.us` }),
        }
    )
        .then((response) => response.json())
        .then((response) => {
            chatHistory.setValue(response)

            const lastMessage = response?.at(0)?.textMessage
            // console.log(`Чат обновлен [${timeMark()}]: ${lastMessage}`)
        })
        .catch((error) => {})
}

export const useCheckReceiveNotification = async (
    chatData,
    useUpdateChatHistory
) => {
    const { idInstance, apiTokenInstance, phoneNumber } = chatData
    fetch(
        `${API_HOST}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
    )
        .then((response) => response.json())
        .then((response) => {
            if (!response) return

            const data = response?.body
            if (data?.typeWebhook === 'incomingMessageReceived')
                useUpdateChatHistory()

            setTimeout(() => {
                useDeleteNotification(chatData, response)
            }, 500)
        })
        .catch((error) => {})
}

export const useDeleteNotification = async (chatData, receipt) => {
    const { idInstance, apiTokenInstance } = chatData
    fetch(
        `${API_HOST}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receipt?.receiptId}`,
        {
            method: 'delete',
        }
    )
        .then((response) => response.json())
        .then((response) => {})
        .catch((error) => {})
}

const timeMark = () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hh = (hours < 10 ? '0' : '') + hours
    const mm = (minutes < 10 ? '0' : '') + minutes
    const ss = (seconds < 10 ? '0' : '') + seconds
    const time = `${hh}:${mm}:${ss}`
    return `${time}`
}
