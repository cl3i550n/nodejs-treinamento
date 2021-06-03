const express = require('express');
console.log(`express: ${typeof(express)} | constructor: ${express.constructor.name}`);

const app = express();
console.log(`app: ${typeof(app)} | constructor: ${app.constructor.name}`);

app.listen(3000, () =>console.log('Servidor Online, porta 3000'));

