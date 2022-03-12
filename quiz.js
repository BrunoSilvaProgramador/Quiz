var nome = [];
var resposta = [];
var abilitado = ['Abilitado','Abilitado','Abilitado'];
var pontuacao = 0;
var vidas = 3;
var pular = 2;
var vidas_btn = document.querySelector('.vida');
var pular_btn = document.querySelectorAll('.pular');
var parar_btn = document.querySelector('.parar');
var q_vidas = document.querySelector('.q_vida');
var back = document.querySelector('.back');
var animacao = document.querySelector('.animacao');
var titulo_materia = document.querySelector('#h2-pergunta');
var pergunta_tittle = document.getElementById('pergunta_tittle');
var button = document.querySelector('#confirmar-resposta');
var opcao_a = document.getElementById('letra_a');
var opcao_b = document.getElementById('letra_b');
var opcao_c = document.getElementById('letra_c');
var opcao_d = document.getElementById('letra_d');
var _alert = document.querySelector('.alert');
var alert_nome = document.querySelector('.alert-nome');
var alert_valor = document.querySelector('.alert-valor');


var dados = {
    musica: [
        {
            prg: 'Em que cidade a banda Sepultura iniciou sua carreira ?',
            str_a: 'Rio de Janeiro',
            str_b: 'Brasília', 
            str_c: 'Belo Horizonte',
            str_d: 'São Paulo',
            resp: 'Belo Horizonte'
        },
        {
            prg: 'Qual destes cantores participaram da formação do grupo Secos e Molhados ?',
            str_a: 'Raul Seixas',
            str_b: 'Ney Matogrosso', 
            str_c: 'Geraldo Vandré',
            str_d: 'Gilberto Gil',
            resp: 'Ney Matogrosso'
        },
        {
            prg: 'Qual cantor gravou a música Thriller ?',
            str_a: 'Michael Jackson',
            str_b: 'Prince', 
            str_c: 'Frank Sinatra',
            str_d: 'George Michael',
            resp: 'Michael Jackson'
        }
    ],

    esporte: [
        {
            prg: 'esporte 1 ?',
            str_a: 'esporte 1a',
            str_b: 'esporte 1b', 
            str_c: 'esporte 1c',
            str_d: 'esporte 1d',
            resp: 'esporte 1a'
        },
        {
            prg: 'esporte 2 ?',
            str_a: 'esporte 2a',
            str_b: 'esporte 2b', 
            str_c: 'esporte 2c',
            str_d: 'esporte 2d',
            resp: 'esporte 2a'
        },
        {
            prg: 'esporte 3 ?',
            str_a: 'esporte 3a',
            str_b: 'esporte 3b', 
            str_c: 'esporte 3c',
            str_d: 'esporte 3d',
            resp: 'esporte 3a'
        }
    ],

    geografia: [
        {
            prg: 'geografia 1 ?',
            str_a: 'geografia 1a',
            str_b: 'geografia 1b', 
            str_c: 'geografia 1c',
            str_d: 'geografia 1d',
            resp: 'geografia 1a'
        },
        {
            prg: 'geografia 2 ?',
            str_a: 'geografia 2a',
            str_b: 'geografia 2b', 
            str_c: 'geografia 2c',
            str_d: 'geografia 2d',
            resp: 'geografia 2a'
        },
        {
            prg: 'geografia 3 ?',
            str_a: 'geografia 3a',
            str_b: 'geografia 3b', 
            str_c: 'geografia 3c',
            str_d: 'geografia 3d',
            resp: 'geografia 3a'
        }
    ],

    historia: [
        {
            prg: 'historia 1 ?',
            str_a: 'historia 1a',
            str_b: 'historia 1b', 
            str_c: 'historia 1c',
            str_d: 'historia 1d',
            resp: 'historia 1a'
        },
        {
            prg: 'historia 2 ?',
            str_a: 'historia 2a',
            str_b: 'historia 2b', 
            str_c: 'historia 2c',
            str_d: 'historia 2d',
            resp: 'historia 2a'
        },
        {
            prg: 'historia 3 ?',
            str_a: 'historia 3a',
            str_b: 'historia 3b', 
            str_c: 'historia 3c',
            str_d: 'historia 3d',
            resp: 'historia 3a'
        }
    ],

    conhecimentos_gerais: [
        {
            prg: 'conhecimentos_gerais 1 ?',
            str_a: 'conhecimentos_gerais 1a',
            str_b: 'conhecimentos_gerais 1b', 
            str_c: 'conhecimentos_gerais 1c',
            str_d: 'conhecimentos_gerais 1d',
            resp: 'conhecimentos_gerais 1a'
        },
        {
            prg: 'conhecimentos_gerais 2 ?',
            str_a: 'conhecimentos_gerais 2a',
            str_b: 'conhecimentos_gerais 2b', 
            str_c: 'conhecimentos_gerais 2c',
            str_d: 'conhecimentos_gerais 2d',
            resp: 'conhecimentos_gerais 2a'
        },
        {
            prg: 'conhecimentos_gerais 3 ?',
            str_a: 'conhecimentos_gerais 3a',
            str_b: 'conhecimentos_gerais 3b', 
            str_c: 'conhecimentos_gerais 3c',
            str_d: 'conhecimentos_gerais 3d',
            resp: 'conhecimentos_gerais 3a'
        }
    ]
};




