import React from 'react'
import { Link } from 'react-router-dom'

const Iftemperament = ({dogs}) => {
  return (
    <div className='main-cards'>
        {
            dogs.map(item =>(
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
  )
}

export default Iftemperament