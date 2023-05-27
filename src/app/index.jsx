import React, { useState } from 'react'
import { Provider } from 'react-redux'
import store from 'data'

import GlobalStyle from './styles/global'
import { Wrapper } from './styles'

import SearchBar from './SearchBar'
import SortPanel from './SortPanel'
import SearchResult from './SearchResult'

export default () => {
    const reqLogin = useState('')
    const sorting = useState({ on: false, ascending: true })

    const contextValue = { reqLogin, sorting }
    for (const [key, value] of Object.entries(contextValue))
        contextValue[key] = { state: value[0], setState: value[1] }

    return (
        <Provider store={store}>
            <appContext.Provider value={contextValue}>
                <SearchInterface />
                <GlobalStyle />
            </appContext.Provider>
        </Provider>
    )
}

const SearchInterface = () => {
    return (
        <Wrapper>
            <h1>
                Интерфейс поиска пользователей <i>github.com</i>
            </h1>
            <SearchBar />
            <SortPanel />
            <SearchResult />
        </Wrapper>
    )
}

export const appContext = React.createContext()
