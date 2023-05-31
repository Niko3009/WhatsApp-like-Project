import { API_HOST } from 'data/api'

export const useGetContactInfo = async (setValue, chatData) => {
    const { idInstance, apiTokenInstance, phoneNumber } = chatData
    fetch(
        `${API_HOST}/waInstance${idInstance}/getContactInfo/${apiTokenInstance}`,
        {
            method: 'post',
            body: JSON.stringify({ chatId: `${phoneNumber}@c.us` }),
        }
    )
        .then((response) => response.json())
        .then((response) => {
            if (response.name) setValue(response)
        })
        .catch((error) => {})
}
