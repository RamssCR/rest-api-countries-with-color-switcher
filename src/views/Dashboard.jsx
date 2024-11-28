import { useContext } from 'react'
import { countryContext } from '../context/CountryContext'
import CountryCard from '../components/CountryCard'
import Search from '../components/Search'
import Filter from '../components/Filter'

function Dashboard() {
    const { countries } = useContext(countryContext)

    return (
        <>
            <section className="filters-container">
                <Search />
                <Filter />
            </section>
            <section className="countries-container">
                {countries && countries.map((country, index) => {
                    return (<CountryCard
                            key={index}
                            flag={country.flag}
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            code={country.alpha3Code}
                        />
                    )
                })}
            </section>
        </>
    )
}

export default Dashboard