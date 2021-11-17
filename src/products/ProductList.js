import React, { useEffect, useState } from 'react'
import { Search } from '../components/search/Search'
import { getProducts } from '../helpers/getProducts'
import { ProductCard } from './ProductCard'
export const ProductList = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    getProducts().then((response) => {
      setData(response.data)
    })
  }, [])

  const [filter, setFilter] = useState('')

  const filterData = (product) => {
    const searchText = filter.toLowerCase()
    return product.model.toLowerCase().includes(searchText) || product.brand.toLowerCase().includes(searchText)
  }

  return (
    <div>
      <Search setFilter={setFilter} />
      {
        data?.filter(filterData).map(item => (
          <ProductCard
            key={item.id}
            {...item}
          />
        )
        )
      }
    </div>
  )
}
