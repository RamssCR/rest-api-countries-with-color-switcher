import { useContext } from "react"
import { countryContext } from "../context/CountryContext"

function Filter() {
    const { filterByContinent, theme } = useContext(countryContext)

    return (
        <article className="selector-container" style={{ backgroundColor: theme.componentBackground, boxShadow: `0 0 0.8em ${theme.shadowColor}` }}>
            <select 
                className="country-filter" 
                onInput={(e) => filterByContinent(e.target.value)}
                style={{ border: 'none', color: theme.textColor }}
            >
                <option style={{ color: '#000' }} value="">Filter by Region</option>
                <option style={{ color: '#000' }} value="Africa">Africa</option>
                <option style={{ color: '#000' }} value="Americas">Americas</option>
                <option style={{ color: '#000' }} value="Asia">Asia</option>
                <option style={{ color: '#000' }} value="Europe">Europe</option>
                <option style={{ color: '#000' }} value="Oceania">Oceania</option>
            </select>
        </article>
    );
}

export default Filter;