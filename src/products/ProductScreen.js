
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../helpers/getProductById'

export const ProductScreen = ({ history }) => {
  console.log(history, 'history')
  const { productid } = useParams()

  const [data, setData] = useState(true)

  useEffect(() => {
    getProductsById(productid).then((response) => {
      setData(response.data)
      console.log(response.data, 'res data')
    })
  }, [])

  if (!data) {
    return <Redirect to='/' />
  }
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/')
    } else {
      history.goBack()
    }
  }

  return (
    <div>

      <img
        src={data?.imgUrl}
        alt={data?.model}
      />

      <h3> {data?.model} </h3>
      <ul>
        <li> <b> Id: </b> {data?.id} </li>
        <li> <b> Price: </b> {data?.price} </li>
        <li> <b> Brand: </b> {data?.brand} </li>
      </ul>
      <button
        onClick={handleReturn}
      >
        Regresar
      </button>
    </div>

  )
}
