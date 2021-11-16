/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react'
import { getProducts } from '../helpers/getProducts'

export const ProductListScreen = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    getProducts().then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <div>
      {
        data?.map(item => {
          return (
            <pre key={item.id}>
              <p>{item.model}</p>
              <p>{item.price}</p>
              <p>{item.model}</p>
              <p>{item.brand}</p>
              <img src={item.imgUrl} />
            </pre>
          )
        })
      }
    </div>
  )
}
