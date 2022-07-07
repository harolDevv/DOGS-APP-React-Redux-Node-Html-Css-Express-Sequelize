const axios = require('axios')
const {Router} = require('express')
const cors = require('cors')
const {Dog, Temperamento} = require("../db")
const router  = Router();

//rutas
router.use(cors())

router.get('/', async(req,res) => {

    const { name } = req.query
    console.log(name);
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
            const data = respuesta.data.filter(item => item.temperament)
            if (name) {
                    const allData = [...data, ...dataDogNew]
                    const dogsFil = allData.filter( item => item?.name.toLowerCase().includes(name.toLowerCase()))
                    if (dogsFil.length === 0) {
                        return res.status(404).send('No encontrado') // si no encontro ninfun perro con ese name
                    }
                        return res.status(200).json(dogsFil)
                } else {
                    return res.status(200).json([...data,...dataDogNew])
                }
            })

    } catch (error) {
        res.status(404).send("hubo un error al obtener las breeds")
    }
        
})




router.post('/', async (req, res) => {
    const {id, name, height, weight, life_span, idTemperament} = req.body

    if(!id || !name || !height || !weight){
        //validar los obligatorios 
        return res.status(404).send('Falta enviar datos obligatorios')
    }

    try {
        //crear el dog
        const dog = await Dog.create({...req.body});
        //ver que y como se crea  
        console.log(idTemperament);
        //enviarlo como respuesta
        return res.status(201).json(await dog.addTemperamentos(idTemperament))
    } catch (error) {
        return res.status(404).send(error)
    }
});




module.exports = router