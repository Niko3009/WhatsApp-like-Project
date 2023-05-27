import React, { useState, useMemo } from 'react'

import { MdOutlineKeyboardDoubleArrowUp as ArrowUp } from 'react-icons/md'
import { IconContext } from 'react-icons'
import * as Styled from './styles'

import PropItem from './PropItem'

export default ({ data }) => {
    const [detailsDisplay, setDisplay] = useState(false)
    return (
        <IconContext.Provider value={{ size: '32px' }}>
            <Styled.Item
                activity={detailsDisplay}
                onClick={() => {
                    if (!detailsDisplay) setDisplay(true)
                }}
            >
                <Main data={data} />
                <Details data={data} />

                <button onClick={() => setDisplay(false)}>
                    <ArrowUp />
                </button>
            </Styled.Item>
        </IconContext.Provider>
    )
}

const Main = ({ data }) => {
    const { login, id } = data
    return (
        <Styled.Main>
            <img src={data.avatar_url} alt="" />
            <div>
                <h1>{login}</h1>
                <h1>{`ID: ${id}`}</h1>
            </div>
        </Styled.Main>
    )
}

const Details = ({ data }) => {
    const propItems = useMemo(
        () =>
            Object.keys(data).map((prop) => (
                <PropItem key={prop} prop={prop} value={data[prop]} />
            )),
        [data]
    )
    return <Styled.Details>{propItems}</Styled.Details>
}
