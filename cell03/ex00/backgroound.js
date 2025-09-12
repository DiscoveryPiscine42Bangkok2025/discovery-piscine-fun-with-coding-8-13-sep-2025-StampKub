const button = document.getElementById("colorBtn");

function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.backgroundColor = randomColor;
}

button.addEventListener("click", changeColor);