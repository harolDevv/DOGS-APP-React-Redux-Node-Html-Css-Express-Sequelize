import React from 'react'
import { Link } from 'react-router-dom'
import Dog from '../imgs/Dog 10.png'
import   {BsFillPlayFill} from "react-icons/bs"


const Inicio = () => {
return (
<div className="App">
    <div className='l-page'>
        <img className='ilustrate' src={Dog} alt="description dog"/>
        <div className='l-page_content' >
            <p><span>Welcome</span>, join me to learn about  <span>dogs</span> </p>
            <Link to="/Home">
                    <BsFillPlayFill/>  Let's go!
            </Link>
        </div>
    </div> 
</div>
    )
}

export default Inicio