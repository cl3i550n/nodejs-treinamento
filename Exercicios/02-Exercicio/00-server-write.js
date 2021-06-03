// EXERCÍCIO 02
// SERVIDOR DE PÁGINAS HTML
// Faça um servidor de páginas com pelo menos 3 páginas HTML diferentes
// (uma delas, sendo respondida pela rota principal '/').
// Faça também o redirecionamento para uma paǵina de erro, quando a rota não
// corresponder a nenhuma página existente.

// As páginas HTML devem ser lidas pelo módulo File System.
// Dentro do diretorio 'exercicios', criar uma pasta '02-exercicio' e incluir
// alí a resolução do exercício. Fazer commit.

const http = require('http');

const server = http.createServer(
    (request, response) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('<head><meta charset="UTF-8"></head>');
            if (request.url === '/') {
                response.write('<h1>Home Page</h1>');
                response.write('<ul>');
                response.write('<li><a href="/">INICIO</a></li>');
                response.write('<li><a href="/youtube">YouTube</a></li>');
                response.write('<li><a href="/google">Google</a></li>');
                response.write('<li><a href="/404">Pagina de erro</a></li>');
                response.write('</ul>');
            } else if (request.url === '/youtube') {
                response.write('<h1>Acesse o YOUTUBE</h1>');
                response.write('<ul>');
                response.write('<li><a href="http://www.youtube.com.br">YOUTUBE</a></li>');
                response.write('</ul>');
                response.write('<br>');
                response.write('<img src=https://i.chzbgr.com/full/7910114816/h08CE1EF0/you-will-love-google/>');
                response.write('<br>');
                response.write('<a href="/"><button>VOLTAR</button></a>');
            } else if (request.url === '/google') {
                response.write('<h1>Acesse o GOOGLE</h1>');
                response.write('<ul>');
                response.write('<li><a href="http://www.google.com.br">GOOGLE</a></li>');
                response.write('</ul>');
                response.write('<br>');
                response.write('<img src=https://i.pinimg.com/originals/4c/fe/6a/4cfe6a3ec9888e91e366a1f0cde0db59.gif/>');
                response.write('<br>');
                response.write('<a href="/"><button>VOLTAR</button></a>');
            } else {
                response.write('<h1>Link inválido... tente novamente!</h1>');
                response.write('<iframe width="110" height="200" src="https://www.myinstants.com/instant/errou-faustao/embed/" frameborder="0" scrolling="no"></iframe>');
                response.write('<br>');
                response.write('<a href="/"><button>VOLTAR</button></a>');
            }
    
            response.end(); 
    }
)

server.listen(3000, ()=> {console.log("Servidor Iniciado, porta 3000")});