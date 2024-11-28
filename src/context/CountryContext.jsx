import { createContext, useState, useEffect } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const countryContext = createContext()

// eslint-disable-next-line react/prop-types
export function CountryContext({ children }) {
    const [countries, setCountries] = useState([])
    const [allCountries, setAllCountries] = useState([])
    const [country, setCountry] = useState({})

    const [theme, setTheme] = useState({
        bodyBackground: '#fafafa',
        componentBackground: '#ffffff',
        flagBackground: '#858585',
        shadowColor: '#BFBFBF33',
        textColor: '#111517'
    })

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('src/api/data.json')
                const data = await response.json()
                setAllCountries(data)
                setCountries(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchCountries()
    }, [])
    
    async function getCountry(code) {
        try {
            const response = await fetch('src/api/data.json')
            const data = await response.json()
            setCountry(data.find(foundCountry => foundCountry.alpha3Code === code))
        } catch (error) {
            console.error(error)
        }
    }

    function filterByCountry(input) {
        if (input.trim() === '') {
            setCountries(allCountries)
        } else {
            setCountries(allCountries.filter(foundCountry => foundCountry.name.toLowerCase().trim().includes(input.toLowerCase().trim())))
        }
    }

    function filterByContinent(input) {
        if (input.trim() === '') {
            setCountries(allCountries)
        } else {
            setCountries(allCountries.filter(foundCountry => foundCountry.region.toLowerCase() === input.toLowerCase()))
        }
    }

    return (
        <countryContext.Provider value={{
            countries,
            country,
            getCountry,
            filterByCountry,
            filterByContinent,
            setTheme,
            theme
        }}>
            {children}
        </countryContext.Provider>
    )
}