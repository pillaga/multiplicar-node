const elementos=require('./config/yargs').elementos;
const {crearArchivo,listar} = require('./multiplicar/multiplicar')

const colors= require('colors');

let comando=elementos._[0];

switch(comando){

case 'listar':
listar(elementos.base,elementos.limite);
break;


case 'crear':
crearArchivo(elementos.base,elementos.limite)
    .then(archivo=>console.log(colors.blue(`${archivo} fue creado`));
    .catch(e=> console.log(e));

break;

default: console.log('comando no reconocido');

}



console.log(`la base es; ${elementos.base} y el limite es ${elementos.limite}`);









