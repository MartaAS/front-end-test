import React from 'react'
import { Link } from 'react-router-dom'
export const ProductCard = ({
  id,
  model,
  price,
  brand,
  imgUrl
}) => {
  return (
    <div>

      <img src={imgUrl} alt={id} />

      <h5 className='card-title'> {id} </h5>
      <p className='card-text'> {model}</p>
      <p className='card-text'> {price}</p>
      <p className='card-text'> {brand}</p>
      <Link to={`./product/${id}`}>
        Mas...
      </Link>

    </div>
  )
}
