const container = document.querySelector('#container');
let newGrid = 16; /// defualt grid number

function createGrid(newGrid) {
    container.innerHTML = ''; /// clears the grid each time the function runs
  for(let i = 0; i < newGrid; i++){
      for(let j = 0; j < newGrid; j++){
          const div = document.createElement('div');
          div.classList.add('grid-cell');

           /// updates the height and width of each div based on the grid number
          div.style.width = `calc(100% / ${newGrid})`;
          div.style.height = `calc(100% / ${newGrid})`;
          container.appendChild(div);
          /// change color of each div on hover, it's easier to add this here so i wont have to iterate all the divs again
          div.addEventListener('mouseover', ( ) => {
          div.style.backgroundColor = getRandomColor();
      });
     }
  }
};

createGrid(newGrid);

// change grid size button function
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    newGrid = parseInt(prompt('Enter new grid size'));
    if(newGrid <= 100 && newGrid > 0 && typeof(newGrid) === 'number'){
        createGrid(newGrid);
    } else {
        alert('Invalid number, try again');
    }
    
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
   
