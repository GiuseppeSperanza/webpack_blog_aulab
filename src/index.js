import './style.css'; // --> import del file css

function drawComponent() {
  // crea un elemento HTML
  const element = document.createElement('div');

  // Aggiunge la scritta Hello World
  element.innerHTML = "Hello World";

  // Aggiunge la classe CSS create nel file style.css
  element.classList.add('red');

  return element;
}

// "Appende" al body il ritorno della funzione drawComponent()
document.body.appendChild(drawComponent());

