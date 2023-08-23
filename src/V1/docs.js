/*
//////////////////
pokemon schema
//////////////////
*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Pokemon:
 *       type: object
 *       required:
 *         - base_experience
 *         - height
 *         - id
 *         - is_default
 *         - location_area_encounters
 *         - name
 *         - order
 *         - weight
 *       properties:
 *         base_experience:
 *           type: int
 *           description: Experience of pokemon 
 *         height:
 *           type: int
 *           description: Pokemon height 
 *         id:
 *           type: int
 *           description: Pokemon id
 *         is_default:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         location_area_encounters:
 *           type: string
 *           description: The date the book was added
 *         name:
 *           type: string
 *           description: The name of the pokemon
 *         order:
 *           type: int
 *           description: The order of the pokemon
 *         weight:
 *           type: int
 *           description: The date the book was added
 *       example:
 *         base_experience: 1
 *         height: 7
 *         id: 1
 *         is_default: true
 *         location_area_encounters: https://pokeapi.co/api/v2/pokemon/1/encounters
 *         name: bulbasaur
 *         order: 1
 *         weight: 69
 */
/*
//////////////////
pokemon created
//////////////////
*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Created:
 *       type: object
 *       required:
 *         - status
 *         - message
 *       properties:
 *         status:
 *           type: string
 *           description: status responce
 *         message:
 *           type: string
 *           description: Api message
 *       example:
 *         status: ok
 *         message: Pokemon sended
 */
/*
//////////////////
pokemon updated
//////////////////
*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Updated:
 *       type: object
 *       required:
 *         - status
 *         - message
 *       properties:
 *         status:
 *           type: string
 *           description: status responce
 *         message:
 *           type: string
 *           description: Api message
 *       example:
 *         status: ok
 *         message: Pokemon updated
 */
/*
//////////////////
err
//////////////////
*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Err:
 *       type: object
 *       required:
 *         - status
 *         - message
 *       properties:
 *         status:
 *           type: string
 *           description: status responce
 *         message:
 *           type: string
 *           description: Api message
 *       example:
 *         status: err
 *         message: Invalid data
 */
/*
//////////////////
pokemons
//////////////////
*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Pokemons:
 *       type: object
 *       required:
 *         - name
 *         - url
 *       properties:
 *         name:
 *           type: string
 *           description: Pokemon name
 *         url:
 *           type: string
 *           description: poke api URL
 *       example:
 *         name: charmander
 *         url: https://pokeapi.co/api/v2/pokemon/4/
 */
/*
//////////////////
sin parametros
//////////////////
*/
/**
 * @swagger
 * tags:
 *   name: Pokemon
 *   description: Check pokemons information
 * /api/V1/pokemon:
 *   post:
 *     summary: Create a pokemon 👾
 *     tags: [Pokemon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pokemon'
 *     responses:
 *       200:
 *         description: Pokemon created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Created'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Err'
 *   get:
 *     summary: Get all pokemons
 *     tags: [Pokemon]
 *     responses:
 *       200:
 *         description: All pokemons 👹
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemons'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Err'
 */
/*
//////////////////
con parametros
//////////////////
*/
/**
 * @swagger
 * tags:
 *   name: Pokemon
 *   description: Check pokemons information
 * /api/V1/pokemon/{id}:
 *   get:
 *     summary: Get a single pokemon
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description:  ID of the pokemon to get
 *     tags: [Pokemon]
 *     responses:
 *       200:
 *         description: All pokemons 👹
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Err'
 *   put:
 *     summary: Update a pokemon 👾
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description:  ID of the pokemon to update
 *     tags: [Pokemon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pokemon'
 *     responses:
 *       200:
 *         description: Pokemon updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Updated'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Err'
 *   delete:
 *     summary: Delete a pokemon 💀
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: integer
 *        required: true
 *        description:  ID of the pokemon to delete☠️
 *     tags: [Pokemon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pokemon'
 *     responses:
 *       200:
 *         description: Pokemon updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Updated'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Err'
 */