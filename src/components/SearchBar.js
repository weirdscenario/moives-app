import React from 'react'
import { useState } from 'react'

const SearchBar = (props) => {
  const [query,setQuery]= useState('')
  const handlequery = (event)=>{
    
    props.onChange(event.target.value)
  }
  console.log(props.onChange)
  
  
  return (

    <div>
      <input onChange={handlequery} placeholder='search by rating or by title'/>
      
    </div>
  )
}

export default SearchBar
