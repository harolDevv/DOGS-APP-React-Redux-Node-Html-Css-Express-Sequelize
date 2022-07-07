import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";
import axios from 'axios';
// - Nombre
// - Altura (Diferenciar entre altura mínima y máxima)
// - Peso (Diferenciar entre peso mínimo y máximo)
// - Años de vida
// - [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
// - [ ] Botón/Opción para crear una nueva raza de perro
let contador = 1;
const CreateProduct = () => {
    const [index, setindex] = useState([]);
    let [temperamentos, settemperamentos] = useState([])
    const [arrayTemperamentos, setarrayTemperamentos] = useState([])

    const [inputText, setinputText] = useState('')
    const [minHeight, setminHeight] = useState('')            
    const [maxHeight, setmaxHeight] = useState('')            
    const [minWeight, setminWeight] = useState('')            
    const [maxWeight, setmaxWeight] = useState('')            
    const [years, setyears] = useState('')            
    
    useEffect(() => {
        ObtenerTempermamentos()
    }, [])

    const ObtenerTempermamentos = async() => {
        const {data} = await axios.get('http://localhost:3001/temperaments')
        setarrayTemperamentos(data)
    }
    
    //obtener temperamnetos
    
  return (
    <div className='Form-container'>
        <div className="button-container">
            <Link to="/Home" className='button'>
                <FiArrowLeft /> 
            </Link>
        </div>
        <form onSubmit={e => {
                let obj = {
                    id: `Dog${contador}`,
                    name:e.target.name.value,
                    height : {
                        imperial : `${e.target.minheight.value} - ${e.target.maxheight.value}`
                    },
                    weight : {
                        imperial : `${e.target.minweight.value} - ${e.target.maxweight.value}`
                    },
                    life_span: `${e.target.years.value} years`,
                    idTemperament: index,
                    image:{
                        url:'https://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg',
                    }
                }
                contador++
                e.preventDefault();
                console.log(obj);
                axios.post('http://localhost:3001/dogs', obj)
                alert('Congratulations, your breed was successfully created <3') 
            }
        }>
            {
                inputText.length === 0  ?
                <span className='error-ob'>Campo Obligatorio &otimes;</span> : null
            }
            <div className='input-container'>
                <label htmlFor="">Name:</label> 
                <input 
                key='name' 
                type="text" 
                name="name" 
                id="" 
                placeholder='Dog Name'
                autoComplete='off'
                onChange={e => {
                    setinputText(e.target.value)
                }}
                />
            </div>
            {
                inputText.length < 2 ?
                <span className='error'>El nombre debe tener al menos 2 caracteres &otimes;</span> : null
            }
            {
                minHeight.length === 0  ?
                <span className='error-ob'>Campo Obligatorio &otimes;</span> : null
            }
            <div className='input-container'>
                <label htmlFor="">Min height:</label>
                <input 
                key='minheight' 
                type="number" 
                name="minheight" 
                id=""  
                placeholder='dog min height'
                onChange={e => {
                    setminHeight(e.target.value)
                }}
                />
            </div>
            {
                maxHeight.length === 0  ?
                <span className='error-ob'>Campo Obligatorio &otimes;</span> : null
            }
            <div className='input-container'>
                <label htmlFor="">Max height:</label>
                <input 
                key='maxheight' 
                type="number" 
                name="maxheight" 
                id=""  
                placeholder='dog max height'
                onChange={e => {
                    setmaxHeight(e.target.value)
                }}
                />
            </div>

            {
                minWeight.length === 0  ?
                <span className='error-ob'>Campo Obligatorio &otimes;</span> : null
            }
            <div className='input-container'>
                <label htmlFor="">Min weight:</label>
                <input 
                key='minweight' 
                type="number" 
                name="minweight" 
                id=""  
                placeholder='dog min weight'
                onChange={e => {
                    setminWeight(e.target.value)
                }}
                />
            </div>
            
            {
                maxWeight.length === 0  ?
                <span className='error-ob'>Campo Obligatorio &otimes;</span> : null
            }
            <div className='input-container'>
                <label htmlFor="">Max weight:</label>
                <input 
                key='maxweight' 
                type="number" 
                name="maxweight" 
                id=""  
                placeholder='dog max weight'
                onChange={e => {
                    setmaxWeight(e.target.value)
                }}
                />
            </div>

            {
                years.length === 0  ?
                <span className='error-ob'>Campo Obligatorio &otimes;</span> : null
            }
            <div className='input-container'>
                <label htmlFor="">years of life:</label>
                <input 
                key='years' 
                type="number" 
                name="years" 
                id="" 
                placeholder='maximum years of the dog' 
                onChange={e => {
                    setyears(e.target.value)
                }}
                />
            </div>
            {
                temperamentos.length === 0 ? 
                <span className='error-ob'>Campo Obligatorio &otimes;</span> : null
            }
            <div className='input-container'>
                <label htmlFor="">Select Temperaments</label>
                <select name="" id="" onChange={e => {
                    settemperamentos([...temperamentos, e.target.value])
                    setindex([...index, (arrayTemperamentos.indexOf(e.target.value) + 1)])
                }}>
                    {
                        arrayTemperamentos.map( (e, index) => (
                            
                            <option value={e} key={e} id={index+1}>
                                {e}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className='input-container'>
                <p>
                    {
                        temperamentos.map(e => (
                            <span className='temperaments-span'>{e}</span>
                            ))
                    }
                </p>
            </div>
            <div className='button-grid input-container'>
                    <input type="submit" value="Create Dog >" 
                    disabled={
                        minHeight.length === 0
                        ||
                        maxHeight.length === 0
                        ||
                        maxWeight.length === 0 
                        ||
                        minWeight.length === 0
                        ||
                        inputText.length === 0 
                        ||
                        years.length === 0
                        ||
                        temperamentos.length === 0
                    } 
                    />
            </div>
        </form>
    </div>
  )
}

export default CreateProduct