module.exports = (app) => {
    // criando rota para cadastrar rastreador
    // POST
    // rota '/rastreamentos'
    app.post('/rastreamento', app.controllers.rastreamento.cadastrar);
}