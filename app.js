const fs = require('fs');

let base = 7;
let data = '';

for( let i = 0; i <= 10; i++ ) {
  data += `${ base } * ${ i } = ${ base * i }\n`;
}

fs.writeFile(`./tables/tabla-${ base }`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo con tabla ${ base } se creó`);
    
});

