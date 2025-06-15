import React from 'react'

const Card = ({ item }) => {
  return (
    <div className='box shadow-lg rounded-lg cursor'>
      <div className='px-2'>
        <h1 className='h3 text-success'> {item.title}</h1>
        <span>{item.description} ...</span>
        <p className='font-weight-bold text-info'> {item.author}</p>
        <div>
          <div className='d-flex'>
            <p className=''>₹{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card