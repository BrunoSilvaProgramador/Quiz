
// var inicio = document.querySelector('div.inicio');
// inicio.style.display = 'none'




// -------------------------------------- TELA DE INICIO -----------------------------------------  


function confirmar_inicio(){

    var inicio = document.querySelector('div.inicio');
    inicio.style.display = 'none'
    saldo.style.display = 'none';
}

// -------------------------------------- TELA DE INICIO -----------------------------------------


var pergunta_tittle = document.getElementById('pergunta_tittle');
var opcao_a = document.getElementById('letra_a');
var opcao_b = document.getElementById('letra_b');
var opcao_c = document.getElementById('letra_c');
var opcao_d = document.getElementById('letra_d');
var box_perguntas = document.querySelector('div.perguntas');
var box_pergunta = document.querySelector('div.box-pergunta')
var titulo_materia = document.querySelector('h2#h2-pergunta');
var animacao = document.querySelector('div.animacao');
var dados = [0]



animacao.style.display = 'flex';
const time = setTimeout(function() {
    animacao.style.display = 'none';
}, 3500)
const timer = setTimeout(function() {
    box_pergunta.style.display = 'block';
}, 4500)



var materia = (function () {
    min = Math.ceil(1);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min + 1)) + min;
})();

if(materia == 1){
    titulo_materia.innerText = 'Música';
}
else if(materia == 2){
    titulo_materia.innerText = 'Esporte';
}
else if(materia == 3){
    titulo_materia.innerText = 'Geografia';
}
else if(materia == 4){
    titulo_materia.innerText = 'História';
}
else if(materia == 5){
    titulo_materia.innerText = 'Conhecimentos Gerais';
}




if(materia == 1){
    var pergunta = (function () {
        min = Math.ceil(1);
        max = Math.floor(3);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    })();

    if(pergunta == 1){
        pergunta_tittle.innerText = 'Em que cidade a banda Sepultura iniciou sua carreira ?';
        
        var string_a = 'Rio de Janeiro'
        var string_b = 'Brasília'
        var string_c = 'Belo Horizonte'
        var string_d = 'São Paulo'
        var resposta_p1 = string_c;
    }
    if(pergunta == 2){
        pergunta_tittle.innerText = 'Qual destes cantores participaram da formação do grupo Secos e Molhados ?';
        
        var string_a = 'Raul Seixas'
        var string_b = 'Ney Matogrosso'
        var string_c = 'Geraldo Vandré'
        var string_d = 'Gilberto Gil'
        var resposta_p1 = string_b;
    }
    if(pergunta == 3){
        pergunta_tittle.innerText = 'Qual cantor gravou a música Thriller ?';
        
        var string_a = 'Michael Jackson'
        var string_b = 'Prince'
        var string_c = 'Frank Sinatra'
        var string_d = 'George Michael'
        var resposta_p1 = string_a;
    }
}

if(materia == 2){
    var pergunta = (function () {
        min = Math.ceil(1);
        max = Math.floor(3);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    })();

    if(pergunta == 1){
        pergunta_tittle.innerText = 'esporte 1 ?';
        
        var string_a = 'Rgtrgrtiro'
        var string_b = 'Bragrtgrga'
        var string_c = 'Begtrgtrgtrzonte'
        var string_d = 'Sãogrtgtrtgaulo'
        var resposta_p1 = string_c;
    }
    if(pergunta == 2){
        pergunta_tittle.innerText = 'freferferfo do grupo Secos e Molhados ?';
        
        var string_a = 'Raufexas'
        var string_b = 'Ney Mfeogrosso'
        var string_c = 'Geraldfefo Vandré'
        var string_d = 'GilbreGil'
        var resposta_p1 = string_b;
    }
    if(pergunta == 3){
        pergunta_tittle.innerText = 'Qual cantor gravfwe Thriller ?';
        
        var string_a = 'Michfeson'
        var string_b = 'Prfence'
        var string_c = 'FranwfwSinatra'
        var string_d = 'Georwchael'
        var resposta_p1 = string_a;
    }
}

if(materia == 3){
    var pergunta = (function () {
        min = Math.ceil(1);
        max = Math.floor(1);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    })();

    if(pergunta == 1){
        pergunta_tittle.innerText = 'geografia ?';
        
        var string_a = 'Rgtrgrtiro'
        var string_b = 'Bragrtgrga'
        var string_c = 'Begtrgtrgtrzonte'
        var string_d = 'Sãogrtgtrtgaulo'
        var resposta_p1 = string_c;
    }

}
if(materia == 4){
    var pergunta = (function () {
        min = Math.ceil(1);
        max = Math.floor(1);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    })();

    if(pergunta == 1){
        pergunta_tittle.innerText = 'Historia ?';
        
        var string_a = 'Rgtrgrtiro'
        var string_b = 'Bragrtgrga'
        var string_c = 'Begtrgtrgtrzonte'
        var string_d = 'Sãogrtgtrtgaulo'
        var resposta_p1 = string_c;
    }

}
if(materia == 5){
    var pergunta = (function () {
        min = Math.ceil(1);
        max = Math.floor(1);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    })();

    if(pergunta == 1){
        pergunta_tittle.innerText = 'conhecimentos Gerais ?';
        
        var string_a = 'Rgtrgrtiro'
        var string_b = 'Bragrtgrga'
        var string_c = 'Begtrgtrgtrzonte'
        var string_d = 'Sãogrtgtrtgaulo'
        var resposta_p1 = string_c;
    }

}




























opcao_a.innerText = string_a;
opcao_b.innerText = string_b;
opcao_c.innerText = string_c;
opcao_d.innerText = string_d;


