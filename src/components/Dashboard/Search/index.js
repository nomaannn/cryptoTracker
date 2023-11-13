import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './style.css'

function Search({ search, onChangeSearch }) {

    return (
        <div className='search-flex'>

            <SearchRoundedIcon />
            <input type='text' onChange={(e) => onChangeSearch(e)} value={search} placeholder='Search' />

        </div>
    )
}

export default Search