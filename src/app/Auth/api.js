import { API_HOST } from 'data/api'

export const doDataCheck = async ({
    idInstance,
    apiTokenInstance,
    phoneNumber,
}) => {
    const getInstanceData = fetch(
        `${API_HOST}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
    )

    const getPhoneData = fetch(
        `${API_HOST}/waInstance${idInstance}/checkWhatsapp/${apiTokenInstance}`,
        {
            method: 'post',
            body: JSON.stringify({
                phoneNumber: phoneNumber,
            }),
        }
    )

    try {
        const response = await getInstanceData
        if (response.status !== 200) {
            return `Ошибка запроса #${response.status}`
        }
        if (response.statusText !== 'OK') {
            return `Пользователь с указанными данными не существует или не авторизован`
        }
        const getPhoneDataResponse = await getPhoneData
        if (getPhoneDataResponse.status !== 200) {
            return `Ошибка запроса #${getPhoneDataResponse.status}`
        }
        const data = await getPhoneDataResponse.json()
        if (!data?.existsWhatsapp) {
            return `Пользователь с таким Whatsapp не найден`
        }
    } catch (error) {
        return 'Неизвестная ошибка,\n убедитесь в правильности данных'
    }

    return null
}
