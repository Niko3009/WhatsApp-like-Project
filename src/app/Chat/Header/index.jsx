import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { IconContext } from 'react-icons'
import { BsArrowLeft as Arrow } from 'react-icons/bs'

import * as Styled from './style'
import { useGetContactInfo } from './hooks'

export default ({ chatData }) => {
    const navigate = useNavigate()

    const data = {
        contact: { avatar: '/img/avatar_mock.jpg', name: chatData.phoneNumber },
    }
    for (const [key, keyItem] of Object.entries(data)) {
        data[key] = { initValue: data[key] }
        ;[data[key].value, data[key].setValue] = useState(keyItem)
    }

    useEffect(() => {
        useGetContactInfo(data.contact.setValue, chatData)
    }, [])
    return (
        <IconContext.Provider value={{ color: 'grey', size: '100%' }}>
            <Styled.Wrapper>
                <Styled.ContactInfo>
                    <Styled.Avatar>
                        <img src={data.contact.value.avatar} />
                    </Styled.Avatar>
                    <h1>{data.contact.value.name}</h1>
                </Styled.ContactInfo>

                <Styled.ExitButton>
                    <button onClick={() => navigate(`/`)}>
                        <Arrow />
                    </button>
                    <p>выйти из чата</p>
                </Styled.ExitButton>
            </Styled.Wrapper>
        </IconContext.Provider>
    )
}
