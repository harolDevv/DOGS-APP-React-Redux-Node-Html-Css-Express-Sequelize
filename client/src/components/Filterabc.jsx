import React, { useState } from 'react'

const Filterabc = ({character, setCharacter}) => {
    const array = [...character]


    const[boton, setBoton] = useState('A-Z')
    let [order, setorder] = useState()

    const reverse =() => {
      setorder(order = array.reverse())
    }
    
    const botonReverse = async() =>{
      let str = boton.split('').reverse().join('')
      setBoton(str)
      reverse()
      setCharacter(order)
    }
    

  return (
    <div className='select-breed'>
        <p>ORDER  ALPHABETICAL:</p>
        <button onClick={botonReverse}>{boton}</button>
    </div>
  )
}

export default Filterabc