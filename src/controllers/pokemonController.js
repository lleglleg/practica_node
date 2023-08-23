const func = require("../functions/fetch");

module.exports = {
    getPokemon,
    getSinglePokemon,
    createPokemon,
    updatePokemon,
    deletePokemon
};

async function getPokemon(req, res) {  
    let url ="https://pokeapi.co/api/v2/pokemon?limit=200";
    
   let data = await func.get(url);
   data = await data.json();

   res.json(data.results);

}


async function getSinglePokemon(req, res) {
    let param = req.params.id,status;

    let url ="https://pokeapi.co/api/v2/pokemon";
    if(param != undefined)
        url= url+`/${param}`
    
    let data = await func.get(url);

    if(data.ok){
        status = data.status;
        data = await data.json();
    }else{
        status = data.status;
        data = {"status":"err","message":data.statusText};
    }
   res.status(status).json(data);

}

async function createPokemon(req, res) {
    let status, data;

    if(Object.keys(req.body).length == 0){
        status = 400;
        data = {"status":"err","message":"Invalid data"};
    }else{
        status = 200;
        data = {"status":"ok","message":"Pokemon sended"};
    }

    res.status(status).json(data);

}

async function updatePokemon(req, res) {
    let status, data;

    if(Object.keys(req.body).length == 0){
        status = 400;
        data = {"status":"err","message":"Invalid data"};
    }else{
        status = 200;
        data = {"status":"ok","message":"Pokemon updated"};
    }

    res.status(status).json(data);

}

async function deletePokemon(req, res) {
    let param = req.params.id,status;

    let url ="https://pokeapi.co/api/v2/pokemon";
    if(param != undefined)
        url= url+`/${param}`
    
    let data = await func.get(url);

    if(data.ok){
        status = data.status;
        data = await data.json();
        data = {"status":"ok","message":`${data.name.replace('/', "")} has been deleted`};
    }else{
        status = data.status;
        data = {"status":"err","message":data.statusText};
    }
   res.status(status).json(data);

}
