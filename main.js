const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

//Código omitido

const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}


const contadores = document.querySelectorAll(".contador");

const contadores = document.querySelectorAll(".contador");

contadores[0].textContent = "Contagem regressiva";

const contadores = document.querySelectorAll(".contador"); 
const tempoObjetivo1 = new Date("2024-10-05"); 

contadores[0].textContent = tempo0bjetivo1; 

const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;

contadores[0].textContent = calculaTempo(tempoObjetivo1);

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = tempoFinal / 1000;
  return segundos;
}

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    return segundos;
  }

  function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    return minutos;
  }

  function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    return horas;
  }

  function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    return dias;
  }
  const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
  function calculaTempo(tempoObjetivo) {
    // código omitido…
    return dias + horas;
  }
  function calculaTempo(tempoObjetivo) {
    // código omitido…
    return dias + "dias" + horas;
  }
  function calculaTempo(tempoObjetivo) {
    // código omitido…
    return dias + " dias " + horas;
  }
  function calculaTempo(tempoObjetivo) {
    // código omitido…
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
  }
  function calculaTempo(tempoObjetivo) {
    // código omitido…
    segundos %= 60;
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
  }
  function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");
contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadores[1].textContent = calculaTempo(tempoObjetivo2);
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
contadores[0].textContent = calculaTempo(tempos[0]);
for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
}
function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}
atualizaCronometro();
setInterval(atualizaCronometro(), 1000);
setInterval(atualizaCronometro, 1000);
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
const tempoObjetivo1 = new Date("2020-10-05T00:00:00");
return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
if (tempoFinal > 0){
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
} else {
    return "Prazo Finalizado";
}

let dias = Math.floor(horas / 24);

for (let i=0; i<contadores.length;i++){
    // contadores[i].textContent = calculaTempo(tempos[i]);   
    }

    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    } else {
        return [0,0,0,0];
    }
    function atualizaCronometro(){
        document.getElementById("dias0").calculaTempo(tempos[0]);
        for (let i=0; i<contadores.length;i++){
           // contadores[i].textContent = calculaTempo(tempos[i]);   
        }

        function atualizaCronometro(){
            document.getElementById("dias0").textContent = calculaTempo(tempos[0]);
            for (let i=0; i<contadores.length;i++){
               // contadores[i].textContent = calculaTempo(tempos[i]);   
            }
            function atualizaCronometro(){
                document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
                for (let i=0; i<contadores.length;i++){
                   // contadores[i].textContent = calculaTempo(tempos[i]);   
                }
                function atualizaCronometro(){
                    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
                    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
                    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
                    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
                
                    for (let i=0; i<contadores.length;i++){
                       // contadores[i].textContent = calculaTempo(tempos[i]);   
                    }
                    if (tempoFinal > 0){
                        return [dias,horas,minutos,segundos];
                    } else {
                        return [0,0,0,0];
                    }
                    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
                    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
                    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
                    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
                    document.getElementById("seg1").textContent = calculaTempo(tempos[1])[3];
                    function atualizaCronometro(){
                        document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
                        document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
                        document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
                        document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
                    
                        for (let i=0; i<contadores.length;i++){
                            document.getElementById("seg1").textContent = calculaTempo(tempos[1])[3]; 
                        }
                    }
                    for (let i=0; i<contadores.length;i++){
                        document.getElementById("seg1").textContent = calculaTempo(tempos[i])[3]; 
                    }
                    for (let i=0; i<contadores.length;i++){
                        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3]; 
                    }
                    for (let i=0; i<contadores.length;i++){
                        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
                        console.log("seg"+i);
                    }
                    function atualizaCronometro(){
                        document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
                        document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
                        document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
                    
                        for (let i=0; i<contadores.length;i++){
                            document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
                            console.log("seg"+i);
                        }
                    }
                    function atualizaCronometro(){
                        for (let i=0; i<contadores.length;i++){
                            document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
                            document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
                            document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
                            document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
                            console.log("seg"+i);
                        }
                    }
                    console.log("seg"+i);
                    const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
                                                                                                                                                                                              