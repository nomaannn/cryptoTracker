import axios from "axios"

export const getCoinPrices = (id, days,priceType) => {
    const prices = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
        .then((response) => {
            console.log(response.data)
            return response.data.prices
        }
        )
        .catch((err) => {
            console.log(err)
        })
    return prices
}