import { useContext, useEffect } from 'react'
import { useThemeSwitcher } from '../hooks/useThemeSwitcher'
import moon from '../assets/icons/moon-regular.svg'
import sun from '../assets/icons/sun-regular.svg'
import { countryContext } from '../context/CountryContext'

function ButtonSwitcher() {
    const { setTheme, theme } = useContext(countryContext)
    const [themeSwitcher, setThemeSwitcher] = useThemeSwitcher()

    document.body.style.backgroundColor = theme.bodyBackground
    document.body.style.color = theme.textColor

    useEffect(() => {
        setTheme(themeSwitcher ? ({
            bodyBackground: '#202c37',
            componentBackground: '#2b3945',
            flagBackground: '#858585',
            shadowColor: '#00000066',
            textColor: '#ffffff'
        }) : ({
            bodyBackground: '#fafafa',
            componentBackground: '#ffffff',
            flagBackground: '#858585',
            shadowColor: '#BFBFBF33',
            textColor: '#111517'
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeSwitcher])

    return (
        <article className="theme-switcher-container" onClick={() => setThemeSwitcher(themeSwitcher ? false : true)}>
            <img src={themeSwitcher ? sun : moon} alt="Dark Mode" className="theme-icon" />
            <button style={{color: theme.textColor}} className="theme-switcher__btn" >{themeSwitcher ? 'Light Mode' : 'Dark Mode'}</button>
        </article>
    )
}

export default ButtonSwitcher