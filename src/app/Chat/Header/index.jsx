import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { IconContext } from 'react-icons'
import { BsArrowLeft as Arrow } from 'react-icons/bs'

import * as Styled from './style'
import { doGetContactInfo } from './api'

export default ({ idInstance, apiTokenInstance, phoneNumber }) => {
    const navigate = useNavigate()

    const [contact, setContact] = useState({
        avatar: '/img/avatar_mock.jpg',
        name: phoneNumber,
    })

    const doUpdateContactInfo = async () => {
        const data = await doGetContactInfo(
            idInstance,
            apiTokenInstance,
            phoneNumber
        )
        if (data.name) {
            setContact(data)
        }
    }

    useEffect(() => {
        doUpdateContactInfo()
    }, [])
    return (
        <IconContext.Provider value={{ color: 'grey', size: '100%' }}>
            <Styled.Wrapper>
                <Styled.ContactInfo>
                    <Styled.Avatar>
                        <img src={contact.avatar} />
                    </Styled.Avatar>
                    <h1>{contact.name}</h1>
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
