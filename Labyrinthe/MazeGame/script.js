var perso = "p";
var trap = 5;
var msg= document.getElementById("message");
var pls= document.getElementById("pls");
var img;
var block;
// variables pour gérer la position 
var x = 0;
var y = 1;

var win;
var level = 1;

// variable pour initialiser le timer 
var seconde = 0;
var minutes = 0;
var timerTotal;


// fonction qui permet de start le game 
function start(){
  // appel la fonction piege et de plus fais spawn 3 piege 
  piege(3);
  // permet de placer le perso
  board[x][y] = perso;
  // affiche le Labyrinthe 
  console.log(board);
  
  //permet de mettre a jour le timer toute les secondes
  timerTotal = window.setInterval(startTimer,1000);
  //permet d'afficher la boite de dialogue:
  msg.style.visibility="visible";
  createTable();
  
  
}



// creation du Première etages les 1 sont les mures et le 0 le chemin 
var board = [
  [ 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [ 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
  [ 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
  [ 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var board1 = [
  [ 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [ 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
  [ 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
  [ 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// creation du Deuxième etages
var board2 = [
  [ 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [ 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [ 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1],
  [ 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
  [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [ 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [ 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//// creation du Troisième etages
var board3 = [
  [ 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


// Début des fonctions de déplacement 
//fonction qui permet de deplacer le perso vers le haut
function haut(){
  msg.innerHTML="...";
  // condition qui permet de remplacer le perso par 0 pour garder le chemin 
  if (board[x][y] == "p"){
    board[x][y] = 0;
  }

  // condition qui dit que si la prochaine valeur sur la quelle je vais me deplacer 
  // est 1 donc un mur alors tu ni va pas et tu envoie "aie"
  if (board[x-1][y] == 1){
    board[x][y] = "p";
    msg.innerHTML="aie";
  }
  // sinon si la valeur est 0 donc le chemin, tu peut te déplacer et nous montrer le 
  // résultat 
  else if (board[x-1][y] == 0){
    x = x-1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }
  // condition qui permet de changer d'étages donc si la valeur sur la quelle tu va te
  // tu change la variable lvl,
  // tu montre le resultat et tu indique que la personne à fini le lvl
  else if (board[x-1][y] == 3){
    x = x-1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
    console.log("Fin du level: " + level);
    level += 1;
    // Appelle de la fonction qui permet de changer de niveau
    switchlevel()
  }
  // condition pour dire si on a win donc si la prochaine case sur la quelle tu
  // te déplacer esr 4 alors (win=true)
  else if (board[x-1][y] == 4){
    x = x-1;
    board[x][y] = 0;
    console.log(board);
    updateLaby();
    win();
    // myTableDiv.removeChild(table);
    // clearInterval(timerTotal);
    // alert("Vous avez gagner !! Avec un temps de : " + minutes + ":" + seconde)
  }
  
  // condition qui dit que si la prochaine valeur sur la quelle je vais me deplacer 
  // est 5 alors tu revient a la posistion de départ et tu envoir "oh mince !!"
  // 
  else if (board[x-1][y] == 5){
    if (board[x][y] == "p"){
      board[x][y] = 0;
    }
    board[x-1][y] = 0;
    img= document.createElement("img");
    img.src="image/184508-full.jpg";
    block= document.getElementById("pls");
    block.appendChild(img);
    setTimeout(function(){img.src = "";}, 1000);
    msg.innerHTML="💣💥🤕";
    x = 0;
    y = 1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }
}

function bas(){
  msg.innerHTML="...";
  if (board[x][y] == "p"){
    board[x][y] = 0;
  }

  if (board[x+1][y] == 1){
    board[x][y] = "p";
    msg.innerHTML="aie";
  }
  else if (board[x+1][y] == 0){
    x = x+1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
    // board.splice([x], [y], perso);
  }

  else if (board[x+1][y] == 3){
    x = x+1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
    console.log("Fin du level: " + level);
    level += 1;
    switchlevel()
  }else if (board[x+1][y] == 4){
    x = x+1;
    board[x][y] = 0;
    console.log(board);
    updateLaby();
    win();
    // myTableDiv.removeChild(table);
    // clearInterval(timerTotal);
    // console.log("Vous avez gagner !! Avec un temps de : " + minutes + ":" + seconde)
  }

  else if (board[x+1][y] == 5){
    if (board[x][y] == "p"){
      board[x][y] = 0;
    }
    board[x+1][y] = 0;
    img= document.createElement("img");
    img.src="https://risibank.fr/cache/stickers/d1388/138896-full.gif";
    block= document.getElementById("pls");
    block.appendChild(img);
    setTimeout(function(){img.src = "";}, 2000);
    msg.innerHTML="💣💥🤕"
    x = 0;
    y = 1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }
}

function droite(){
  msg.innerHTML="...";
  if (board[x][y] == "p"){
    board[x][y] = 0;
  }
  
  if (board[x][y+1] == 1){
    board[x][y] = "p";
    msg.innerHTML="aie";
  }
  else if (board[x][y+1] == 0){
    y = y+1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }

  else if (board[x][y+1] == 3){
    y = y+1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
    console.log("Fin du level: " + level);
    level += 1;
    switchlevel()
  }else if (board[x][y+1] == 4){
    y = y+1;
    board[x][y] = 0;
    console.log(board);
    updateLaby();
    win();
    // myTableDiv.removeChild(table);
    // clearInterval(timerTotal);
    // console.log("Vous avez gagner !! Avec un temps de : " + minutes + ":" + seconde)
  }

  else if (board[x][y+1] == 5){
    if (board[x][y] == "p"){
      board[x][y] = 0;
    }
    board[x][y+1] = 0;
    img= document.createElement("img");
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5c07EDoOSALJ2cl-JC-u0kWuVVhT_McFvig&usqp=CAU";
    block= document.getElementById("pls");
    block.appendChild(img);
    setTimeout(function(){img.src = "";}, 2000);
    msg.innerHTML="💣💥🤕";
    x = 0;
    y = 1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }
}

function gauche(){
  msg.innerHTML="...";
  if (board[x][y] == "p"){
    board[x][y] = 0;
  }
  
  if (board[x][y-1] == 1){
    board[x][y] = "p";
    msg.innerHTML="aie";
    
  }
  else if (board[x][y-1] == 0){
    y = y-1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }

  else if (board[x][y-1] == 3){
    y = y-1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
    console.log("Fin du level: " + level);
    level += 1;
    switchlevel()
  }else if (board[x][y-1] == 4){
    y = y-1;
    board[x][y] = 0;
    board[x][y-1] = perso;
    console.log(board);
    updateLaby();
    win();
    // myTableDiv.removeChild(table);
    // clearInterval(timerTotal);
    // console.log("Vous avez gagner !! Avec un temps de : " + minutes + ":" + seconde)
  }

  else if (board[x][y-1] == 5){
    if (board[x][y] == "p"){
      board[x][y] = 0;
    }
    board[x][y-1] = 0;
    img= document.createElement("img");
    img.src="data:image/jpeg;base64,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";
    block= document.getElementById("pls");
    block.appendChild(img);
    setTimeout(function(){img.src = "";}, 2000);
    msg.innerHTML="💣💥🤕";
    x = 0;
    y = 1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }
}
// Fin des fonctions de déplacement 

// fonction qui permet de changer de lvl
function switchlevel(){
    board = board;
    x = 0;
    y = 1;
    board[x][y] = perso;
    piege(3)
    console.log(board);
    updateLaby()
  // condition qui dit que si le (lvl==2) alors tu remplace l'ancien Labyrinthe
  // par le nouveau Labyrinthe (étage)
  // permet aussi d'ajouter des pieges en Appellent la fonction piege(10)
  if (level == 2){
    msg.innerHTML=" Facile! 😎"
    board = board2;
    x = 0;
    y = 1;
    board[x][y] = perso;
    piege(6)
    console.log("début du level: " + level);
    console.log(board);
    updateLaby()
  }
  // condition qui dit que si le (lvl==3) alors tu remplace l'ancien Labyrinthe
  // par le nouveau Labyrinthe (étage)
  // permet aussi d'ajouter des pieges en Appellent la fonction piege(10) 
  else if (level == 3){
    msg.innerHTML=" imbattable! 🤸🏾‍♀️"
    board = board3;
    x = 0;
    y = 1;
    board[x][y] = perso;
    piege(10)
    console.log("début du level: " + level);
    console.log(board);
    updateLaby()
  }
}


// fonction pour géneré des pieges aleatoire dans le Labyrinthe  
function piege(nbpieges){

  z = 0;

  // boucle pour ajouter le nombre de piege voulu dans chaque Labyrinthe 
  while (z < nbpieges){
    var min= 0; 
    var max= board.length;
    
    // permet de généré des nombre aléatoire
    var random = Math.floor(Math.random() * (max - min)) + min; 

    // ajoute les pieges a leur posistion
    board[random][random] = trap;
    board[random][random] = trap;
    z +=1;
  }
}




// fonction timer
function startTimer(){
  seconde++;

  // si seconde/ 60 est Strictement egale a 1 alors seconde sera egale a 0 et minute
  // augmente de 1
  if (seconde/60 ===1){
    seconde=0;
    minutes++;

  }
  // si les secondes son inferieur a 10 tu rajoute un 0 devant 
  if (seconde < 10){
    seconde = "0"+seconde;
  }

  // permet d'afficher le temps sur html
  document.getElementById('timer').innerHTML = minutes +":"+seconde; 
}
function resetTimer(){
  clearInterval(timerTotal);
  minutes = "0";
  seconde = "00";
  document.getElementById('timer').innerHTML = minutes +":"+seconde;
}


var table;
var myTableDiv;


// fonction qui permet de créer le tableau 
function createTable(){
  myTableDiv = document.getElementById("myDynamicTable");

  table = document.createElement('TABLE');
  table.setAttribute("id", "laby")

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < board.length; i++) {
    var tr = document.createElement('TR');
    tr.setAttribute("id", "TR");
    tableBody.appendChild(tr);

    for (var j = 0; j < board.length; j++) {
      var td = document.createElement('TD');
      td.setAttribute("id", "TD");
      td.width = '33';
      td.height = '33';
      td.appendChild(document.createElement('div'));
      td.appendChild(document.createTextNode(board[i][j]));
      tr.appendChild(td);
      if (board[i][j] == 1){
        td.setAttribute("id", "mur");
      }else if (board[i][j] == 5){
        td.setAttribute("id", "piege");
      }
      else if (board[i][j] == 3){
        td.setAttribute("id", "etage");
      }
      else if (board[i][j] == 0){
        td.setAttribute("id", "chemin");
      }
      else if (board[i][j] == "p"){
        td.setAttribute("id", "perso");
      }
      else if (board[i][j] == 2){
        td.setAttribute("id", "entrer");
      }
      else if (board[i][j] == 4){
        td.setAttribute("id", "fin");
      }

    }
    
  }
  myTableDiv.appendChild(table);
};

// fonction qui permet de suprimer le table et de le remplacer 
// par le tableau mis a jour; 
function updateLaby(){ 
  myTableDiv.removeChild(table);
  createTable();
}

document.onkeydown = function(event)
	{	
		if (event.keyCode == 37)  gauche(); 
		if (event.keyCode == 39) droite() ; 
		if (event.keyCode == 38) haut();  
		if (event.keyCode == 40) bas() ; 
	}


function win(){
  document.getElementById("message").style.visibility="hidden";
  var msg = ("Vous avez gagné !! Avec un temps de : " + minutes + ":" + seconde);
  myTableDiv.removeChild(table);
  clearInterval(timerTotal);
  document.getElementById("msgWinH1").innerHTML = msg;
}


let togg1 = document.getElementById("btnStart");
let d1 = document.getElementById("btnStart");
togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})