import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'
import * as Styled from './styles'

import Routes from './routes'

export default () => {
    return (
        <BrowserRouter>
            <Interface />
            <GlobalStyle />
        </BrowserRouter>
    )
}

const Interface = () => {
    return (
        <Styled.Wrapper>
            <Routes />
        </Styled.Wrapper>
    )
}
