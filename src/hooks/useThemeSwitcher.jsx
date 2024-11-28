import { useState, useEffect } from 'react'

export function useThemeSwitcher() {
    const [themeSwitcher, setThemeSwitcher] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme ? savedTheme : false
    })

    useEffect(() => localStorage.setItem('theme', themeSwitcher), [themeSwitcher])
    return [themeSwitcher, setThemeSwitcher]
}
