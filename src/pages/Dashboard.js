import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/common/Header'
import TabComponent from '../components/Dashboard/TabComponent'
import Search from '../components/Dashboard/Search'
import PaginationComponent from '../components/Dashboard/PaginationComponent'
import Loader from '../components/common/Loader'
import BackToTop from '../components/common/BackToTop'


function Dashboard() {
  const [coins, setCoins] = useState([])
  const [paginatedcoins, setPaginatedcoins] = useState([])
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value)
    console.log("value---->" + value)
    let PreviousIndex = (value - 1) * 10
    console.log("PreviousIndex"+PreviousIndex)
    setPaginatedcoins(coins.slice(PreviousIndex, PreviousIndex + 10))
  }


  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value)
  }

  var filteredValue = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
    item.symbol.toLowerCase().includes(search.toLocaleLowerCase())

  )

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
      .then((response) => {
        // console.log(response)
        setPaginatedcoins(response.data.slice(0,10))
        console.log("first page----->"+coins.slice(0, 10))
        setCoins(response.data)
        setIsLoading(false)
      }).catch(err => console.log(err))
  }, [])
  return (
    <div>
      <Header />

      <BackToTop />


      {/* {

        isLoading ? (<Loader />) : ( */}
      {/* <div>
        <Search search={search} onChangeSearch={onChangeSearch} />
        <TabComponent coins={search ? filteredValue : paginatedcoins} />
        {
          !search && <PaginationComponent page={page} handleChange={handleChange} />
        }
      </div> */}
      {
        isLoading ? (<Loader />) : (
          <div>
            <Search search={search} onChangeSearch={onChangeSearch} />
            <TabComponent coins={search ? filteredValue : paginatedcoins} />
            {
              !search && <PaginationComponent page={page} handleChange={handlePageChange} />
            }
          </div>
        )
      }
      {/* )


      } */}

    </div>
  )
}

export default Dashboard