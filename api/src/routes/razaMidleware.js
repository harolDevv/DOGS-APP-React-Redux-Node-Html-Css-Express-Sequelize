const axios = require('axios')
const {Router} = require('express')
const router  = Router();
const {Dog, Temperamento} = require("../db")
//rutas

router.get('/:id', async(req,res) => {
    const {id} = req.params

    const dataDog = await Dog.findAll({
        include:[
            {
                model:Temperamento,
                attributes : ['name'],
                through:{
                    attributes: []
                }
            }
        ]
    });
    const dataDogNew = dataDog.map(item => {
        return {
            id: item.id,
            name: item.name,
            height : item.height,
            weight : item.weight,
            life_span: item.life_span,
            temperament: item.Temperamentos.map(e => e.name).join(','),
            image:{
                url:'https://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg',
            }
        }
    })
    
    try {
        axios.get('https://api.thedogapi.com/v1/breeds')
        .then((respuesta)=>{
                const dog = [...respuesta.data, ...dataDogNew].find(item =>  item.name === id)
                if(!dog){
                    res.status(404).send('perro no encontrado')
                }
                return res.status(200).json(dog)
            
        })

    } catch (error) {
            return  res.status(404).send('Error al obtener el dog')
    }   

})

module.exports = router