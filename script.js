const container = document.querySelector('#container');
const gridCountText = document.querySelector('.grid-count');
const slider = document.querySelector('#myRange');
const colorPicker = document.querySelector('#favcolor');
const randomColor = document.querySelector('.random-color');
const eraseSketch = document.querySelector('.erase-sketch');

let gridColor = 'black';

let createGrids = (gridValue) => {
    container.style.cssText = `grid-template-columns: repeat(${gridValue}, 1fr)`;
    for(let i = 0; i < gridValue ** 2; i++){
        const div = document.createElement('div');
        div.style.cssText = 'border: 1px solid black';
        container.appendChild(div);
    }
}


let colorGrids = (color, event) => {
    const grids = document.querySelectorAll('#container div');
    grids.forEach(grid => grid.addEventListener(event, () => {
        grid.style.cssText = `background-color: ${color}`;
    }));
}


let determineEvent = () => {
    if(('ontouchstart' in window) ||  (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
        return 'touchstart';
    }
    else {
        return 'mouseover';
    }
}


let clearGrids = () => {
    const grids = document.querySelectorAll('#container div');
    grids.forEach(grid => container.removeChild(grid));
}


slider.oninput = function(){
    let gridCount = this.value;
    gridCountText.textContent = `${gridCount} x ${gridCount}`;
    clearGrids();
    createGrids(gridCount);
    colorGrids(gridColor, determineEvent());
}


colorPicker.addEventListener('change', (e) => {
    gridColor = e.target.value;
    colorGrids(gridColor, determineEvent());
});


let getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++){
       color += letters[(Math.floor(Math.random() * 16))];
    }

    return color;
}


randomColor.addEventListener('click', () => {
    const grids = document.querySelectorAll('#container div');
    grids.forEach(grid => grid.addEventListener(determineEvent(), () => grid.style.backgroundColor = getRandomColor()));
});


eraseSketch.addEventListener('click', () => {
    const grids = document.querySelectorAll('#container div');
    grids.forEach(grid => grid.style.cssText = 'border: 1px solid black; background-color: white');
});



createGrids(16);
colorGrids(gridColor, determineEvent());