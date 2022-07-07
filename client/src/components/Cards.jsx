import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import Paginacion from './Paginacion'
import Iftemperament from './Iftemperament';



//a;adir estilos para la propiedad disabled y escuchador de input
const Cards = ({character, dogsSelect,dogsTemperament}) => {
    console.log(character);
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(8)
    
    const maximo = character.length / porPagina;

    if (dogsSelect.length) {
        return <Iftemperament dogs={dogsSelect}/>
    }
    
    return (
        <>
    <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
    <div className="main-cards"> 
    {   
        dogsTemperament.length ? dogsTemperament?.slice(
            (pagina - 1) * porPagina,
            (pagina - 1) * porPagina + porPagina
        ).map(item =>(
            <Link className='link-dog' to={`dogs/${item.name}`}>
                <div className="card" key={item.id}>
                    <img src={item.image.url} alt={item.name}/>
                    <div className="character">
                        <h3 className="name">{item.name}</h3>
                        <p className="temperament">{item.temperament}</p>
                        <p className="weight">weight: {item.weight.imperial}kg</p>
                    </div>
                </div>
            </Link>
        )) :
            
            character?.slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
            ).map(item =>(
                <Link className='link-dog' to={`dogs/${item.name}`}>
                    <div className="card" key={item.id}>
                        <img src={item.image.url} alt={item.name}/>
                        <div className="character">
                            <h3 className="name">{item.name}</h3>
                            <p className="temperament">{item.temperament}</p>
                            <p className="weight">weight: {item.weight.imperial}kg</p>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
    </>
  )
}

export default Cards