function drawComponent() {
  // crea un elemento HTML
  const element = document.createElement('div');

  // Aggiunge la scritta Hello World
  element.innerHTML = "Hello World";

  return element;
}

// "Appende" al body il ritorno della funzione drawComponent()
document.body.appendChild(drawComponent());


