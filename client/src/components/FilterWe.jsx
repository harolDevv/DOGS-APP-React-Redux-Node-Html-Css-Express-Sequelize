import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FilterWe = ({character,setCharacter}) => {
    const [state, setstate] = useState('')
    const [state2 , setstate2] = useState('') 
  useEffect(() => {
    result()
    result2()
  }, [])

  const result2 = async() => {
    const {data} = await axios.get('http://localhost:3001/order2')
    setstate2(data)
  }

    const max = async() => {
    setCharacter(state2)
  }
  
    const result = async() => {
      const {data} = await axios.get('http://localhost:3001/order')
        setstate(data)
    }
    const minor = () =>{
        setCharacter(state)
    }


  return (
    <div className='select-breed'>
    <p>FILTER  WEIGHT:</p>

    <select  name="abc" id="">
        <option value="Des" onClick={max}>major to minor</option>
        <option value="Asc" onClick={minor}>minor to major</option>
    </select>
</div>
  )
}

export default FilterWe