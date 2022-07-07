import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";


const CardDetail = (props) => {
  
  const [dog, setdog] = useState('')

    useEffect(() => {
      obtenerDog()
    },[])
  
    const obtenerDog = async() => {
      const {data} = await axios.get(`http://localhost:3001/dogs/${props.match.params.dogName}`)
      console.log(data);
      setdog(data)
    }

  return (
    <div className='card-detail-container'>
          <div className="button-container">
                <Link to="/Home" className='button'>
                    <FiArrowLeft /> 
                </Link>
            </div>
              {
                dog ?
                <div className="cardDetail" key={dog.id}>
                <img src={dog.image.url} alt={dog.name}/>
                <div className="character">
                    <h2 className="name">{dog.name}</h2>
                    <p className="temperament">{dog.temperament}</p>
                    <p className="height">HEIGHT: {dog.height.imperial}</p>
                    <p className="weight">WEIGHT: {dog.weight.imperial}kg</p>
                    <p className="years">YEARS OF LIFE: {dog.life_span}</p>
                </div>
            </div> : <h1>Cargando...</h1>
              }
    </div>
  )
}

export default CardDetail