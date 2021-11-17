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

  return (
    <div>
      <Search />
      {
        data?.map(item => (
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
