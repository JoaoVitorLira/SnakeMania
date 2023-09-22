window.onload = function () {
    var stage = document.getElementById("espaco");
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush)


    setInterval(jogo, 80); //define intervalo para uma função ser chamada no jog varias vezes (a cada 60 milisegundos)


    const vel = 1; //velocidade = quantas casas a cobrinha vai andar quando chamar a função jogo

    var vx = vy = 0;
    var px = 10; //onde se inicia no eixo x
    var py = 15; // onde se inicia no eixo y
    var tm = 30; //tamanho da maçã
    var qm = 20; //quantas maçãs podem caber
    var mx = my = 15; //posição inicial da maçã

    var trail = [];
    tail = 5;//tamanho da cauda

    function jogo() {
        px += vx;
        py += vy;
        if (px < -1) {
           alert("[GAME OVER] Você TROMBOU na parede!")
           window.location.href = "index.html";
        }
        if (px > qm) {
            alert("[GAME OVER] Você TROMBOU na parede!")
            window.location.href = "index.html";
        }
        if (py < -1) {
            alert("[GAME OVER] Você TROMBOU na parede!")
            window.location.href = "index.html";
        }
        if (py > qm) {
            alert("[GAME OVER] Você TROMBOU na parede!")
           window.location.href = "index.html";
        }// faz a cobra não sair da borda



        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.width, stage.height);

        ctx.fillStyle = "red";//cor da maçã
        ctx.fillRect(mx * tm, my * tm, tm, tm)//posição da maçã(posição vezes o tamanho e bla bla bla...)

        ctx.fillStyle = "#24ff00"
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tm, trail[i].y * tm, tm, tm);
            if (trail[i].x == px && trail[i].y == py) {
                vx = vy=0;
                tail = 5;
            } //posição da cabeça

        }

        //movimento da cobra:

        trail.push({ x: px, y: py })
        while (trail.length > tail) {
            trail.shift(); //tira o primeiro elemento que está no array se for maior que a nossa cauda
        }

        if (mx==px && my==py) {
            tail++; //adiciona mais um elemento na cauda
            mx = Math.floor(Math.random() *qm); //posiciona a maçã em outro local do tabuleiro
            my = Math.floor(Math.random() *qm);
        }


    }

    //Programação das teclas que vão movimentar a cobrinha(com b)
    function keyPush(event) {
        switch (event.keyCode) {
            case 37: //Seta da esquerda
                vx = -vel; //mexe pra esquerda
                vy = 0;
                break;
            case 38: //Seta de cima
                vx = 0;
                vy = -vel; //mexe de baixo pra cima (ent vai ir pra cima)
                break;
            case 39: //Seta da direita
                vx = vel; // mexe pra direita
                vy = 0;
                break;
            case 40: //Seta de BAIXO
                vx = 0;
                vy = vel; //mexe de baixo pra cima
                break;
            default:

                break;
        }
    }
}