function confirmar_inicio() {
    let input_nome = document.querySelector('#name').value;

    if(input_nome.length == 0) {
        alert('Digite seu nome');
    }else{
        document.querySelector('.inicio').style.display = 'none';
        nome[0] = input_nome;
        animation(pontuacao);
    } 
}

function animation(pontuacao){
    back.style.display = 'none';
    let box_animacao = document.querySelector('.box-animacao1');
    
    switch(pontuacao){
        case 0: box_animacao.innerText = '1 MIL'; break;
        case 1: box_animacao.innerText = '2 MIL'; break;
        case 2: box_animacao.innerText = '3 MIL'; break;
        case 3: box_animacao.innerText = '4 MIL'; break;
        case 4: box_animacao.innerText = '5 MIL'; break;
        case 5: box_animacao.innerText = '10 MIL'; break;
        case 6: box_animacao.innerText = '20 MIL'; break;
        case 7: box_animacao.innerText = '30 MIL'; break;
        case 8: box_animacao.innerText = '40 MIL'; break;
        case 9: box_animacao.innerText = '50 MIL'; break;
        case 10: box_animacao.innerText = '100 MIL'; break;
        case 11: box_animacao.innerText = '200 MIL'; break;
        case 12: box_animacao.innerText = '300 MIL'; break;
        case 13: box_animacao.innerText = '400 MIL'; break;
        case 14: box_animacao.innerText = '500 MIL'; break;
        case 15: box_animacao.innerText = '1 MILHÃO'; break;
    }

    animacao.style.display = 'block';

    const time = setTimeout(function() {
        valores();
        animacao.style.display = 'none';
        const timer = setTimeout(function() {
            back.style.display = 'flex';
            progresso(pontuacao);
            esc_materia();
        }, 1000)
    }, 1300)
}

