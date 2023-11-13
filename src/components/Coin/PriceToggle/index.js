import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useState} from 'react'
import './style.css'

export default function PriceToggle({priceType,handlePriceToggle}) {
  
    return (
       <div className="toggle_price">
        <ToggleButtonGroup
            value={priceType}
            exclusive
            onChange={handlePriceToggle}
             sx={{
          "&.Mui-selected": {
            color: "var(--blue)",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue)",
          },
        }}
        >
            <ToggleButton value="price" >
                Price
            </ToggleButton>
            <ToggleButton value="market_cap" >
                Market Cap
            </ToggleButton>
            <ToggleButton value="total_volume" >
                Total Volume
            </ToggleButton>

        </ToggleButtonGroup>
       </div>

    );
}