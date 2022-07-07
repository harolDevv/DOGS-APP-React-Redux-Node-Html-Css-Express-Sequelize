import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";
import Select from './Select';
import Tempfilter from './Tempfilter';
import Cards from './Cards';
import Filterabc from './Filterabc';
import FilterWe from './FilterWe';
import SearchBar from './SearchBar';
import axios from 'axios';



//redux

import { useDispatch, useSelector } from 'react-redux'
import {getAllDogs, VaciarSelects} from '../redux/actions/DogsActions'

const Home =  () => {
  
  const dispatch = useDispatch();

  useEffect( ()=> {
    //obtener todas las razas de perros
    dispatch(getAllDogs())
    //eslint-disable-next-line
}, []);

const vaciarSelect = () => {
  dispatch(VaciarSelects())
  setCharacter(dogsRedux)
}
  
  //OBTENER EL STATE DE LA STORE
  const dogsRedux = useSelector(state => state.DogsReducers.data);
  const dogsSelect = useSelector(state => state.DogsReducers.selectDog)
  const dogsTemperament = useSelector(state => state.DogsReducers.temperamentDog)



  const [character, setCharacter] = useState([])
  const [characterSearch, setCharacterSearch] = useState('')


  const getCharacter = useCallback(async() => {
    if (characterSearch !== '') {
      await axios.get(`http://localhost:3001/dogs?name=${characterSearch}`)
        .then(({data}) => {  console.log('data',data);  setCharacter(data)} )
    } else {
      
      await axios.get(`http://localhost:3001/dogs`).then(({data}) =>   setCharacter(data))
    }
    
  }, [characterSearch]);

  
  useEffect(()=> {
    getCharacter()
  }, [getCharacter])

  return (
    <div className='Home'>

      <div className="buttons-container">
        <Link to="/" className='button'>
            <FiArrowLeft />
        </Link>
        <button className='boton' onClick={()=> vaciarSelect()}>
          Get all breeds
        </button>
        <Link to="/create" className='button'>
          Add Breed &#43;
        </Link>
      </div>
        <div className="form_home">
          
            <Select cards={dogsRedux}/>

            <div className="input-content">
              <SearchBar character setCards={setCharacterSearch}/>
            </div>

            <div>
            <Tempfilter character={character} setCards={setCharacter}/>
            </div>

            <FilterWe character={character} setCharacter={setCharacter}/>
            <Filterabc character={character} setCharacter={setCharacter}/>
        </div>
        
      <div className="home-content">

          <div className="cards-container">
            <Cards character={character} dogsSelect={dogsSelect} dogsTemperament={dogsTemperament} /> 
          </div>

      </div>
    </div>
  )
}

export default Home