function esc_materia(){
    var materia = (function () {
        min = Math.ceil(1);
        max = Math.floor(5);
        var escolhido = Math.floor(Math.random() * (max - min + 1)) + min;
        switch (escolhido) {
            case 1: 
                if(dados.musica.length > 0){
                    return escolhido;
                }else{
                    if(dados.musica.length == 0 && dados.esporte.length == 0 && dados.geografia.length == 0 && dados.historia.length == 0 && dados.conhecimentos_gerais.length == 0){
                        alert('Infelizmente as perguntas se esgotaram, Você esta desclassificado!');
                        location.reload();
                    }else{
                        esc_materia();
                    }                  
                } 
                break;

            case 2: 
                if(dados.esporte.length > 0){
                    return escolhido;
                }else{
                    if(dados.musica.length == 0 && dados.esporte.length == 0 && dados.geografia.length == 0 && dados.historia.length == 0 && dados.conhecimentos_gerais.length == 0){
                        alert('Infelizmente as perguntas se esgotaram, Você esta desclassificado!');
                        location.reload();
                    }else{
                        esc_materia();
                    }                    
                } 
                break;

            case 3: 
                if(dados.geografia.length > 0){
                    return escolhido;
                }else{
                    if(dados.musica.length == 0 && dados.esporte.length == 0 && dados.geografia.length == 0 && dados.historia.length == 0 && dados.conhecimentos_gerais.length == 0){
                        alert('Infelizmente as perguntas se esgotaram, Você esta desclassificado!');
                        location.reload();
                    }else{
                        esc_materia();
                    }                  
                } 
                break;

            case 4: 
                if(dados.historia.length > 0){
                    return escolhido;
                }else{
                    if(dados.musica.length == 0 && dados.esporte.length == 0 && dados.geografia.length == 0 && dados.historia.length == 0 && dados.conhecimentos_gerais.length == 0){
                        alert('Infelizmente as perguntas se esgotaram, Você esta desclassificado!');
                        location.reload();
                    }else{
                        esc_materia();
                    }                    
                } 
                break;
            
            case 5: 
                if(dados.conhecimentos_gerais.length > 0){
                    return escolhido;
                }else{
                    if(dados.musica.length == 0 && dados.esporte.length == 0 && dados.geografia.length == 0 && dados.historia.length == 0 && dados.conhecimentos_gerais.length == 0){
                        alert('Infelizmente as perguntas se esgotaram, Você esta desclassificado!');
                        location.reload();
                    }else{
                        esc_materia();
                    }                    
                } 
                break;

                
        }
        
    })();
    switch (materia){
        case 1: titulo_materia.innerText = 'Música'; esc_pergunta('Música'); break;
        case 2: titulo_materia.innerText = 'Esporte'; esc_pergunta('Esporte'); break;
        case 3: titulo_materia.innerText = 'Geografia'; esc_pergunta('Geografia'); break;
        case 4: titulo_materia.innerText = 'História'; esc_pergunta('História'); break;
        case 5: titulo_materia.innerText = 'Conhecimentos Gerais'; esc_pergunta('Conhecimentos Gerais'); break;
    }
}
function esc_pergunta(mat){

    switch(mat){
        case 'Música': 
            var pergunta = (function () {
                min = Math.ceil(0);
                max = Math.floor(dados.musica.length - 1);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            })(); 
            pergunta_tittle.innerText = dados.musica[pergunta].prg; 
            opcao_a.innerText = dados.musica[pergunta].str_a;
            opcao_b.innerText = dados.musica[pergunta].str_b;
            opcao_c.innerText = dados.musica[pergunta].str_c;
            opcao_d.innerText = dados.musica[pergunta].str_d;
            resposta[0] = dados.musica[pergunta].resp;
            resposta[1] = 'dados.musica';
            resposta[2] = pergunta;
            break;

        case 'Esporte': 
            var pergunta = (function () {
                min = Math.ceil(0);
                max = Math.floor(dados.esporte.length - 1);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            })(); 
            pergunta_tittle.innerText = dados.esporte[pergunta].prg; 
            opcao_a.innerText = dados.esporte[pergunta].str_a;
            opcao_b.innerText = dados.esporte[pergunta].str_b;
            opcao_c.innerText = dados.esporte[pergunta].str_c;
            opcao_d.innerText = dados.esporte[pergunta].str_d;
            resposta[0] = dados.esporte[pergunta].resp;
            resposta[1] = 'dados.esporte';
            resposta[2] = pergunta;
            break;
        
        case 'Geografia': 
            var pergunta = (function () {
                min = Math.ceil(0);
                max = Math.floor(dados.geografia.length - 1);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            })(); 
            pergunta_tittle.innerText = dados.geografia[pergunta].prg; 
            opcao_a.innerText = dados.geografia[pergunta].str_a;
            opcao_b.innerText = dados.geografia[pergunta].str_b;
            opcao_c.innerText = dados.geografia[pergunta].str_c;
            opcao_d.innerText = dados.geografia[pergunta].str_d;
            resposta[0] = dados.geografia[pergunta].resp;
            resposta[1] = 'dados.geografia';
            resposta[2] = pergunta;
            break;

        case 'História': 
            var pergunta = (function () {
                min = Math.ceil(0);
                max = Math.floor(dados.historia.length - 1);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            })(); 
            pergunta_tittle.innerText = dados.historia[pergunta].prg; 
            opcao_a.innerText = dados.historia[pergunta].str_a;
            opcao_b.innerText = dados.historia[pergunta].str_b;
            opcao_c.innerText = dados.historia[pergunta].str_c;
            opcao_d.innerText = dados.historia[pergunta].str_d;
            resposta[0] = dados.historia[pergunta].resp;
            resposta[1] = 'dados.historia';
            resposta[2] = pergunta;
            break;

        case 'Conhecimentos Gerais': 
            var pergunta = (function () {
                min = Math.ceil(0);
                max = Math.floor(dados.conhecimentos_gerais.length - 1);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            })(); 
            pergunta_tittle.innerText = dados.conhecimentos_gerais[pergunta].prg; 
            opcao_a.innerText = dados.conhecimentos_gerais[pergunta].str_a;
            opcao_b.innerText = dados.conhecimentos_gerais[pergunta].str_b;
            opcao_c.innerText = dados.conhecimentos_gerais[pergunta].str_c;
            opcao_d.innerText = dados.conhecimentos_gerais[pergunta].str_d;
            resposta[0] = dados.conhecimentos_gerais[pergunta].resp;
            resposta[1] = 'dados.conhecimentos_gerais';
            resposta[2] = pergunta;
            break;
    }
    
}

