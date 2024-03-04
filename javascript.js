const mainContainer = document.querySelector('#main-container');

function createGrid(height, width) {
    let divHeight = 100/height;
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
            tmpDiv.addEventListener('mouseover', () => {
                tmpDiv.style.backgroundColor = `orange`;
            });
            tmpContainer.appendChild(tmpDiv);
            body.appendChild(tmpContainer);
        }
    }
}

createGrid(16,16);