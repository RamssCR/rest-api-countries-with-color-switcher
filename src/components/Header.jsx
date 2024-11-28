import { useContext } from 'react'
import { countryContext } from '../context/CountryContext'
import ButtonSwitcher from './ButtonSwitcher'

function Header() {
    const { theme } = useContext(countryContext)

    return (
        <header className="main-header" style={{ backgroundColor: theme.componentBackground, boxShadow: `0 0.15em 0.8em ${theme.shadowColor}` }}>
            <h2 className="main-header__title">Where in the world?</h2>
            <ButtonSwitcher />
        </header>
    )
}

export default Header