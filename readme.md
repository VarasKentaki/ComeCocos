# 🚀 Reto Semana: Comecocos sin Fantasmas

## Contexto

El reto de esta semana consiste en un examen que puse para la **primera evaluación del año 2023**. 

El objetivo era crear una versión simplificada de **Comecocos**, pero **sin fantasmas**, en la que el jugador debía comer el mayor número posible de puntos antes de que se acabara el tiempo.

---

## 🔎 Objetivo del reto

- Crear un tablero con puntos que el jugador pueda comer.
- Controlar el movimiento del personaje mediante las teclas de dirección.
- Mantener la puntuación y mostrar la mejor puntuación guardada en cookies.
- Implementar un temporizador que limite la duración de la partida.

---

## Solución

La solución completa se puede ver en:

[https://www.handmadegames.org/jorge/1-evaluacion-examen-a-2023/](https://www.handmadegames.org/jorge/1-evaluacion-examen-a-2023/)

Y aquí se puede jugar:  --> [PLAY 👾](https://www.handmadegames.org/jorge/1-evaluacion-examen-a-2023/) <--

### Resumen de la implementación

- **Tablero:** se genera dinámicamente con filas y columnas, usando divs y clases CSS.
- **Jugador:** un objeto `player` con posición, dirección y sprite de animación.  
  La animación cambia según la dirección y se reproduce mediante `setInterval`.
- **Puntos:** cada casilla que no es muro (`border-blue-700`) contiene un punto (`img`) que se elimina al ser comido.
- **Movimientos:** gestionados con un `keydown` que actualiza la posición y la animación, evitando pasar a través de muros.
- **Puntuación:** al comer un punto, se suma a la puntuación actual y se actualiza la mejor puntuación si es necesario.
- **Temporizador:** cuenta regresiva que termina la partida cuando llega a 0, y guarda la mejor puntuación en cookies.

### Cómo jugar

- Abrir con LiveServer `index.html` (ya que se usan cookies).
- Pulsar el botón `Empezar partida`.
- Mover al jugador con las flechas del teclado.
- Comer todos los puntos posibles antes de que el tiempo se agote.

### Tecnologías utilizadas

- HTML y CSS para el tablero y estilos.

- JavaScript para la lógica del juego.

- Cookies para almacenar la mejor puntuación.

- Sprites para animación del jugador.

---

# Lo que debes saber antes de empezar

## 🔑 Eventos de teclado en JavaScript

En JavaScript, se puede detectar cuándo el usuario pulsa una tecla usando los eventos:

- `keydown` → se dispara cuando se presiona una tecla (y se mantiene si la tecla se mantiene pulsada).

- `keyup` → se dispara cuando se suelta una tecla.

- `keypress` → se disparaba al pulsar teclas que producen caracteres (menos usado hoy).

### **1. Escuchar el evento**

Se hace con `addEventListener` sobre window o un elemento:

```js
window.addEventListener("keydown", procesaTecla);
```
> `keydown`: tipo de evento.
> `procesaTecla`: función que se ejecuta cuando se presiona una tecla.


### **2. La función manejadora (`procesaTecla`)**
Un ejemplo útil para nuestro reto:

```js
function procesaTecla(e: KeyboardEvent) {
  e.preventDefault(); // evita que la página haga scroll con las flechas
  if (e.repeat || gameOver) return; // ignorar si se mantiene la tecla o el juego ha terminado

  switch (e.keyCode) {
    case 37: // flecha izquierda
      // mover jugador a la izquierda
      break;
    case 38: // flecha arriba
      // mover jugador hacia arriba
      break;
    case 39: // flecha derecha
      // mover jugador a la derecha
      break;
    case 40: // flecha abajo
      // mover jugador hacia abajo
      break;
  }
}
```

### **3. Propiedades importantes del evento**

- `e.key` → nombre de la tecla (ej: `ArrowLeft`, `a`)

- `e.keyCode` → código numérico de la tecla (ej: `37` = izquierda, `38` = arriba)

- `e.repeat` → indica si la tecla se mantiene pulsada (`true` o `false`)

- `e.preventDefault()` → evita que el navegador haga la acción por defecto (como *scrollar* la página al usar flechas)


### **4. Cómo se usa en el Comecocos**

- Detectamos la tecla pulsada con `keyCode`.

- Calculamos la nueva posición del jugador según la dirección.

- Comprobamos que no choque con un muro antes de moverlo.

- Actualizamos el sprite de animación según la dirección.

- Comprobamos si hay un punto en la nueva casilla para sumarlo a la puntuación.

> 📢 Ejemplo:
```js
case 37: // izquierda
  if(player.posicionColumna > 0 && !tableroFinal[player.posicionFila][player.posicionColumna-1].classList.contains("border-blue-700")) {
      player.posicionColumna -= 1; // mover a la izquierda
      if(player.direccionActual != direccion.izquierda) {
          player.direccionActual = direccion.izquierda;
          sprite = 0; // reinicia animación
      }
  }
  break;
```
> `player.posicionColumna -= 1` → mueve al jugador a la izquierda.  
> `player.direccionActual` → cambia la animación según dirección.  
> Se hace un check de colisión para no atravesar muros (`border-blue-700`).  
> Al final, la función actualiza el DOM moviendo la imagen del jugador a la nueva casilla.  

--- 

# Cuando lo completes ... ¿serías capaz de hacerlo en TypeScript? 🤔