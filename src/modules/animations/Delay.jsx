import { useState, useEffect } from 'react'

export default ({ children, delay = 500 }) => {
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true)
        }, delay)
        return () => clearTimeout(timer)
    }, [delay])

    return isShown ? children : null
}
