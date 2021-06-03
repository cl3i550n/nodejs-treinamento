const express = require('express');
// console.log(`express: ${typeof(express)} | constructor: ${express.constructor.name}`);

const app = express();
// console.log(`app: ${typeof(app)} | constructor: ${app.constructor.name}`);

app.listen(3000, /*porta*/ ()=>console.log('Servidor Online, porta 3000'));

// Criando ROta
// Rota '/'

// get() define a rota e a função que deve ser executada...
app.get(
    '/', // é a URL da rota
    (request, response) => {
        console.log('Rota principal chamada...');
        response.send('Servidor esta ONLINE, aqui vai mandar JSON');
    }
);