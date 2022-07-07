import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { temperamentDog } from '../redux/actions/DogsActions'
const Tempfilter =  ({character,setCards}) => {
 
  const dispatch = useDispatch()
  
    const [arrayTemperamentos, setarrayTemperamentos] = useState([])
    useEffect(() => {
        ObtenerTempermamentos()
    }, [])

    const ObtenerTempermamentos = async() => {
        const {data} = await axios.get('http://localhost:3001/temperaments')
        setarrayTemperamentos(data)
    }
      
 
      const dogTemp = (dog) => {
        dispatch(temperamentDog(dog))
      }

  return (
    <div className='Tempfilter'>
        <p>FILTER BY TEMPERAMENT: </p>
        <select onChange={(event)=> dogTemp(event.target.value)}>
            {
                arrayTemperamentos.map((e,index) => (
                <option value={e} key={index}>{e}</option>
              ))
            }
        </select>
    </div>
  )
}

export default Tempfilter