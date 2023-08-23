
const fetch = require("node-fetch")

module.exports = {
    get
};

async function get(url){
    return new Promise(async function(resolve, reject) {
        await fetch(url, {
            method: 'GET'
          }).then(async (response)=>{
            resolve(response);
          }).catch((err)=>{
            console.log(err);
            reject(err);
        });
    });
}