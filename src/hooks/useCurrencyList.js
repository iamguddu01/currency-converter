import { useEffect, useState } from "react"

function useCurrencyList(){
    const [currencies, setCurrencies] = useState([])
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
        .then((res) => res.json())
        .then((res) => {
            if(res && typeof res === 'object') {
                setCurrencies(Object.keys(res))
            }
        })
        .catch((error) => {
            console.error("Error fetching currency list:", error)
        })
    }, [])
    return currencies;
}
export default useCurrencyList;

