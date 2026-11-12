const tablero = document.querySelectorAll('#tablero > div');
const div1 = tablero[0];
let gameOver = false;
let fila = 0;
let columna = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let player = [columna[0], fila];
let pos = 0;
let blockAzul = console.log(div1.children);
const pacMan = document.createElement('img');
pacMan.classList.add('player');
pacMan.src = '../img/Player.png';

function creadorJugador() {
  div1.replaceChildren(pacMan);

  // let puntoexistente = div1.querySelector('.point');
  // puntoexistente.remove();
}
function generarTablero() {
  tablero.forEach((e) => {
    if (!e.classList.contains('border-blue-700')) {
      const point = document.createElement('img');
      point.src = '../img/Point.png';
      point.classList.add('point');
      e.appendChild(point);
    }
  });
}

function tableroPropio() {
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 10; j++) {
      console.log(`Columna:${i} Fila:${j}`);
    }
  }
}
function procesaTecla(e) {
  let dondeEstoy;
  e.preventDefault(); // evita que la página haga scroll con las flechas
  // if (e.repeat || gameOver) return 'hola'; // ignorar si se mantiene la tecla o el juego ha terminado
  switch (e.keyCode) {
    case 37: // flecha izquierda
      // mover jugador a la izquierda

      playertemp = [columna[pos], fila - 1];

      if (
        player[1] != '0' &&
        !document.getElementById(playertemp.join('')).classList.contains('border-blue-700')
      ) {
        player = [columna[pos], --fila];
        dondeEstoy = document.getElementById(player.join(''));
        dondeEstoy.replaceChildren(pacMan);
      }
      break;
    case 38: // flecha arriba
      // mover jugador hacia arriba
      playertemp = [columna[pos - 1], fila];
      if (
        player[0] != 'A' &&
        !document.getElementById(playertemp.join('')).classList.contains('border-blue-700')
      ) {
        player = [columna[--pos], fila];
        dondeEstoy = document.getElementById(player.join(''));
        dondeEstoy.replaceChildren(pacMan);
      }
      break;
    case 39: // flecha derecha
      playertemp = [columna[pos], fila + 1];

      if (
        player[1] != '10' &&
        !document.getElementById(playertemp.join('')).classList.contains('border-blue-700')
      ) {
        player = [columna[pos], ++fila];
        dondeEstoy = document.getElementById(player.join(''));
        dondeEstoy.replaceChildren(pacMan);
      }

      break;
    case 40: // flecha abajo
      // mover jugador hacia abajo
      playertemp = [columna[pos + 1], fila];
      if (
        player[0] != 'H' &&
        !document.getElementById(playertemp.join('')).classList.contains('border-blue-700')
      ) {
        player = [columna[++pos], fila];
        dondeEstoy = document.getElementById(player.join(''));
        dondeEstoy.replaceChildren(pacMan);
      }

      break;
  }
}

function teclaPulsada() {
  window.document.addEventListener('keydown', procesaTecla);
}
generarTablero();
creadorJugador();
teclaPulsada();
