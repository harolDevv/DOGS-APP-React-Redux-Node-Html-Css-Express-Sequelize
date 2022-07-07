import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = ({characterSearch, setCards}) => {
  return (
    <>
    <input  
    type="text" 
    value={characterSearch}
    name={characterSearch}
    placeholder='Search Breed...'
    onChange={(e)=> setCards(e.target.value)}
    /> 
    <button type='submit'><AiOutlineSearch/></button>
    </>
  )
}

export default SearchBar