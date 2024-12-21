const newGrid = document.querySelector(".grid-num");
const draw = document.querySelector(".draw");
const erase = document.querySelector(".erase-btn");
const container = document.querySelector(".container");
const reset = document.querySelector(".reset-btn");

let gridAmount = 16;
createGrid(gridAmount);

function createGrid(size) {
  let gridSize = 600 / size;
  let gridAmount = size * size;

  for (let i = 0; i < gridAmount; i++) {
    const grid = document.createElement("div");
    grid.style.width = `${gridSize}px`;
    grid.style.height = `${gridSize}px`;
    grid.classList.add("grid");
    container.appendChild(grid);
  }
}


newGrid.addEventListener("click", () => {
  gridAmount = parseInt(prompt("Enter a number between 1 and 100"));
  if (gridAmount > 100 || gridAmount < 1 || isNaN(gridAmount)) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  container.textContent = "";
  createGrid(gridAmount);
});

draw.addEventListener("click", () => {
  container.addEventListener("mouseover", event => {
    if (event.target.classList.contains("grid")) {
      event.target.style.backgroundColor = "black";
    }
  }); 
});

erase.addEventListener("click", () => {
  container.addEventListener("mouseover", event => {
    if (event.target.classList.contains("grid")) {
      event.target.style.backgroundColor = "white";
    }
  });
});

reset.addEventListener("click", () => {
  container.textContent = "";
  createGrid(gridAmount);
});