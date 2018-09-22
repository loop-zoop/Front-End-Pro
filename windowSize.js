
let textBlock = document.getElementById('window-resize');
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
textBlock.innerHTML = `Ширина окна: ${width}, высота окна: ${height}`;

window.addEventListener('resize', getWindowSize);

function getWindowSize() {
    let oldWidth = document.documentElement.clientWidth;
    let oldHeight = document.documentElement.clientHeight;
    
    setTimeout(function(){
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
        if(oldWidth == width && oldHeight == document.documentElement.clientHeight) {
            textBlock.innerHTML = `Ширина окна: ${width}, высота окна: ${height}`;
        }
    }, 2000);
}