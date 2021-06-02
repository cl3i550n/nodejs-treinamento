const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (request, response) => {
        let arquivo = '';
        // tenho a string da URL da requisição
        if (request.url === '/') {
            arquivo = 'home.html';
        } else if (request.url === '/google') {
            arquivo = 'google.html'
        } else if (request.url === '/youtube') {
            arquivo = 'youtube.html'
        } else {
            arquivo = 'error.html'
        }
        
        if (fs.existsSync(arquivo)) {
            fs.readFile(arquivo, 
                (erro, dados) => {
                    if (erro) {
                        throw erro;
                    } else {
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        response.end(dados);
                    }
                }
            );    
        } else {
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.write(`Arquivo ${arquivo} não localizado...`);
            response.end();
        }
    }
);

server.listen(3000, ()=> {console.log("Servidor está iniciado, porta 3000")});