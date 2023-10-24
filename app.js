const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');

const redText = document.getElementById('red-text');
const greenText = document.getElementById('green-text');
const blueText = document.getElementById('blue-text');

let red = redInput.value; // extrae el valor inicial del input
let green = greenInput.value;
let blue =  blueInput.value;

redText.innerText = red; // muestra el valor inicial del input
greenText.innerText = green;
blueText.innerText = blue;

const updateColor = (red, green, blue) => {
const colorRGB = `rgb(${red}, ${green}, ${blue})`;
document.body.style.backgroundColor = colorRGB;
};

// EventListener for each input

redInput.addEventListener('change', (e) => {
  let red = e.target.value;
  redText.innerText = red;
  updateColor(red, green, blue);
});

greenInput.addEventListener('change', (e) => {
  let green = e.target.value;
  greenText.innerText = green;
  updateColor(red, green, blue);
});

blueInput.addEventListener('change', (e) => {
  let blue = e.target.value;
  blueText.innerText = blue;
  updateColor(red, green, blue);
});

