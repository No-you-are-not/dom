const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const block = document.getElementById('block');

function getXY (event){
    let x = event.clientX;
    let y = event.clientY;
    topText.innerText = `x: ${x}, y: ${y}`
}
function getXYblock (event){
    let x = event.clientX;
    let y = event.clientY;
    console.log('gg')
    bottomText.innerText = `x: ${x}, y: ${y-44}` // subtracted 44 because if we consider top of the block - the beginning of y coordinates
    // , it is situated 44 px lower than the actual beginning of y coordinates (because of the title and top coordinates)
}

document.addEventListener('mousemove', getXY);
block.addEventListener('mousemove', getXYblock, false);