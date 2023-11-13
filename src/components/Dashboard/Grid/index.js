import React from 'react'
import './style.css'
import TrendingUpRounded from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRounded from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';

function Grid({ coins }) {
    return (
        <Link to={`/coin/${coins.id}`}>
            <div className={coins.price_change_percentage_24h.toFixed(2) > 0 ? 'grid_box up' : ' grid_box down'}>
                <div className='info_main'>
                    <img src={coins.image} alt="#" className='coin_logo' />
                    <div className='name_col'>
                        <p className='coin_symbol'>{coins.symbol}</p>
                        <p className='coin_name'>{coins.name}</p>
                    </div>
                </div>
                {
                    coins.price_change_percentage_24h.toFixed(2) > 0 ?
                        <div className='coin_price'>

                            <div className='coin_price_24'>{coins.price_change_percentage_24h.toFixed(2)}%  </div>
                            <div className='coin_trend_up'><TrendingUpRounded /> </div>
                        </div>
                        :
                        <div className='coin_price'>
                            <div className='coin_price_24 lower_price'> {coins.price_change_percentage_24h.toFixed(2)}%</div>
                            <div className='coin_trend_down'><TrendingDownRounded /> </div>
                        </div>
                }
                <div className='price_info'>
                    {coins.price_change_percentage_24h.toFixed(2) > 0 ?
                        <h3 className='price_up'>${coins.current_price.toLocaleString()}</h3> :
                        <h3 className='price_down'>${coins.current_price.toLocaleString()}</h3>
                    }
                    <p> Total Volume : {coins.total_volume.toLocaleString()}</p>
                    <p>Market cap : ${coins.market_cap.toLocaleString()}</p>
                </div>
            </div>
        </Link>
    )
}

export default Grid