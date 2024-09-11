import React from 'react'
import loading from '../assets/loading.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
      <img style={{width:"100px"}} src={loading} alt='Loading...'></img>
    </div>
  )
}
