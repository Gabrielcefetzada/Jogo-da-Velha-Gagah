const player1 = "X";        // declara players
const player2 = "O";
var playerTime = player1;   // declara vez do jogador
var gameOver = false;       // inicializa gameover como falso


atualizarOmostrador();
inicializarEspacos();

function atualizarOmostrador(){

 if(gameOver){  // se game over = true, não faz nada
  return;
 }

 
 if(playerTime == player1 ){   // atualiza o painel "mostrador" com 'X' ou 'O'

    var player = document.querySelectorAll("div#mostrador img")[0];
    player.setAttribute("src","imagens/x.png");
 }else{

    var player = document.querySelectorAll("div#mostrador img")[0];
    player.setAttribute("src","imagens/o.png");
 }
}

 function inicializarEspacos(){
 
  var espacos = document.getElementsByClassName("espaco");   // percorrer todos os espaços e adicionar um evento de click a eles
  for (var i = 0; i < espacos.length; i++) {
   espacos[i].addEventListener("click",function(){
     if(gameOver){
      return;      // se game over = true, não faz nada
    }

    if(this.getElementsByTagName("img").length == 0){  // se não tiver nenhuma imagem, adiciona a correspondente ao jogador
     if(playerTime == player1){
        this.innerHTML = "<img src='imagens/x.png' class='aa'>";
        this.setAttribute("jogada",player1);
          playerTime = player2;
     }
     else{
      this.innerHTML = "<img src='imagens/o.png' class='bb'>";
      this.setAttribute("jogada",player2);
        playerTime = player1;
     }

            atualizarOmostrador();  // atualiza o painel
            verificarVencedor(); // quando estiverem todos espaços preenchidos

            }
        });
    }
}

async function verificarVencedor() {

var a1 = document.getElementById("a1").getAttribute("jogada"); // pega o id e depois o a valor do atributo
var a2 = document.getElementById("a2").getAttribute("jogada");
var a3 = document.getElementById("a3").getAttribute("jogada");

var b1 = document.getElementById("b1").getAttribute("jogada");
var b2 = document.getElementById("b2").getAttribute("jogada");
var b3 = document.getElementById("b3").getAttribute("jogada");

var c1 = document.getElementById("c1").getAttribute("jogada");
var c2 = document.getElementById("c2").getAttribute("jogada");
var c3 = document.getElementById("c3").getAttribute("jogada");

var vencedor = ""; // ainda inexistente, portanto = "";

if((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a2 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")){ // testa todas as possibilidades de vitoria
    vencedor = a1;
}

else if((b2 == b1 && b2 == b3 && b1 != "" ) || (b2 == a2 && b2 == c2 && b2 != "")){
    vencedor = b2;
} 

else if((c3 == c2 && c3 == c1)||(c3 == a3 && c3 == b3)&&(c3 != "")){
        vencedor = c3;
}

if((a1 != "" && a2 != "" && a3 != "" && b1 !="" && b2 !="" && b3 != "" && c1 != "" && c2 !="" && c3 !="" && vencedor == "")) {
     await new Promise(resolve => setTimeout(resolve, 50)); //besse aawait é para o html carregar ao mesmo tempo do js
     alert("empate");
     gameOver = true;
 }

if(vencedor != ""){
  gameOver = true;

  await new Promise(resolve => setTimeout(resolve, 50)); // esse aawait é para o html carregar ao mesmo tempo do js
  document.getElementById("mostravencedor").innerHTML ="Vencedor: " + vencedor;
  document.getElementById("mostravencedor").style.backgroundColor = "#21DE24";
}

}

let espacoss = document.getElementsByClassName("espaco");
let reinicia = document.getElementById("botaoreinicia");
reinicia.addEventListener("click", function(){

  for(let i = 0; i < espacoss.length; i++){
    if(gameOver == true){
      espacoss[i].innerHTML = "";
      espacoss[i].setAttribute("jogada", '');
      document.getElementById("mostravencedor").innerHTML ="Divirtam-se!";
      document.getElementById("mostravencedor").style.backgroundColor = "#133337";
    }
  }

gameOver = false;

})


function start(){
  var start = document.getElementById("startgame");  // remove a div de startgame

  if(start.style.display == 'none'){
    start.style.display = 'block';
  } else {
    start.style.display = 'none';
  }
}