opcao_a.addEventListener('click', function(){
    opcao_a.style.backgroundColor = 'white';
    opcao_b.style.backgroundColor = '#9699e0';
    opcao_c.style.backgroundColor = '#9699e0';
    opcao_d.style.backgroundColor = '#9699e0';
});
opcao_b.addEventListener('click', function(){
    opcao_a.style.backgroundColor = '#9699e0';
    opcao_b.style.backgroundColor = 'white';
    opcao_c.style.backgroundColor = '#9699e0';
    opcao_d.style.backgroundColor = '#9699e0';
});
opcao_c.addEventListener('click', function(){
    opcao_a.style.backgroundColor = '#9699e0';
    opcao_b.style.backgroundColor = '#9699e0';
    opcao_c.style.backgroundColor = 'white';
    opcao_d.style.backgroundColor = '#9699e0';
});
opcao_d.addEventListener('click', function(){
    opcao_a.style.backgroundColor = '#9699e0';
    opcao_b.style.backgroundColor = '#9699e0';
    opcao_c.style.backgroundColor = '#9699e0';
    opcao_d.style.backgroundColor = 'white'; 
});

function desabilitar(){
    opcao_a.disabled = true;
    opcao_b.disabled = true;
    opcao_c.disabled = true;
    opcao_d.disabled = true;
    button.disabled = true;
    parar_btn.disabled = true;
    for(let i=0; i< pular_btn.length; i++){
        pular_btn[i].disabled = true;
    }
};

