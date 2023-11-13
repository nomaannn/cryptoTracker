import TrendingDownRounded from '@mui/icons-material/TrendingDownRounded'
import TrendingUpRounded from '@mui/icons-material/TrendingUpRounded'
import React from 'react'
import './style.css'
import { Tooltip } from '@mui/material'
import { convertNumber } from '../../../functions/convertNumbers'
import { Link } from 'react-router-dom'

function List({ coins }) {
    return (
        <Link to={`/coin/${coins.id}`}>
            <tr className='list_container'>
                <Tooltip title="Logo">
                    <td className='info_main'>
                        <img src={coins.image} alt="#" className='coin_logo' />
                    </td>
                </Tooltip>
                <td>
                    <div className='name_col'>
                        <p className='coin_symbol'>{coins.symbol}</p>
                        <p className='coin_name'>{coins.name}</p>
                    </div>
                </td>
                {
                    coins.price_change_percentage_24h.toFixed(2) > 0 ?
                        <Tooltip title="Up price">
                            <td className='coin_price'>

                                <div className='coin_price_24'>{coins.price_change_percentage_24h.toFixed(2)}%  </div>
                                <div className='coin_trend_up icons'><TrendingUpRounded /> </div>
                            </td>
                        </Tooltip>
                        :
                        <Tooltip title="Down Price">
                            <td className='coin_price'>
                                <div className='coin_price_24 lower_price'>{coins.price_change_percentage_24h.toFixed(2)}%</div>
                                <div className='coin_trend_down icons'><TrendingDownRounded /> </div>
                            </td>
                        </Tooltip>
                }
                <Tooltip title="Current Price">
                    <td className='td_center'>
                        {coins.price_change_percentage_24h.toFixed(2) > 0 ?
                            <h3 className='price_up'>${coins.current_price.toLocaleString()}</h3> :
                            <h3 className='price_down'>${coins.current_price.toLocaleString()}</h3>
                        }
                    </td>
                </Tooltip>
                <Tooltip title="Total Volume">
                    <td className='td_right'>
                        <p>{coins.total_volume.toLocaleString()}</p>
                    </td>
                </Tooltip>
                <Tooltip title="Market Cap ">
                    <td className='td_right desktop'>
                        <p> ${coins.market_cap.toLocaleString()}</p>
                    </td>
                </Tooltip>


                <Tooltip title="Market Cap">
                    <td className='td_right mobile'>
                        <p> ${convertNumber(coins.market_cap)}</p>
                    </td>
                </Tooltip>
            </tr >
        </Link >
    )
}

export default List