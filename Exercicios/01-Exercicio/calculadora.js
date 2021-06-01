const calculadora = {
    somar(a, b) {
        resultadoSoma = a + b;
        return resultadoSoma;
    },
    somarArray(...numeros) {
        let resultado = 0
        for (let i = 0; i < numeros.length; i++) {
            resultado = numeros[i] + resultado
        }
        return resultado;
    },

    subtrair(a, b) {
        resultadoSubtrair = a - b;
        return resultadoSubtrair;
    },
    subtrairArray(...numeros) {
        let resultado = 0
        for (let i = 0; i < numeros.length; i++) {
            resultado = numeros[i] - resultado
        }
        return resultado;
    },

    multiplicar(a, b) {
        resultadoMultiplicar = a * b;
        return resultadoMultiplicar;
    },
    multiplicarArray(...numeros) {
        let resultado = 1
        for (let i = 0; i < numeros.length; i++) {
            resultado = numeros[i] * resultado
        }
        return resultado;
    },

    dividir(a, b) {
        resultadoDividir = a / b;
        return resultadoDividir;
    },
    dividirArray(...numeros) {
        let resultado = 1
        for (let i = 0; i < numeros.length; i++) {
            resultado = numeros[i] / resultado
        }
        return resultado;
    }

}

module.exports = calculadora;