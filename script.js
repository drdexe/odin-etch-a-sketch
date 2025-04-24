const container = document.querySelector(".container");
for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div");
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "black";
  });
  container.appendChild(div);
}