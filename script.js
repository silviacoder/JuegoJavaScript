/**function splitWords(text) {

    let words = text.split(' ')
    return words;
  
  }
  
  let command = "USAR LLAVE";
  let wordList = splitWords(command);
  
  console.log(wordList[0]);
  console.log(wordList[1]);*/

  /**let board = [

              ["congelacion","visceras","recepcion","espera","direccion"],
              ["cadaveres","anatomia", "servicios","hall","despacho"],
              ["escaleras2","pasillo","sotano","resbaladizo","reuniones"],
              ["vestibulo_2","escaleras_1","biblioteca","vestibulo","escaleras_3"],
              ["laboratorio","almacen","farmacia","archivo","servidores"] ]

  console.log(board);*/

  let board = [];
    board [0] = [];
    board [0][0] = "Estás en la sala de congelación";
    board [0][1] = "Esta es la sala de vísceras";
    board [0][2] = "Esta la sala de recepción del edificio en donde tendrás que encontrar la llave de la puerta principal para poder salir del edificio. SUERTE";
    board [0][3] = "Esta es la sala de espera";
    board [0][4] = "Esta es el despacho de dirección";

    board [1] = [];
    board [1][0] = "Estás en la sala de cadáveres d";
    board [1][1] = "Estás en la sala de anatomía";
    board [1][2] = "Estos son los wc";
    board [1][3] = "Estás en el hall";
    board [1][4] = "Estás en uno de los despachos";

    board [2] = [];
    board [2][0] = "Estas son las escaleras que bajan a la sala de cadáveres";
    board [2][1] = "Estás en el pasillo que lleva al sótano";
    board [2][2] = "Este es el sótano";
    board [2][3] = "Estas escaleras son resbaladizas";
    board [2][4] = "Esta es la sala de reuniones";

    board [3] = [];
    board [3][0] = "Este es vestíbulo lleva al laboratorio";
    board [3][1] = "Estas escaleras llevan al almacén";
    board [3][2] = "Esta es la biblioteca";
    board [3][3] = "Este otro de los vestíbulos del edificio que lleva al archivo";
    board [3][4] = "Estas escaleras llevan a la sala de servidores";

    board [4] = [];
    board [4][0] = "Este es el laboratorio";
    board [4][1] = "Este es el almacén";
    board [4][2] = "Esta es la farmacia";
    board [4][3] = "Este es el archivo";
    board [4][4] = "Esta es la sala de servidores";

console.log(board[4][2]);

let verbs = new Map();
    verbs.set("ir","true");
    verbs.set("coger","true")
    verbs.set("ver","true");
    verbs.set("hablar","true");
    verbs.set("usar","true");

    console.log(verbs.has("ir"));




getVal();

function getVal(){
const val = document.querySelector("input").value;
console.log(val);

}