(function () {
    const FPS = 50;
    const TAMX = 300;
    const TAMY = 400;
    const PROB_ARVORE = 2;
    const PROB_ARBUSTO = 2;
    var gameLoop;
    var montanha;
    var skier;
    var direcoes = ['para-esquerda', 'para-frente', 'para-direita']
    var arvores = [];
    var arbustos = [];

    function init() {
        montanha = new Montanha();
        skier = new Skier();
        gameLoop = setInterval(run, 1000 / FPS);
    }

    window.addEventListener('keydown', function (e) {
        if (e.key == 'a') skier.mudarDirecao(-1);
        else if (e.key == 'd') skier.mudarDirecao(1);
        if (e.key == 'f') {
            if (skier.velocidade == 1.5) {
                skier.frear();
            }
            else {
                skier.acelerar();
            }
        }
    });

    function mudarInfo() {
        var dist = document.getElementById("distancia");
        var vida = document.getElementById("vidas");

        dist.innerHTML = "Distancia: " + Math.round(skier.distancia);
        vida.innerHTML = "Vidas: " + skier.vidas;
    }

    function Montanha() {
        this.element = document.getElementById("montanha");
        this.element.style.width = TAMX + "px";
        this.element.style.height = TAMY + "px";
    }

    function Skier() {
        this.element = document.getElementById("skier");
        this.direcao = 1; //0-esquerda;1-frente;2-direita
        this.element.className = 'para-frente';
        this.element.style.top = '30px';
        this.element.style.left = parseInt(TAMX / 2) - 7 + 'px';
        this.velocidade = 1;
        this.distancia = 0;
        this.vidas = 3;

        this.acelerar = function () {
            this.velocidade = 1.5;
        }
        this.frear = function () {
            this.velocidade = 1.0;
        }

        this.mudarDirecao = function (giro) {
            if (this.direcao + giro >= 0 && this.direcao + giro <= 2) {
                this.direcao += giro;
                this.element.className = direcoes[this.direcao];
            }
        }

        this.andar = function () {
            if (this.direcao == 0) {
                this.element.style.left = (parseInt(this.element.style.left) - 1) + "px";
            }
            if (this.direcao == 2) {
                this.element.style.left = (parseInt(this.element.style.left) + 1) + "px";
            }
            if (skier.velocidade == 1.0) {
                skier.distancia += 20 / FPS;
            }
            if (skier.velocidade == 1.5) {
                skier.distancia += 30 / FPS;
            }
        }
    }

    function colisao() {
        if (skier.element.style.left < 0 + 'px') {
            skier.element.style.left = 0 + 'px';
        }
        //if (skier.element.style.left > TAMX + "px") {
        //skier.element.style.left = TAMX + "px";
        //}
    }

    function Arvore() {
        this.element = document.createElement('div');
        montanha.element.appendChild(this.element);
        this.element.className = 'arvore';
        this.element.style.top = TAMY + "px";
        this.element.style.left = Math.floor(Math.random() * TAMX) + "px";
    }

    function Arbusto() {
        this.element = document.createElement('div');
        montanha.element.appendChild(this.element);
        this.element.className = 'arbusto';
        this.element.style.top = TAMY + "px";
        this.element.style.left = Math.floor(Math.random() * TAMX) + "px";
    }

    function run() {
        var random = Math.floor(Math.random() * 1000);

        if (random <= PROB_ARVORE * 10) {
            var arvore = new Arvore();
            arvores.push(arvore);
        }

        arvores.forEach(function (a) {
            a.element.style.top = (parseInt(a.element.style.top) - skier.velocidade) + "px";
        });

        if (random <= PROB_ARBUSTO * 10) {
            var arbusto = new Arbusto();
            arbustos.push(arbusto);
        }

        arbustos.forEach(function (b) {
            b.element.style.top = (parseInt(b.element.style.top) - skier.velocidade) + "px";
        });

        skier.andar();
        mudarInfo();
        colisao();
        //homemDasNeves();
    }
    init();
})();