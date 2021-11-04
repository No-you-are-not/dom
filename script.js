const container = document.getElementById('container');
let title = document.createElement('h2');
title.setAttribute('class', 'title')
title.innerText = 'События';
let outer = document.createElement('div');
outer.setAttribute('class', 'outer');
let topText = document.createElement('span');
topText.innerText = 'x: 0, y: 0';
let bottomText = document.createElement('span');
bottomText.innerText ='x: 0, y: 0';
let block = document.createElement('div');
block.setAttribute('class', 'block');

outer.appendChild(topText);
outer.appendChild(block);
outer.appendChild(bottomText);
container.appendChild(title);
container.appendChild(outer);


// const topText = document.getElementById('top-text');
// const bottomText = document.getElementById('bottom-text');
// const block = document.getElementById('block');

function getXY (event){
    let x = event.clientX;
    let y = event.clientY;
    topText.innerText = `x: ${x}, y: ${y}`
}
function getXYblock (event){
    let x = event.clientX;
    let y = event.clientY;
    console.log('gg')
    bottomText.innerText = `x: ${x}, y: ${y-45}` // subtracted 44 because if we consider top of the block - the beginning of y coordinates
    // , it is situated 45 px lower than the actual beginning of y coordinates (because of the title and top coordinates + 1px border)
}

document.addEventListener('mousemove', getXY);
block.addEventListener('mousemove', getXYblock, false);