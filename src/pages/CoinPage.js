

import List from '../components/Dashboard/List'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/common/Header'
import Loader from '../components/common/Loader'
import { coinObject } from '../functions/ConvertObjects'
import CoinInfo from '../components/Coin/CoinInfo/CoinInfo'
import { getCoinData } from '../functions/getCoinData'
import { getCoinPrices } from '../functions/getCoinPrices'
import ChartComponent from '../components/Coin/ChartComponent'
import { convertDate } from '../functions/convertDate'
import SelectDays from '../components/Coin/SelectDays'
import { settingChatData } from '../functions/settingChartData'
import PriceToggle from '../components/Coin/PriceToggle'

function CoinPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCOinData] = useState();
    const [days, setDays] = useState(30);
    const [chartData, setChartData] = useState({})
    const [priceType, setPriceType] = useState('price');
    const { id } = useParams()
    useEffect(() => {
        if (id) {
            getData()
        }
    }, [id])


    async function getData() {
        const data = await getCoinData(id)
        if (data) {
            coinObject(setCOinData, data)
        }
        const prices = await getCoinPrices(id, days)
        if (prices) {
            console.log("sdgdhjfgdjhfgdfhj")
            setChartData({
                labels: prices.map((data) => convertDate(data[0])),
                datasets: [
                    {
                        data: prices.map((data) => data[1]),
                        borderColor: "#3a80e9",
                        borderWidth: 2,
                        fill: true,
                        tension: 0,
                        backgroundColor: prices ? "transparent" : "rgba(58,128,233,0.1)",
                        pointRadius: 0
                    }
                ]
            })
            setIsLoading(false)
        }
    }

    const handleChange = async (event) => {
        setIsLoading(true)
        setDays(event.target.value);
        const prices = await getCoinPrices(id, event.target.value)
        if (prices) {
            console.log("sdgdhjfgdjhfgdfhj")
            settingChatData(setChartData, prices)
            setIsLoading(false)
        }

    };



     
    const handlePriceToggle= (event,newType)=>{
        console.log(newType)
        setPriceType(newType)

      
    }

    return (
        <div>

            <Header />

            {
                isLoading ? <Loader /> : (
                    <>
                        <div className="wrapper">
                            <List coins={coinData} />

                        </div>
                        <div className="wrapper">
                            <SelectDays handleChange={handleChange} days={days} />
                            <PriceToggle handlePriceToggle={handlePriceToggle} priceType={priceType}/>
                            <ChartComponent chartData={chartData} />
                        </div>
                        <CoinInfo heading={coinData.name} desc={coinData.desc} />
                    </>
                )
            }
        </div>
    )
}

export default CoinPage