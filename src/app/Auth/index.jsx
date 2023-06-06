import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { DOMAIN, SENDING_FEATURES_URL } from 'data/api'

import * as Styled from './style'
import { doDataCheck } from './api'

export default () => {
    const [formState, setFormState] = useState({ query: false, message: '' })
    const navigate = useNavigate()

    const [idInstance, setIdInstance] = useState('')
    const [apiTokenInstance, setApiTokenInstance] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const doLogIn = async () => {
        localStorage.clear()

        const data = { idInstance, apiTokenInstance, phoneNumber }

        const isInstanceValid =
            idInstance.match(/[0-9]{10}/)?.index === 0 &&
            idInstance.toString().length === 10
        if (!isInstanceValid) {
            return setFormState({ message: 'Формат данных аккаунта не верен' })
        }

        const isPhoneValid =
            phoneNumber.match(/[7]{1}[0-9]{10}/)?.index === 0 &&
            phoneNumber.toString().length === 11
        if (!isPhoneValid) {
            return setFormState({ message: 'Формат телефона не верен' })
        }

        const error = await doDataCheck(data)
        if (error) {
            setFormState({ message: error })
        } else {
            for (const key in data) localStorage.setItem(key, data[key])
            navigate(`/chat`)
        }
    }

    useEffect(() => {
        if (formState.query) {
            doLogIn()
        }
    }, [formState])

    return (
        <Styled.Wrapper>
            <Styled.Form>
                <h1>Авторизация</h1>
                <h2>
                    Введите свои учетные данные из системы GREEN-API (
                    <a href={DOMAIN}>{DOMAIN}</a>)
                    <br /> и номер телефона собеседника
                </h2>
                <Styled.Item>
                    <h3>Уникальный номер аккаунта:</h3>
                    <Styled.Input
                        type="number"
                        value={idInstance}
                        onChange={(e) => setIdInstance(e.target.value)}
                    />
                </Styled.Item>
                <Styled.Item>
                    <h3>Ключ доступа аккаунта:</h3>
                    <Styled.Input
                        type="text"
                        value={apiTokenInstance}
                        onChange={(e) => setApiTokenInstance(e.target.value)}
                    />
                </Styled.Item>

                <Styled.Item>
                    <h3>Номер телефона собеседника:</h3>
                    <Styled.Input
                        type="number"
                        placeholder="7-XXX-XXX-XX-XX"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </Styled.Item>
                <h3>
                    (
                    <a href={SENDING_FEATURES_URL}>
                        номера РФ должны иметь код страны 7
                    </a>
                    )
                </h3>

                <Styled.Button
                    onClick={() =>
                        setFormState({
                            query: true,
                            message: 'Проверка данных...',
                        })
                    }
                    disabled={formState.query}
                >
                    Открыть чат
                </Styled.Button>
                <p>{formState.message}</p>
            </Styled.Form>
        </Styled.Wrapper>
    )
}
