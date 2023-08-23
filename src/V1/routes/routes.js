const express = require("express"),router = express.Router()
const pokemonController = require('../../controllers/pokemonController')
const healthcheckController = require('../../controllers/healthcheckController')


router.get('/pokemon',pokemonController.getPokemon)

router.get('/pokemon/:id',pokemonController.getSinglePokemon)

router.post('/pokemon',pokemonController.createPokemon)

router.put('/pokemon',pokemonController.updatePokemon)

router.delete('/pokemon/:id',pokemonController.deletePokemon)

router.get('/check_pokehealt',healthcheckController.HealthCheck)


module.exports = router;
