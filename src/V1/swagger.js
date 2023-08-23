const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const options = {
    definition:{
        openapi: "3.0.0",
        info: {title:'Practica node', version: '1.0.0'}
    },
    apis: ["src/V1/docs.js"]
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app,PORT)=>{
    app.use('/api/v1/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))
    app.get('/api/v1/docs.json',(req,res)=>{
        res.setHeader('Content-Type','application/json')
        res.send(swaggerSpec)
    })
    console.log(`👾poke-docs V1 available at http://localhost:${PORT}/api/v1/docs`)
}

module.exports = { swaggerDocs };