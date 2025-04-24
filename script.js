const button = document.querySelector("button");
const container = document.querySelector(".container");

function createGrid(n=16) {
  for (let i = 0; i < n ** 2; i++) {
    const div = document.createElement("div");
    div.style.width = div.style.height = `${100 / n}%`;
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "black";
    });
    container.appendChild(div);
  }
}

function deleteGrid() {
  document.querySelectorAll(".container > div").forEach(div => {
    div.remove();
  });
}

createGrid();

button.addEventListener("click", () => {
  const num = parseInt(prompt("Number of squares per side: (1-100)"));
  if (isNaN(num) || num <= 0 || num > 100) {
    alert("Invalid input!");
  } else {
    deleteGrid();
    createGrid(num);
  }
});