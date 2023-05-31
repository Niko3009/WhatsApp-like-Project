import { API_HOST } from 'data/api'

export const useLogIn = async (data, useSuccessCall, useErrorCall) => {
    localStorage.clear()

    const error = await useDataCheck(data)
    if (error) return useErrorCall(error)

    for (const [key, keyItem] of Object.entries(data))
        localStorage.setItem(key, keyItem.value)

    useSuccessCall()
}

export const useDataCheck = async ({
    idInstance,
    apiTokenInstance,
    phoneNumber,
}) => {
    const getInstanceData = fetch(
        `${API_HOST}/waInstance${idInstance.value}/getStateInstance/${apiTokenInstance.value}`
    )
    const isInstanceValid =
        idInstance.value.match(/[0-9]{10}/)?.index === 0 &&
        idInstance.value.toString().length === 10
    if (!isInstanceValid) return 'Формат данных аккаунта не верен'
    try {
        const response = await getInstanceData
        if (response.status !== 200) return `Ошибка запроса #${response.status}`
        if (response.statusText !== 'OK')
            return `Пользователь с указанными данными не существует или не авторизован`
    } catch (error) {
        return 'Неизвестная ошибка,\n убедитесь в правильности данных'
    }

    const getPhoneData = fetch(
        `${API_HOST}/waInstance${idInstance.value}/checkWhatsapp/${apiTokenInstance.value}`,
        {
            method: 'post',
            body: JSON.stringify({
                phoneNumber: phoneNumber.value,
            }),
        }
    )
    const isPhoneValid =
        phoneNumber.value.match(/[7]{1}[0-9]{10}/)?.index === 0 &&
        phoneNumber.value.toString().length === 11
    if (!isPhoneValid) return 'Формат телефона не верен'
    try {
        const response = await getPhoneData
        if (response.status !== 200) return `Ошибка запроса #${response.status}`
        const data = await response.json()
        if (!data?.existsWhatsapp)
            return `Пользователь с таким Whatsapp не найден`
    } catch (error) {
        return 'Неизвестная ошибка'
    }

    return null
}
