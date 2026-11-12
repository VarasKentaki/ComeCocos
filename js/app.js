const point = document.createElement('img');
const tablero = document.querySelectorAll('#tablero > div');
const div1 = tablero[0];
let gameOver = false;
let fila = 0;
let columna = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'h'];
let player = [columna[0], fila];
console.log(div1.children);
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
generarTablero();
creadorJugador();
function tableroPropio() {
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 10; j++) {
      console.log(`Columna:${i} Fila:${j}`);
    }
  }
}
function procesaTecla(e) {
  e.preventDefault(); // evita que la página haga scroll con las flechas
  // if (e.repeat || gameOver) return 'hola'; // ignorar si se mantiene la tecla o el juego ha terminado
  let pos = 0;
  switch (e.keyCode) {
    case 37: // flecha izquierda
      // mover jugador a la izquierda
      if (tablero[fila].id != tablero[0].id) {
        player = [columna[--pos], fila];
        document.getElementById(player.join(''));
      }
      break;
    case 38: // flecha arriba
      // mover jugador hacia arriba

      break;
    case 39: // flecha derecha
      // mover jugador a la derecha
      if (tablero[fila].id != tablero[0].id) {
        player = [columna[pos], ++fila];
        document.getElementById(player.join('')).appendChild(pacMan);
      }

      break;
    case 40: // flecha abajo
      // mover jugador hacia abajo
      if (tablero[fila].id != tablero[0].id) {
        player = [columna[--pos], fila];
        document.getElementById(player.join(''));
      }
      break;
  }
}
function teclaPulsada() {
  window.document.addEventListener('keydown', procesaTecla);
}
teclaPulsada();
