const COLUNAS = 20;
const LINHAS = 20;
const PONTOS_POR_COMIDA = 10;
const VELOCIDADE = parseInt(locarStorage.getItem("snake_velocidade")) || 130;

let cobra = [];
let direcao = {x: 1, y: 0}; // Começa indo para a direita
let proximaDirecao = {x: 1, y: 0}; //Dá o passo pra direita
let comida = {x: 0, y: 0}; //Ponto inicial da comida
let pntuacao = 0;
let recorder = parseInt(localStorage.getitem("snake_recorde")) || 0;
let intervalo = null;
let emJogo = false;

//GRADE 
const grade = document.getElementById("grade");
let celulas = []; // aqui vamos armazenar as 400 células
function criarGrade(){
    grade.innerHTML = "";
    celulas = [];

    for (let y = 0; y < LINHAS; y++){
        const linha = [];

        for (let x = 0; x < COLUNAS; x++){
            const celula = document.createElement("div");
            celula.className = "celula";
            grade.appendChild(celula);
            linha.push(celula);
        }
        celulas.push(linha);
    }
}

function limparGrade (){
    for (let y = 0; y<LINHAS; y++){
        for(let x = 0; x < LINHAS; x++){
            celulas[y][x].className = "celula";
        }
    }
}

function renderizar (){
    limparGrade();

    //desenhar a comida
    celulas[comida.y][comida.x].classList.add("comida");

    //Desenhar o corpo da cobra
    for (let i = 1; i < cobra.length; i++){
        celulas[cobra[i].y][cobra[i].x].classList.add("cobra");
    }//cobra = [cabeça, seguimento do corpo, segmento do corpo]

    celulas[cobra[0].y][cobra[0].x].classList.add("cabeca");
}