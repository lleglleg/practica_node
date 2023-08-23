const express = require('express');
const cors = require('cors');
const app = express();
const routesV1 = require('./V1/routes/routes');
const { swaggerDocs: V1SwaggerDocs } = require('./V1/swagger');

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.use('/api/V1',cors(), routesV1);

app.listen(PORT, () => { 
    console.log(`👾poke-api listen in port:`, PORT);
    V1SwaggerDocs(app,PORT);
})

module.exports = app;

