import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import AuthForm from './Auth'
import Chat from './Chat'

export default () => {
    return (
        <Routes>
            <Route path="/" element={<AuthForm />} />

            <Route element={<RouteProtector />}>
                <Route path="/chat" element={<Chat />} />
            </Route>

            <Route path="*" element={<Navigate to={'/'} replace />} />
        </Routes>
    )
}

const RouteProtector = ({ redirectPath = '/' }) => {
    const { idInstance, apiTokenInstance, phoneNumber } = localStorage
    const isAllowed = idInstance && apiTokenInstance && phoneNumber
    return isAllowed ? <Outlet /> : <Navigate to={redirectPath} replace />
}
