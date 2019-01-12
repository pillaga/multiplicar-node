const op={    
        base:{demand:true, alias:'b'} ,
        limite:{alias:'l', default:10}
}



const elementos=require('yargs')
                    .command('listar',"imprime en consola la tabla de mult",op)
                    .command('crear',"genera el archivo con la tabla de mult",op)
                    .argv;

module.exports={elementos}