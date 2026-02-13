import './style.css'

// Silly calculator responses
const sillyResponses = [
  "Esta en heaven",
  "preguntele a ChatGPT",
  "complicado",
  "67... Creo",
  "en esta esta solo",
  "digale al profe",
  "Ew.",
  "No gracias",
  "ud es el desarrollador",
  "Zzzzzzzzzzzz",
  "Sale valorantsito?",
  "Pineda",
  "Apague y vamonos",
  "Falta poteca"
];

let justAnswered = false;

function appendValue(value) {
  const display = document.getElementById("display");

  // If we just showed a silly answer, clear before typing again
  if (justAnswered) {
    display.value = "";
    justAnswered = false;
  }

  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
  justAnswered = false;
}

function calculate() {
  const display = document.getElementById("display");

  const randomIndex = Math.floor(Math.random() * sillyResponses.length);
  display.value = sillyResponses[randomIndex];

  justAnswered = true; // Mark that we just gave an answer
}

// Make functions global
window.appendValue = appendValue;
window.clearDisplay = clearDisplay;
window.calculate = calculate;
