import './style.css'; // --> import del file css
import logger from './logger.js';

function drawComponents() {
  // crea un elemento HTML
  const element = document.createElement('div');
  element.classList.add('container');

  const text = document.createElement("p");
  // Aggiunge la scritta Hello World
  text.innerHTML = "Hello World";
  // Aggiunge la classe CSS create nel file style.css
  text.classList.add('red');
  element.appendChild(text);

  // Creo un bottone
  const btn = document.createElement("button");
  btn.innerHTML = "Logger";
  btn.classList.add('button');
  btn.onclick = logger;
  element.appendChild(btn);

  return element;
}

// "Appende" al body il ritorno della funzione drawComponent()
document.body.appendChild(drawComponents());

