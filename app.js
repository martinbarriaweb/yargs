const { createFile } = require('./multiply/multiply');

 

let argv = process.argv;
let parameter = argv[2];
let base = parameter.split('=')[1];

console.log(base);




createFile(base)
.then( (archivo)=>{
    console.log(`Archivo creado: ${archivo}`);
})
.catch( err=>console.log(err));