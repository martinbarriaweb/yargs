const fs = require('fs');


let listTable = (base, limite) => {
    console.log(base, limite);
    
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