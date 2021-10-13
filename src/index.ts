import './style.scss'; // --> import del file scss
import logger from './logger.js';
import { products } from './products';

function drawComponents() {
  // crea un elemento HTML
  const element = document.createElement('div');
  element.classList.add('container');

  element.classList.add('bg-warning');

  const text = document.createElement("p");
  // Aggiunge la scritta Hello World
  text.innerHTML = "Hello World";
  // Aggiunge la classe CSS create nel file style.css
  text.classList.add('red');
  element.appendChild(text);

  // Visualizziamo i prodotti nel template
  products.forEach(( product ) => {
    const productElement = document.createElement("p");
    productElement.innerHTML = `${product.name} - totale: ${product.count ?? 0}`;
    element.appendChild(productElement);
  });

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

