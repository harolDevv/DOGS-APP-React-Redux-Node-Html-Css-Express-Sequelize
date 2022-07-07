const axios = require('axios')
const {Router} = require('express')
const router  = Router();
//rutas

router.get('/', (req,res) => {
    
    try {
        axios.get('https://api.thedogapi.com/v1/breeds')
        .then((respuesta)=>{
            //obtener los temperamentos
            
            let cambio = true 
            while (cambio) {
            cambio = false
            for(let i = 0; i < respuesta.data.length - 1 ; i++){
                if(Number((respuesta.data[i].weight.imperial.charAt(0)  +  respuesta.data[i].weight.imperial.charAt(1) )) < Number((respuesta.data[i+1].weight.imperial.charAt(0)  +  respuesta.data[i+1].weight.imperial.charAt(1) ))){
                let mas = respuesta.data[i]
                respuesta.data[i] = respuesta.data[i + 1]
                respuesta.data[i + 1] = mas
                cambio = true
                } 
            }
            
        }
        res.json(respuesta.data)
        
        })

    } catch (error) {
            return  res.status(404).send('Error al ordernar')
    }   
        


})

module.exports = router