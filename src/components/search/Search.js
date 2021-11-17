import React from 'react'

export const Search = ({ setFilter }) => {
  const handleSearch = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <input
        onKeyPress={handleSearch}
        type='text'
        placeholder='Busca'
        className='form-control'
        name='searchText'
        onChange={handleSearch}
        autoComplete='off'
      />
    </div>
  )
}
