const lampadina = document.getElementById("lampadina");
const toggleButton = document.getElementById("toggleButton");

// Stato iniziale della lampadina
let lampadinaAccesa = false;

// Aggiungi un evento al bottone per il click
toggleButton.addEventListener("click", () => {
  // SE la lampadina è spenta
  if (lampadinaAccesa) {
    // Spengo la lampadina
    lampadina.src = "img/white_lamp.png";
    toggleButton.textContent = "Accendi";
    // ALTRIMENTI
  } else {
    // Accendo la lampadina
    lampadina.src = "img/yellow_lamp.png";
    toggleButton.textContent = "Spegni";
  }

  // Inverto lo stato della lampadina
  lampadinaAccesa = !lampadinaAccesa;
});
