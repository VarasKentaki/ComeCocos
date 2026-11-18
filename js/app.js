const tablero = Array.from(document.querySelectorAll('#tablero > div'));
const mejorpun = document.querySelector('.puntuacion');

const matriz = [];
let intervalArr = [];
let fila = 0;
let colum = 0;
let puntuacionCon = 0;
let id;
const segundos = document.querySelector('#segundos');

const puntuacion = document.querySelector('#puntuacion');

let gameOver = false;
function crearTabla() {
  for (let f = 0; f < 8; f++) {
    matriz[f] = [];
    for (let c = 0; c < 11; c++) {
      matriz[f].push(tablero[f * 11 + c]);
    }
  }
  return matriz;
}
function colocarPoint() {
  tablero.forEach((element) => {
    if (!element.classList.contains('border-blue-700')) {
      const imagenPoint = document.createElement('img');
      imagenPoint.src = '../img/Point.png';
      imagenPoint.classList.add('point');
      element.replaceChildren(imagenPoint);
    }
  });
}
function comprobarPoint(posicion) {
  return posicion.firstChild?.classList.contains('point');
}
const imagenPacman = document.createElement('img');
function InicJugador() {
  imagenPacman.src = '../img/Player.png';
  imagenPacman.classList.add('player');
  matriz[0][0].replaceChildren(imagenPacman);
}
function pararInterval(intervalArr) {
  console.log(intervalArr);

  if (intervalArr != null) {
    intervalArr.forEach((element) => {
      console.log(element);

      clearInterval(element);
    });
  }
}
function pulsaTeclado(e) {
  e.preventDefault();

  if (e.repeat || gameOver) return;
  switch (e.key) {
    case 'ArrowRight':
      if (colum != 10 && !matriz[fila][colum + 1]?.classList.contains('border-blue-700')) {
        comprobarPoint(matriz[fila][colum + 1]) ? (puntuacionCon += 100) : false;

        matriz[fila][++colum].replaceChildren(imagenPacman);
      }
      pararInterval(intervalArr);
      const imgRight = [
        'Player.png',
        'PlayerR-1.png',
        'PlayerR-2.png',
        'PlayerR-3.png',
        'PlayerR-4.png',
      ];
      let contRigth = 0;
      let moveRigth = setInterval(() => {
        if (contRigth != 4) {
          imagenPacman.src = '../img/' + imgRight[++contRigth];
        } else {
          contRigth = 0;
        }
      }, 100);
      intervalArr.push(moveRigth);
      break;
    case 'ArrowLeft':
      if (colum != 0 && !matriz[fila][colum - 1]?.classList.contains('border-blue-700')) {
        comprobarPoint(matriz[fila][colum - 1]) ? (puntuacionCon += 100) : false;
        matriz[fila][--colum].replaceChildren(imagenPacman);
      }
      pararInterval(intervalArr);
      const imgleft = [
        'Player.png',
        'PlayerL-1.png',
        'PlayerL-2.png',
        'PlayerL-3.png',
        'PlayerL-4.png',
      ];
      let contleft = 0;
      let movleft = setInterval(() => {
        if (contleft != 4) {
          imagenPacman.src = '../img/' + imgleft[++contleft];
        } else {
          contleft = 0;
        }
      }, 100);
      intervalArr.push(movleft);
      break;
    case 'ArrowUp':
      if (fila != 0 && !matriz[fila - 1][colum]?.classList.contains('border-blue-700')) {
        comprobarPoint(matriz[fila - 1][colum]) ? (puntuacionCon += 100) : false;
        matriz[--fila][colum].replaceChildren(imagenPacman);
      }
      pararInterval(intervalArr);
      const imgUp = ['Player.png', 'PlayerU-1.png', 'PlayerU-2.png'];
      let contUp = 0;
      let moveUp = setInterval(() => {
        if (contUp != 2) {
          imagenPacman.src = '../img/' + imgUp[++contUp];
        } else {
          contUp = 0;
        }
      }, 100);
      intervalArr.push(moveUp);
      break;
    case 'ArrowDown':
      if (fila <= 6 && !matriz[fila + 1][colum]?.classList.contains('border-blue-700')) {
        comprobarPoint(matriz[fila + 1][colum]) ? (puntuacionCon += 100) : false;
        matriz[++fila][colum].replaceChildren(imagenPacman);
      }
      pararInterval(intervalArr);
      const imgDown = ['Player.png', 'PlayerD-1.png', 'PlayerD-2.png'];
      let contDown = 0;
      let moveDown = setInterval(() => {
        if (contDown != 2) {
          imagenPacman.src = '../img/' + imgDown[++contDown];
        } else {
          contDown = 0;
        }
      }, 100);
      intervalArr.push(moveDown);
      break;
    default:
      break;
  }

  puntuacion.value = puntuacionCon;
}
function temporizador() {
  let tempo = segundos.value;
  id = setInterval(() => {
    if (tempo != 0) {
      tempo--;
      segundos.value = tempo;
    } else {
      gameOver = true;
      pararInterval(intervalArr);

      if (puntuacion.value * 1 > mejorpun.textContent * 1) {
        mejorpun.textContent = puntuacion.value * 1;
        fecha.setDate(fecha.getDate() + 1);
        fecha.setHours(0, 0, 0, 0);
        document.cookie = `Puntuacion=${mejorpun.textContent};expires=${fecha.toUTCString()}`;
      }
      clearInterval(id);
    }
  }, 100);
}

function leeCooki() {
  let cookie = document.cookie;
  if (cookie) {
    let arrayCooki = cookie.split('; ');
    arrayCooki.forEach((element) => {
      if (element.split('=')[0] == 'Puntuacion') {
        mejorpun.textContent = element.split('=')[1];
      }
    });
  }
}
document.querySelector('#partida').addEventListener('click', iniciar);
let fecha = new Date();
crearTabla();
colocarPoint();
InicJugador();
leeCooki();
function iniciar() {
  clearInterval(id);
  intervalArr = [];
  fila = 0;
  colum = 0;
  puntuacion.value = 0;
  segundos.value = 99;
  puntuacionCon = 0;
  gameOver = false;
  document.addEventListener('keydown', pulsaTeclado);
  colocarPoint();
  InicJugador();
  temporizador();
}
