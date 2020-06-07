const fs = require('fs');


let createFile = (base) => {
    return new Promise( (resolve, reject) =>{

        if( !Number(base) ){
            reject(`${base} No es un numero`)
        }


        let data = '';

        for( let i = 0; i <= 10; i++ ) {
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
    createFile
}