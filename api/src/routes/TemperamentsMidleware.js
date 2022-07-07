const axios = require('axios')
const {Router} = require('express')
const router  = Router();
const {Dog, Temperamento} = require("../db")
//rutas

router.get('/', async(req,res) => {
    const modelTempt = await Temperamento.findAll()
    let arr = []
    try {
        axios.get('https://api.thedogapi.com/v1/breeds')
        .then((respuesta)=>{
            //obtener los temperamentos
            for (let i = 0; i < respuesta.data.length; i++) {
                if (!respuesta.data[i].temperament) {
                        continue
                    }
                    let item = respuesta.data[i].temperament.split(',')
                    arr = [...arr,...item]
            }
            //eliminar repetidos
            let result = arr.filter((item,index)=>{
                return arr.indexOf(item) === index;

            })

            if (modelTempt.length === 0) {
                result.map(e => {
                    Temperamento.create({name:e})
                })
            }

            
            return res.status(200).json(result)
        })

    } catch (error) {
            return  res.status(404).send('Error al obtener los temperamentos')
    }   
        


})

module.exports = router