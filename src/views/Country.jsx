import { useContext, useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { countryContext } from '../context/CountryContext'
import { separatedByDots } from '../utils/numberPoint'
import ButtonLink from '../components/ButtonLink'

function Country() {
    const [borders, setBorders] = useState([])
    const { country, getCountry } = useContext(countryContext)
    const { code } = useParams()
    const navigateTo = useNavigate()

    if (!code) navigateTo('/')

    useEffect(() => {
        (async () => await getCountry(code))()
        setBorders(country.borders ? country.borders : [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [country])

    if (!country) navigateTo('/')
    const dottedPopulation = separatedByDots(country.population)
    

    // assigning >2nd level variables with useMemo()
    const domain = useMemo(() => country.topLevelDomain?.map(foundDomain => foundDomain).join(", "), [country])
    const currencies = useMemo(() => country?.currencies?.map(currency => currency.name).join(", "), [country])
    const languages = useMemo(() => country?.languages?.map(language => language.name).join(", "), [country])

    return (
        <section className="country-container">
            <ButtonLink />
            <article className="country-container__main">
                <img src={country.flag} alt={country.name} className="country-container__flag" />
                <article className="country-container__info">
                    <h2 className="country-container__country-title">{country.name}</h2>
                    <div className="country-container__details-container">
                        <div className="details-container__details">
                            <span className="details__title"><span className="bold">Native Name: </span>{country.nativeName}</span>
                            <span className="details__title"><span className="bold">Population: </span>{dottedPopulation}</span>
                            <span className="details__title"><span className="bold">Region: </span>{country.region}</span>
                            <span className="details__title"><span className="bold">Sub Region: </span>{country.subregion}</span>
                            <span className="details__title"><span className="bold">Capital: </span>{country.capital}</span>
                        </div>
                        <div className="details-container__details">
                            <span className="details__title"><span className="bold">Top Level Domain: </span>{domain}</span>
                            <span className="details__title"><span className="bold">Currencies: </span>{currencies}</span>
                            <span className="details__title"><span className="bold">Languages: </span>{languages}</span>
                        </div>
                    </div>
                    <div className="border-countries">
                        <h3 className="border-countries__title">Border Countries:</h3>
                        <div className="countries-list">
                            {borders.map((border, index) => <ButtonLink key={index} name={border} />)}
                        </div>
                    </div>
                </article>
            </article>
        </section>
        
    )
}

export default Country