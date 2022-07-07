import React, {useState, useEffect} from 'react'
import { BiTargetLock } from 'react-icons/bi';
import getBreeds from '../helpers/getBreeds';
import { useDispatch, useSelector } from 'react-redux'
import * as DogActions from '../redux/actions/DogsActions'

const Select = (dogs) => {
    const dispatch = useDispatch()
    
    const [breeds,setBreeds] = useState([]);
    const [value, setvalue] = useState('')

    useEffect(()=> {
        updateBreeds()
    }, []); // solo se renderiza en la primera carga
    
    const updateBreeds = () => {
        getBreeds()
            .then((breedsList) => {
                setBreeds(breedsList)
            })
    };

    const selectEvent = (e) => {
        dispatch(DogActions.SelectProducts(e))
    }
    
  return (
    <div className='select-breed'>
        <p>FILTER BY BREED:</p>
        <select  name="Breeds" id="" onChange={(event)=>selectEvent(event.target.value)}>
            {
            
                breeds.map(e => (
                    <option value={e.name} key={e.id}>{e.name}</option>
                ))
                
            }
        </select>
    </div>
    
  )
}

export default Select