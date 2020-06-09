const fs = require('fs');
const colors = require('colors'); 


let listTable = (base, limite) => {

    console.log('============='.green);
    console.log(`TABLA DE ${ base }`.green);
    console.log('============='.green);
    

    for( let i = 1; i <= limite; i++ ) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }

}


let createFile = (base, limit) => {
    return new Promise( (resolve, reject) =>{

        if( !Number(base) ){
            reject(`${base} No es un numero`)
        }


        let data = '';

        for( let i = 0; i <= limit; i++ ) {
          data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`./tables/tabla-${ base }`, data, (err) => {
            if (err){
                reject(err);
            } else{
                resolve(`table-${ base }.txt`);
            }

        });
 

    })
}

module.exports = {
    createFile,
    listTable
}