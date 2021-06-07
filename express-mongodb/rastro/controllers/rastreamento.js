const mongoose = require('mongoose');

module.exports = (app) => {

    const RastreamentoController = {
        cadastrar(request, response) {
            console.log('Rota /rastreamento chamada...');
            console.log(`request.body: ${request.body}`);
            console.log(request.body);

            const Rastreamento = app.models.rastreamento;
            const rastreamento = new Rastreamento(request.body);
            console.log(rastreamento);

            if (!rastreamento.dataHora) {
                rastreamento.dataHora = new Date;
            }
            console.log(rastreamento);

            // Aqui vamos colocar a logica do serviço
            mongoose.connect(
                'mongodb://localhost:27017/rastro',
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            ).then(() => {
                Rastreamento.create(rastreamento)
                    .then((resultado) => {
                        console.log(`Rastreamento do Rastreador ${rastreamento.codigoRastreador} cadastrado com sucesso.`);
                        console.log(resultado);
                        mongoose.disconnect();
                        response.status(200).send(resultado);
                    })
                    .catch((erro) => {
                        console.log(`Erro ao cadastrar o Rastreamento: ${erro}`);
                        console.log(erro);
                        mongoose.disconnect();
                        response.status(500).send(`Erro ao cadastrar o Rastreamento: ${erro}`);
                    });
            }).catch(() => {
                console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                console.log(erro);
                response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
            });
        }
    }
    return RastreamentoController;
}