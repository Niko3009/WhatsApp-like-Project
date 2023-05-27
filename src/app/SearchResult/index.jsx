import React, { useContext, useState, useMemo } from 'react'

import Delay from 'modules/animations/Delay'
import { useGetUsersQuery } from 'data/api'
import { appContext } from 'app'

import * as Styled from './styles'

import Pagination from './Pagination'
import UserItem from './UserItem'
import Message from './Message'

export default () => {
    const { reqLogin } = useContext(appContext)

    if (reqLogin.state) return <ResultDataBox />
    else return <Message>введите запрос для получения данных</Message>
}

const ResultDataBox = () => {
    const { reqLogin, sorting } = useContext(appContext)
    const [pageNum, setPageNum] = useState(1)
    const itemPerPage = 10

    const response = useGetUsersQuery({ reqLogin, sorting, pageNum })
    const { data, currentData, isLoading, error } = response

    if (isLoading && !data) return <Message>поиск...</Message>
    if (error) return <Message error>{error}</Message>
    if (!data.items.length) return <Message>ничего не найдено</Message>

    const resultCount = data['total_count']
    const setting = { setPageNum, pageNum, itemPerPage, resultCount }

    return (
        <Styled.Wrapper>
            <Pagination setting={setting} />
            <List items={data.items} />
            <Pagination setting={setting} />
        </Styled.Wrapper>
    )
}

const List = ({ items }) => {
    return (
        <Styled.List>
            {items.map((item, i) => (
                <Delay delay={i * 50} key={item.id}>
                    <UserItem data={item} />
                </Delay>
            ))}
        </Styled.List>
    )
}
