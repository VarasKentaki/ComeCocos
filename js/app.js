const point = document.createElement('img');
const tablero = document.querySelectorAll('#tablero > div');
const div1 = tablero[0];
console.log(div1.children);

function creadorJugador() {
  const pacMan = document.createElement('img');
  pacMan.classList.add('player');
  pacMan.src = '../img/Player.png';

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
