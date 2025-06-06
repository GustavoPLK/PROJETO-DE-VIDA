const botoes = document.querySelectorAll(".botoes");
const textos = document.querySelectorAll("aba.conteudo");

for (let i = 0; i < botoes.leght; j++){
botoes =[i].onclick = function () {

    for (let j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo"); 
    }

botoes[j].classList.add("ativo");
textos[j].classList.remove("ativo");
}
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-12-20T00:00:00");
const tempoObjetivo2 = new Date("2026-01-01T00:00:00");
const tempoObjetivo3 = new Date("2026-03-01T00:00:00");
const tempoObjetivo4 = new Date("2027-01-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function atualizaCronometro(){
for (let i=0; i<contadores.length;i++){
    contadores[i].textContent = calculaTempo(tempos[i]);
}

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date()
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %=60;
    horas %=24;

    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}