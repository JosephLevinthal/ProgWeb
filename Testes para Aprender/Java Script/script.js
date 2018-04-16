function soma(a, b) {
    c = 2;
    return a + b;
}

soma(1, 2);
console.log(1, 3);
//////////////////////////////////////////////////////////////////////////
(function () {
    var valor = 5;

    valor = (function () {
        var fatorial = 1;
        for (var i = 1; i <= valor; i++) {
            fatorial = fatorial * i;
        }
        return fatorial;
    })();

    console.log(valor);
})();
////////////////////////////////////////////////////////////////////////
var unidade = {
    nome: "Instituto de Computação",
    uf: "Universidade Federal do Amazonas",
    fundacao: 1990,
    getNome: function () {
        return this.nome;
    }
}
console.log(unidade.getNome());