const button = document.querySelector("button");
const container = document.querySelector(".container");

function getRandomColor() {
  const randomByte = () => Math.floor(Math.random() * 255) + 1;
  return [randomByte(), randomByte(), randomByte()];
}

function generateGrid(n=16) {
  for (let i = 0; i < n ** 2; i++) {
    const div = document.createElement("div");
    div.style.width = div.style.height = `${100 / n}%`;
    div.addEventListener("mouseenter", () => {
      if (!div.style.backgroundColor) {
        div.style.backgroundColor = `rgb(${getRandomColor().join(",")})`;
        div.style.opacity = 0.1;
      } else {
        div.style.opacity = +div.style.opacity + 0.1;
      }
    });
    div.addEventListener("touchstart", (e) => {
      e.preventDefault(); // Prevents scrolling while drawing
      if (!div.style.backgroundColor) {
        div.style.backgroundColor = `rgb(${getRandomColor().join(",")})`;
        div.style.opacity = 0.1;
      } else {
        div.style.opacity = +div.style.opacity + 0.1;
      }
    }, { passive: false });
    container.appendChild(div);
  }
}

function removeGrid() {
  document.querySelectorAll(".container > div").forEach(div => {
    div.remove();
  });
}

generateGrid();

button.addEventListener("click", () => {
  const input = prompt("Number of squares per side: (1-100)");
  if (input === null) return;  // cancel button

  const num = parseInt(input);
  if (isNaN(num) || num <= 0 || num > 100) {
    alert("Invalid input!");
  } else {
    removeGrid();
    generateGrid(num);
  }
});