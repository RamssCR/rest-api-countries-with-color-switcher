import { useContext } from 'react'
import { countryContext } from '../context/CountryContext'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function ButtonLink({ name = '' }) {
    const { theme } = useContext(countryContext)
    return (
        <Link 
            to={`/${name}`} 
            className="btn-link" 
            style={{backgroundColor: theme.componentBackground, color: theme.textColor, boxShadow: `0 0 0.5em ${theme.shadowColor}`}}
        >
            {!name ? '← Back' : name}
        </Link>
    )
}

export default ButtonLink;