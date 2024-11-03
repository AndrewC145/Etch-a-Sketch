const container = document.querySelector('.container');

const newGrid = document.querySelector('.grid-num');

const eraser = document.querySelector('.erase-btn');

// Defines a Starting Size of the Grid
function startingGrid(size) {
  // Starting Values for the Grid
  let gridAmount = size * size;
  let gridSize = 600 / size; // 600px is the size of the container

  // Creates the Grid and Loops over the amount entered
  for (let i = 0; i < gridAmount; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.width = `${gridSize}px`;
    grid.style.height = `${gridSize}px`;
    grid.style.border = '1px solid grey';

    // Changes the Color of the Grid when Hovered Over
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = 'black';
    });

    // Appends the Grid to the Container
    container.appendChild(grid);
  }
}

// Sets starting grid size
startingGrid(16);


newGrid.addEventListener('click', () => {
  // Prompts the User how big they want the Grid to be when Clicked
  const gridValue = parseInt(prompt('How big do you want the grid to be? Must be between 1 and 100'));

  // Checks if the Value is between 1 and 100, returns an alert if not
  if (gridValue < 1 || gridValue > 100 || isNaN(gridValue)) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  // Resets the grid when a new grid is created
  container.textContent = '';
  
  let gridAmount = gridValue * gridValue;
  let gridSize = 600 / gridValue;

  // Creates the Grid and Loops over the amount entered
  for (let i = 0; i < gridAmount; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.width = `${gridSize}px`;
    grid.style.height = `${gridSize}px`;
    grid.style.border = '1px solid grey';

    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = 'black';
    });
    container.appendChild(grid);
  }
});

eraser.addEventListener('click', () => {
  const grids = document.querySelectorAll('.grid');
  // Loops through each grid item to add an event listener (grid is a variable initialized in the loop)
  grids.forEach(grid => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = 'white';
    });
  });
});
