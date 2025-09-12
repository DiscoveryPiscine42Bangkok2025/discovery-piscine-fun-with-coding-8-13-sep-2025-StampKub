const balloon = document.getElementById("balloon");
let size = 200;
let colors = ["red", "green", "blue"];
let colorIndex = 0;

function nextColor() {
  colorIndex = (colorIndex + 1) % colors.length;
  return colors[colorIndex];
}

function prevColor() {
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  return colors[colorIndex];
}

balloon.addEventListener("click", () => {
  size += 10;
  if (size > 420) {
    // ระเบิด → reset
    size = 200;
    colorIndex = 0; // กลับไปสีแดง
  } else {
    balloon.style.backgroundColor = nextColor();
  }
  balloon.style.width = size + "px";
  balloon.style.height = size + "px";
});

balloon.addEventListener("mouseleave", () => {
  if (size > 200) {
    size -= 5;
  }
  balloon.style.width = size + "px";
  balloon.style.height = size + "px";
  balloon.style.backgroundColor = prevColor();
});
