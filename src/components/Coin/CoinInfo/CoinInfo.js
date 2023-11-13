import React, { useState } from 'react'
import './style.css'

function CoinInfo({ heading, desc }) {
    const shortDesc = desc.slice(0, 300) + " <span>Read more</span>"
    const longDesc = desc + " <span>Read less</span>"
    const [flag, setFlag] = useState(false)



    return (
        <div className='wrapper'>
            <h2 className='coin_info_head' >{heading}</h2>
            <p className='coin_info_desc'
                dangerouslySetInnerHTML={{ __html: flag ? shortDesc : longDesc }}
                onClick={() => setFlag(!flag)}

            />
        </div>
    )
}

export default CoinInfo