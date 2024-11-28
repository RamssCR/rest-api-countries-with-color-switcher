import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { countryContext } from '../context/CountryContext'
import { separatedByDots } from '../utils/numberPoint'

// eslint-disable-next-line react/prop-types
function CountryCard({ flag, name, population, region, capital, code }) {
    const { theme } = useContext(countryContext)
    const dottedPopulation = separatedByDots(population)

    return (
        // eslint-disable-next-line react/prop-types
        <Link to={`/${code}`}>
            <article className="country-card" style={{boxShadow: `0 0 0.8em ${theme.shadowColor}`}}>
                <div className="country-flag-container" style={{backgroundImage: `url(${flag})`}}></div>
                <div 
                    className="country-info" 
                    style={{ backgroundColor: theme.componentBackground, color: theme.textColor }}
                >
                    <h3 className="country-name">{name}</h3>
                    <div className="country-info__details">
                        <span className="item"><span className="bold">Population: </span>{dottedPopulation}</span>
                        <span className="item"><span className="bold">Region: </span>{region}</span>
                        <span className="item"><span className="bold">Capital: </span>{capital}</span>
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default CountryCard