function abilitar(){
    opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
    opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
    opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
    opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
    opcao_a.disabled = false;
    opcao_b.disabled = false;
    opcao_c.disabled = false;
    opcao_d.disabled = false;
    button.disabled = false;
    parar_btn.disabled = false;
        for(let i=0; i< pular_btn.length; i++){
            if(abilitado[i] == 'Abilitado'){
                pular_btn[i].disabled = false;
            }
        }
};

document.addEventListener('keypress', function(e){
    if(e.which == 13 && button.disabled == false){
        confirmar_resposta()
    }
}, false);

function confirmar_resposta(){
    var sel = '';
    if(opcao_a.style.backgroundColor == 'white'){
        sel = 'opc_a';
    }else if(opcao_b.style.backgroundColor == 'white'){
        sel = 'opc_b';
    }else if(opcao_c.style.backgroundColor == 'white'){
        sel = 'opc_c';
    }else if(opcao_d.style.backgroundColor == 'white'){
        sel = 'opc_d';
    }
    if(sel == ''){
        if(animacao.style.display == 'none'){
            alert('Por favor, selecione uma resposta!')
        }
    }else{
        desabilitar();
        switch(sel){
            case 'opc_a':
                if(opcao_a.innerText == resposta[0]){
                    const timer = setTimeout(function() {
                        opcao_a.style.backgroundColor = 'greenyellow';
                        opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        pontuacao++
                        progresso(pontuacao);
                        time()
                    }, 3000)
                }else{
                    const timer = setTimeout(function() {
                        opcao_a.style.backgroundColor = 'red';
                        opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        if(opcao_b.innerText == resposta[0]){
                            opcao_b.style.backgroundColor = 'greenyellow';
                        }if(opcao_c.innerText == resposta[0]){
                            opcao_c.style.backgroundColor = 'greenyellow';
                        }if(opcao_d.innerText == resposta[0]){
                            opcao_d.style.backgroundColor = 'greenyellow';
                        }
                        quant_vidas();
                    }, 3000)
                }
                break;
    
            case 'opc_b':
                if(opcao_b.innerText == resposta[0]){
                    const timer = setTimeout(function() {
                        opcao_b.style.backgroundColor = 'greenyellow';
                        opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        pontuacao++
                        progresso(pontuacao);
                        time();
                    }, 3000)
                }else{
                    const timer = setTimeout(function() {
                        opcao_b.style.backgroundColor = 'red';
                        opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        if(opcao_a.innerText == resposta[0]){
                            opcao_a.style.backgroundColor = 'greenyellow';
                        }if(opcao_c.innerText == resposta[0]){
                            opcao_c.style.backgroundColor = 'greenyellow';
                        }if(opcao_d.innerText == resposta[0]){
                            opcao_d.style.backgroundColor = 'greenyellow';
                        }
                        quant_vidas();
                    }, 3000)
                }
                break;
    
            case 'opc_c':
                if(opcao_c.innerText == resposta[0]){
                    const timer = setTimeout(function() {
                        opcao_c.style.backgroundColor = 'greenyellow';
                        opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        pontuacao++
                        progresso(pontuacao);
                        time();
                    }, 3000)
                }else{
                    const timer = setTimeout(function() {
                        opcao_c.style.backgroundColor = 'red';
                        opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        if(opcao_a.innerText == resposta[0]){
                            opcao_a.style.backgroundColor = 'greenyellow';
                        }if(opcao_b.innerText == resposta[0]){
                            opcao_b.style.backgroundColor = 'greenyellow';
                        }if(opcao_d.innerText == resposta[0]){
                            opcao_d.style.backgroundColor = 'greenyellow';
                        }
                        quant_vidas();
                    }, 3000)
                }
                break;
    
            case 'opc_d':
                if(opcao_d.innerText == resposta[0]){
                    const timer = setTimeout(function() {
                        opcao_d.style.backgroundColor = 'greenyellow';
                        opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        pontuacao++
                        progresso(pontuacao);
                        time();
                    }, 3000)
                }else{
                    const timer = setTimeout(function() {
                        opcao_d.style.backgroundColor = 'red';
                        opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                        if(opcao_a.innerText == resposta[0]){
                            opcao_a.style.backgroundColor = 'greenyellow';
                        }if(opcao_c.innerText == resposta[0]){
                            opcao_c.style.backgroundColor = 'greenyellow';
                        }if(opcao_b.innerText == resposta[0]){
                            opcao_b.style.backgroundColor = 'greenyellow';
                        }
                        quant_vidas();
                    }, 3000)
                }
                break; 
        }
    }
     
}

