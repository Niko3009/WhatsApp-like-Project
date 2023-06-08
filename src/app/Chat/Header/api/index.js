import { API_HOST } from 'data/api'

export const doGetContactInfo = async (
    idInstance,
    apiTokenInstance,
    phoneNumber
) => {
    const sendMessage = fetch(
        `${API_HOST}/waInstance${idInstance}/getContactInfo/${apiTokenInstance}`,
        {
            method: 'post',
            body: JSON.stringify({ chatId: `${phoneNumber}@c.us` }),
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
