const tablero = document.querySelectorAll('#tablero > div');
const div1 = tablero[0];
const puntuacion = document.getElementById('puntuacion');
let gameOver = false;
let fila = 0;
let columna = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let player = [columna[0], fila];
let pos = 0;
let blockAzul = console.log(div1.children);
let exitPoint = 0;
let puntuacionActual = 0;
let contImg = 0;
let arrayTime = [];
const pacMan = document.createElement('img');
pacMan.classList.add('player');
pacMan.src = '../img/Player.png';
function conseguirPuntos(dondeEstoy) {
  if (dondeEstoy.firstElementChild?.className == 'point') {
    puntuacionActual += 100;
    puntuacion.value = puntuacionActual;
  }
}
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
function limpiarTiem(arrayTime) {
  arrayTime.forEach((element) => {
    if (element != null) {
      clearInterval(element);
    } else {
      ('NO ENTRES');
    }
  });
}
function procesaTecla(e) {
  let dondeEstoy;
  e.preventDefault(); // evita que la página haga scroll con las flechas
  if (e.repeat || gameOver) return; // ignorar si se mantiene la tecla o el juego ha terminado

  switch (e.keyCode) {
    case 37: // flecha izquierda
      // mover jugador a la izquierda
      limpiarTiem(arrayTime);
      ArrayPacMan = [
        'Player.png',
        'PlayerL-1.png',
        'PlayerL-2.png',
        'PlayerL-3.png',
        'PlayerL-4.png',
      ];
      contImg = 1;
      let moveIzquierda = setInterval(() => {
        if (contImg != 4) {
          pacMan.src = '../img/' + ArrayPacMan[contImg];
          console.log(contImg);
          contImg++;
        } else {
          contImg = 0;
        }
      }, 100);
      arrayTime.push(moveIzquierda);
      playertemp = [columna[pos], fila - 1];

      if (
        player[1] != '0' &&
        !document.getElementById(playertemp.join('')).classList.contains('border-blue-700')
      ) {
        player = [columna[pos], --fila];
        dondeEstoy = document.getElementById(player.join(''));
        console.log(dondeEstoy);
        conseguirPuntos(dondeEstoy);
        dondeEstoy.replaceChildren(pacMan);
      }
      break;
    case 38: // flecha arriba
      // mover jugador hacia arriba
      limpiarTiem(arrayTime);
      ArrayPacMan = ['Player.png', 'PlayerU-1.png', 'PlayerU-2.png'];
      contImg = 1;
      let moveArriba = setInterval(() => {
        if (contImg != 3) {
          pacMan.src = '../img/' + ArrayPacMan[contImg];
          console.log(contImg);
          contImg++;
        } else {
          contImg = 0;
        }
      }, 100);
      arrayTime.push(moveArriba);
      playertemp = [columna[pos - 1], fila];
      if (
        player[0] != 'A' &&
        !document.getElementById(playertemp.join('')).classList.contains('border-blue-700')
      ) {
        player = [columna[--pos], fila];
        dondeEstoy = document.getElementById(player.join(''));
        conseguirPuntos(dondeEstoy);
        dondeEstoy.replaceChildren(pacMan);
      }
      break;
    case 39: // flecha derecha
      contImg = 1;
      limpiarTiem(arrayTime);
      ArrayPacMan = [
        'Player.png',
        'PlayerR-1.png',
        'PlayerR-2.png',
        'PlayerR-3.png',
        'PlayerR-4.png',
      ];

      let moveDerecha = setInterval(() => {
        if (contImg != 4) {
          pacMan.src = '../img/' + ArrayPacMan[contImg];
          console.log(contImg);
          contImg++;
        } else {
          contImg = 0;
        }
      }, 100);
      arrayTime.push(moveDerecha);
      playertemp = [columna[pos], fila + 1];

      if (
        player[1] != '10' &&
        !document.getElementById(playertemp.join('')).classList.contains('border-blue-700')
      ) {
        player = [columna[pos], ++fila];
        dondeEstoy = document.getElementById(player.join(''));
        console.log(dondeEstoy);
        conseguirPuntos(dondeEstoy);
        dondeEstoy.replaceChildren(pacMan);
      }

      break;
    case 40: // flecha abajo
      // mover jugador hacia abajo
      contImg = 1;
      limpiarTiem(arrayTime);
      ArrayPacMan = ['Player.png', 'PlayerD-1.png', 'PlayerD-2.png'];

      let moveBajar = setInterval(() => {
        if (contImg != 3) {
          pacMan.src = '../img/' + ArrayPacMan[contImg];
          console.log(contImg);
          contImg++;
        } else {
          contImg = 0;
        }
      }, 100);
      arrayTime.push(moveBajar);
      playertemp = [columna[pos + 1], fila];
      if (
        player[0] != 'H' &&
        !document.getElementById(playertemp.join('')).classList.contains('border-blue-700')
      ) {
        player = [columna[++pos], fila];
        dondeEstoy = document.getElementById(player.join(''));
        conseguirPuntos(dondeEstoy);
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