function time(){
    const time = setTimeout(function() {
        deletar();
        animation(pontuacao)
        abilitar();
    }, 2000)
}

function deletar(){
    switch(resposta[1]){
        case 'dados.musica':
            dados.musica.splice(resposta[2], 1);  
            break;   
        case 'dados.esporte':
            dados.esporte.splice(resposta[2], 1);  
            break;           
        case 'dados.geografia':
            dados.geografia.splice(resposta[2], 1);  
            break;
        case 'dados.historia':
            dados.historia.splice(resposta[2], 1);  
            break;
        case 'dados.conhecimentos_gerais':
            dados.conhecimentos_gerais.splice(resposta[2], 1);  
            break;
    }
}

function progresso(pontuacao){
    let box = document.querySelectorAll('.box');
    for(let i=0; i < box.length; i++){
        box[i].style.border = 'none';
    }
    box[pontuacao].style.border = '2px solid rgb(47, 0, 255)';
}

function quant_vidas(){
    vidas--;
    q_vidas.innerText = vidas;
    const timing = setTimeout(function() {
        if(vidas > 0){
            time();
        }else{
            alert('Suas vidas acabaram, você PERDEU!');
            saldo()
        }
    }, 1000)
}

function saldo(){
    back.style.display = 'none';
    const timing = setTimeout(function() {
        _alert.style.display = 'flex';
        switch(pontuacao){
            case 0: 
                alert_nome.innerText = `Que pena ${nome[0]}!`;
                alert_valor.innerText = 'Infelizmente você não ganhou nada!'; 
                break;
            case 1: 
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 1 MIL'; 
                break;
            case 2:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 2 MIL'; 
                break;
            case 3: 
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 3 MIL'; 
                break;
            case 4: 
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 4 MIL'; 
                break;
            case 5:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 5 MIL'; 
                break; 
            case 6:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 5 MIL'; 
                break;
            case 7:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 5 MIL'; 
                break;
            case 8:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 5 MIL'; 
                break;
            case 9:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 5 MIL'; 
                break;
            case 10:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 50 MIL'; 
                break;
            case 11:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 50 MIL'; 
                break;
            case 12:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 50 MIL'; 
                break;
            case 13:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 50 MIL'; 
                break;
            case 14:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 50 MIL'; 
                break;
            case 15:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 500 MIL'; 
                break;
            case 16:
                alert_nome.innerText = `Parabéns ${nome[0]}!`;
                alert_valor.innerText = 'Você ganhou R$ 500 MIL'; 
                break;  
        }
    }, 1000)
}
function sair_alert(){
    _alert.style.display = 'none';
    location.reload();
}


for(let i = 0; i < pular_btn.length; i++){
    pular_btn[i].addEventListener('click', function(){
        esc_materia();
        pular_btn[i].disabled = true;
        abilitado[i] = 'Desabilitado';
    })
}

