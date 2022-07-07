import React, { useState } from 'react'
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";


const Paginacion = (pagina,setPagina,maximo) => {
    const [input, setinput] = useState(1)
    const nextPage = () => {
        setinput (input + 1);
        pagina.setPagina (pagina.pagina +1);
    }
    const prevPage = () => {
        setinput (input - 1);
        pagina.setPagina (pagina.pagina  - 1);
    }
    return (
    <div className='paginacion'>
        <button onClick={prevPage} disabled={input === 1}>
            <BiLeftArrow/>
        </button>
        <input type="text" name="page" autoComplete='off' value={input} />
        <p> DE {Math.round(pagina.maximo)}</p>
        <button onClick={nextPage} >
            <BiRightArrow/>
        </button>
    </div>
  )
}

export default Paginacion