function letra_a(){
    opcao_a.style.backgroundColor = 'white';
    opcao_b.style.backgroundColor = '#9699e0';
    opcao_c.style.backgroundColor = '#9699e0';
    opcao_d.style.backgroundColor = '#9699e0';
}

function letra_b(){
    opcao_a.style.backgroundColor = '#9699e0';
    opcao_b.style.backgroundColor = 'white';
    opcao_c.style.backgroundColor = '#9699e0';
    opcao_d.style.backgroundColor = '#9699e0';
}

function letra_c(){
    opcao_a.style.backgroundColor = '#9699e0';
    opcao_b.style.backgroundColor = '#9699e0';
    opcao_c.style.backgroundColor = 'white';
    opcao_d.style.backgroundColor = '#9699e0';
}

function letra_d(){
    opcao_a.style.backgroundColor = '#9699e0';
    opcao_b.style.backgroundColor = '#9699e0';
    opcao_c.style.backgroundColor = '#9699e0';
    opcao_d.style.backgroundColor = 'white';     
}





















function confirmar_resposta(){

    if(opcao_a.style.backgroundColor == 'white' && resposta_p1 == string_a){
        const timer = setTimeout(function() {
            opcao_a.style.backgroundColor = 'greenyellow';
            opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            const time = setTimeout(function() {
                box_pergunta.style.display = 'none';
            }, 2000)
        }, 3000)
        dados[0] += 1;
        const time = setTimeout(function() {
            alert(dados)
        }, 5000)
        
    }
    else if(opcao_b.style.backgroundColor == 'white' && resposta_p1 == string_b){
        const timer = setTimeout(function() {
            opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            opcao_b.style.backgroundColor = 'greenyellow';
            opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            const time = setTimeout(function() {
                box_pergunta.style.display = 'none';
            }, 2000)
        }, 3000)
        dados[0] += 1;
        const time = setTimeout(function() {
            alert(dados)
        }, 5000)
    }
    else if(opcao_c.style.backgroundColor == 'white' && resposta_p1 == string_c){
        const timer = setTimeout(function() {
            opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            opcao_c.style.backgroundColor = 'greenyellow';
            opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            const time = setTimeout(function() {
                box_pergunta.style.display = 'none';
            }, 2000)
        }, 3000)
        dados[0] += 1;
        const time = setTimeout(function() {
            alert(dados)
        }, 5000)
    }
    else if(opcao_d.style.backgroundColor == 'white' && resposta_p1 == string_d){
        const timer = setTimeout(function() {
            opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
            opcao_d.style.backgroundColor = 'greenyellow';
            const time = setTimeout(function() {
                box_pergunta.style.display = 'none';
            }, 2000)
        }, 3000)
        dados[0] += 1;
        const time = setTimeout(function() {
            alert(dados)
        }, 5000)
        
    }
    else{
        const timer = setTimeout(function() {
            if(resposta_p1 == string_a){
                opcao_a.style.backgroundColor = 'greenyellow';
                if(opcao_b.style.backgroundColor == 'white'){
                    opcao_b.style.backgroundColor = 'red';
                    opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else if(opcao_c.style.backgroundColor == 'white'){
                    opcao_c.style.backgroundColor = 'red';
                    opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else if(opcao_d.style.backgroundColor == 'white'){
                    opcao_d.style.backgroundColor = 'red';
                    opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else{
                    opcao_c.style.backgroundColor = 'red';
                    opcao_b.style.backgroundColor = 'red';
                    opcao_d.style.backgroundColor = 'red';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
               
            }
            else if(resposta_p1 == string_b){
                opcao_b.style.backgroundColor = 'greenyellow';
                if(opcao_a.style.backgroundColor == 'white'){
                    opcao_a.style.backgroundColor = 'red';
                    opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else if(opcao_c.style.backgroundColor == 'white'){
                    opcao_c.style.backgroundColor = 'red';
                    opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else if(opcao_d.style.backgroundColor == 'white'){
                    opcao_d.style.backgroundColor = 'red';
                    opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else{
                    opcao_c.style.backgroundColor = 'red';
                    opcao_d.style.backgroundColor = 'red';
                    opcao_a.style.backgroundColor = 'red';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                
            }
            else if(resposta_p1 == string_c){
                opcao_c.style.backgroundColor = 'greenyellow';
                if(opcao_a.style.backgroundColor == 'white'){
                    opcao_a.style.backgroundColor = 'red';
                    opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else if(opcao_b.style.backgroundColor == 'white'){
                    opcao_b.style.backgroundColor = 'red';
                    opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_d.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else if(opcao_d.style.backgroundColor == 'white'){
                    opcao_d.style.backgroundColor = 'red';
                    opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else{
                    opcao_d.style.backgroundColor = 'red';
                    opcao_b.style.backgroundColor = 'red';
                    opcao_a.style.backgroundColor = 'red';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                
            }
            else if(resposta_p1 == string_d){
                opcao_d.style.backgroundColor = 'greenyellow';
                if(opcao_a.style.backgroundColor == 'white'){
                    opcao_a.style.backgroundColor = 'red';
                    opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else if(opcao_b.style.backgroundColor == 'white'){
                    opcao_b.style.backgroundColor = 'red';
                    opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_c.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else if(opcao_c.style.backgroundColor == 'white'){
                    opcao_c.style.backgroundColor = 'red';
                    opcao_b.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    opcao_a.style.backgroundColor = 'rgba(255, 255, 255, 0.808';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                else{
                    opcao_c.style.backgroundColor = 'red';
                    opcao_b.style.backgroundColor = 'red';
                    opcao_a.style.backgroundColor = 'red';
                    const time = setTimeout(function() {
                        box_pergunta.style.display = 'none';
                    }, 2000)
                }
                
            }
        }, 3000)        
    }
}