parar_btn.addEventListener("click",function(){
    back.style.display = "none";
    const timing = setTimeout(function() {
        _alert.style.display = 'flex';
        switch(pontuacao){
            case 0: 
            alert_nome.innerText = `Que pena ${nome[0]}!`;
            alert_valor.innerText = 'Infelizmente você não ganhou nada!'; 
            break;
        case 1: 
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 1 MIL'; 
            break;
        case 2:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 2 MIL'; 
            break;
        case 3: 
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 3 MIL'; 
            break;
        case 4: 
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 4 MIL'; 
            break;
        case 5:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 5 MIL'; 
            break; 
        case 6:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 10 MIL'; 
            break;
        case 7:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 20 MIL'; 
            break;
        case 8:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 30 MIL'; 
            break;
        case 9:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 40 MIL'; 
            break;
        case 10:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 50 MIL'; 
            break;
        case 11:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 100 MIL'; 
            break;
        case 12:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 200 MIL'; 
            break;
        case 13:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 300 MIL'; 
            break;
        case 14:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 400 MIL'; 
            break;
        case 15:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 500 MIL'; 
            break;
        case 16:
            alert_nome.innerText = `Parabéns ${nome[0]}!`;
            alert_valor.innerText = 'Você ganhou R$ 1 MILHÃO'; 
            break;
        }
    }, 1000)
})

function valores() {
    let errar = document.querySelector('.valor_errar');
    let pare = document.querySelector('.valor_parar');
    let acertar = document.querySelector('.valor_acertar');
    switch(pontuacao){
        case 0: errar.innerText = 'R$ 0'; pare.innerText = 'R$ 0'; acertar.innerText = 'R$ 1 MIL'; break;
        case 1: errar.innerText = 'R$ 1 MIL'; pare.innerText = 'R$ 1 MIL'; acertar.innerText = 'R$ 2 MIL'; break;
        case 2: errar.innerText = 'R$ 2 MIL'; pare.innerText = 'R$ 2 MIL'; acertar.innerText = 'R$ 3 MIL'; break;
        case 3: errar.innerText = 'R$ 3 MIL'; pare.innerText = 'R$ 3 MIL'; acertar.innerText = 'R$ 4 MIL'; break;
        case 4: errar.innerText = 'R$ 4 MIL'; pare.innerText = 'R$ 4 MIL'; acertar.innerText = 'R$ 5 MIL'; break;
        case 5: errar.innerText = 'R$ 5 MIL'; pare.innerText = 'R$ 5 MIL'; acertar.innerText = 'R$ 10 MIL'; break;
        case 6: errar.innerText = 'R$ 5 MIL'; pare.innerText = 'R$ 10 MIL'; acertar.innerText = 'R$ 20 MIL'; break;
        case 7: errar.innerText = 'R$ 5 MIL'; pare.innerText = 'R$ 20 MIL'; acertar.innerText = 'R$ 30 MIL'; break;
        case 8: errar.innerText = 'R$ 5 MIL'; pare.innerText = 'R$ 30 MIL'; acertar.innerText = 'R$ 40 MIL'; break;
        case 9: errar.innerText = 'R$ 5 MIL'; pare.innerText = 'R$ 40 MIL'; acertar.innerText = 'R$ 50 MIL'; break;
        case 10: errar.innerText = 'R$ 50 MIL'; pare.innerText = 'R$ 50 MIL'; acertar.innerText = 'R$ 100 MIL'; break;
        case 11: errar.innerText = 'R$ 50 MIL'; pare.innerText = 'R$ 100 MIL'; acertar.innerText = 'R$ 200 MIL'; break;
        case 12: errar.innerText = 'R$ 50 MIL'; pare.innerText = 'R$ 200 MIL'; acertar.innerText = 'R$ 300 MIL'; break;
        case 13: errar.innerText = 'R$ 50 MIL'; pare.innerText = 'R$ 300 MIL'; acertar.innerText = 'R$ 400 MIL'; break;
        case 14: errar.innerText = 'R$ 50 MIL'; pare.innerText = 'R$ 400 MIL'; acertar.innerText = 'R$ 500 MIL'; break;
        case 15: errar.innerText = 'R$ 500 MIL'; pare.innerText = 'R$ 500 MIL'; acertar.innerText = 'R$ 1 MILHÃO'; break;
    }
}