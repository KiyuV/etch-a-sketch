const mainContainer = document.querySelector('#main-container');
let coloredTile = 0;

function createGrid(height, width) {
    let divHeight = 97/height;
    let divWidth = 100/width;
    for(let i = 0; i < height; i++) {
        let tmpContainer = document.createElement('div');
        tmpContainer.style.display = 'flex';
        tmpContainer.style.flex = '1';
        tmpContainer.style.justifyContent = 'center';
        tmpContainer.style.alignItems = 'center';

        for(let j = 0; j < width; j++) {
            let tmpDiv = document.createElement('div');
            tmpDiv.style.height = `${divHeight}vh`;
            tmpDiv.style.width = `${divWidth}vw`;
            tmpDiv.className = 'pixel';
            tmpDiv.addEventListener('mouseover', () => {
                tmpDiv.style.backgroundColor = getColor();
            });
            tmpContainer.appendChild(tmpDiv);
            mainContainer.appendChild(tmpContainer);
        }
    }
}

function getColor() {
    if (coloredTile < 10) {
        let r = Math.floor(Math.random() * 256 * (1-coloredTile/10));
        let g = Math.floor(Math.random() * 256 * (1-coloredTile/10));
        let b = Math.floor(Math.random() * 256 * (1-coloredTile/10));
        coloredTile++;
        return `rgb(${r},${g},${b})`;
    } else if (coloredTile >= 10) {
        return 'rgb(0,0,0)'
    }
}
// Reset button to reset the canvas while keeping the resolution
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    const allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach((pixel) => {
        if (pixel.style.backgroundColor != '') {
            pixel.style.backgroundColor = '';
        } 
    })
    coloredTile = 0;
});


const setSize = document.querySelector('#canvasSize');
setSize.addEventListener('click', () => {
    let size = Number(prompt('Please enter the size of your canvas (Max 100):'));
    while (size > 100 || size < 0 || isNaN(size)) {
        size = prompt('Please enter a valid size (0 - 100):');
        if (size <= 100 && size >= 0 && !isNaN(size)) {
            break;
        }
    };
    mainContainer.innerHTML = '';
    coloredTile = 0;
    createGrid(size, size);
});

