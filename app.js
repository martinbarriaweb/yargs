const { createFile } = require('./multiply/multiply');

let base = 'asd';
 


createFile(base)
.then( (archivo)=>{
    console.log(`Archivo creado: ${archivo}`);
})
.catch( err=>console.log(err));