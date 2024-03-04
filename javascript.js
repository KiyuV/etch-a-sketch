const mainContainer = document.querySelector('#main-container');

function createGrid(height, width) {
    let divHeight = 97/height;
    let divWidth = 100/width;
    let body = document.querySelector('body');
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
                tmpDiv.style.backgroundColor = `orange`;
            });
            tmpContainer.appendChild(tmpDiv);
            mainContainer.appendChild(tmpContainer);
        }
    }
}

// Reset button to reset the canvas while keeping the resolution
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    const allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach((pixel) => {
        if (pixel.style.backgroundColor == 'orange') {
            pixel.style.backgroundColor = 'white';
        } 
    })
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
    createGrid(size, size);
});
