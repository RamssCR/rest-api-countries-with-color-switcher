import { useContext } from 'react'
import { countryContext } from '../context/CountryContext'
import magnifyingGlass from '../assets/icons/magnifying-glass-solid.svg'

function Search() {
    const { filterByCountry, theme } = useContext(countryContext)

    return (
        <article className="search-container" style={{ backgroundColor: theme.componentBackground, boxShadow: `0 0 0.8em ${theme.shadowColor}` }}>
            <div className="search-icon__container">
                <img src={magnifyingGlass} alt="search" />
            </div>
            <input 
                type="text" 
                id="searchBar" 
                className="searchBar" 
                placeholder="Search for a country..."
                autoComplete='off'
                style={{ color: theme.textColor }}
                onInput={(e) => filterByCountry(e.target.value)}
            />
        </article>
    )
}

export default Search