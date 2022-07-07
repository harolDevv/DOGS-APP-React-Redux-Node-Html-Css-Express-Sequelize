const { Router } = require('express');
const cors = require('cors')
// Importar todos los routers;
const BreedsMidleware = require('./BreedsMidleware');
const TemperamentMidleware = require('./TemperamentsMidleware');
const razaMidleware = require('./razaMidleware')
const orderMidleware = require('./orderMidleware')
const orderMidleware2= require('./orderMidleware2')
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use(cors())
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use()

router.use('/dogs', BreedsMidleware) // obtenemos las breeds
router.use('/temperaments', TemperamentMidleware) // obtener los temperamentos
router.use('/dogs', razaMidleware)
router.use('/order', orderMidleware)
router.use('/order2', orderMidleware2)

module.exports = router;
