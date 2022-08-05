const container = document.querySelector('#container');

let createGrids = (gridValue) => {
    container.style.cssText = `grid-template-columns: repeat(${gridValue}, 1fr)`;
    for(let i = 0; i < gridValue ** 2; i++){
        const div = document.createElement('div');
        div.style.cssText = 'border: 1px solid black';
        container.appendChild(div);
    }
}


let colorGrids = (color) => {
    const grids = document.querySelectorAll('#container div');
    grids.forEach(grid => grid.addEventListener('mouseover', () => {
        grid.style.cssText = `background-color: ${color}`;
    }));
}

createGrids(16);
colorGrids('purple');