import * as Styled from './styles'

export default ({ children, error }) => {
    if (error) return <Error error={children} />
    return <Message>{children}</Message>
}

const Message = Styled.Message
const Error = ({ error }) => {
    const { status } = error
    let message = error.data?.message || error.error
    if (status === 'FETCH_ERROR') message = 'ошибка сети'
    return (
        <Message>
            {`Error #${status}:`} <br /> {message}
        </Message>
    )
}
