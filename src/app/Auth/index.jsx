import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { DOMAIN, SENDING_FEATURES_URL } from 'data/api'

import * as Styled from './style'
import { useLogIn } from './hooks'

export default () => {
    const [formState, setFormState] = useState({ query: false, message: '' })
    const navigate = useNavigate()

    const data = { idInstance: '', apiTokenInstance: '', phoneNumber: '' }
    for (const [key, keyItem] of Object.entries(data)) {
        data[key] = { initValue: data[key] }
        ;[data[key].value, data[key].setValue] = useState(keyItem)
    }

    const useSuccessCall = () => navigate(`/chat`)
    const useErrorCall = (error) => setFormState({ message: error })

    useEffect(() => {
        if (formState.query) useLogIn(data, useSuccessCall, useErrorCall)

        let id = window.setTimeout(function () {}, 0)
        while (id--) window.clearTimeout(id)
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
                        value={data.idInstance.value}
                        onChange={(e) =>
                            data.idInstance.setValue(e.target.value)
                        }
                    />
                </Styled.Item>
                <Styled.Item>
                    <h3>Уникальный номер аккаунта:</h3>
                    <Styled.Input
                        type="text"
                        value={data.apiTokenInstance.value}
                        onChange={(e) =>
                            data.apiTokenInstance.setValue(e.target.value)
                        }
                    />
                </Styled.Item>

                <Styled.Item>
                    <h3>Номер телефона собеседника:</h3>
                    <Styled.Input
                        type="number"
                        placeholder="7-XXX-XXX-XX-XX"
                        value={data.phoneNumber.value}
                        onChange={(e) =>
                            data.phoneNumber.setValue(e.target.value)
                        }
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
