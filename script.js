
// Title Generation
const kaomoji = ["(─‿‿─)♡" , "(´｡• ᵕ •｡`) ♡" , "(*♡∀♡)" , "(｡・//ε//・｡)" , "(´ ω `♡)" , "♡( ◡‿◡ )" , "(◕‿◕)♡" , "♡ (￣З￣)" , "(ღ˘⌣˘ღ)" , "(♡°▽°♡)" , "♡(｡- ω -)" , "♡ ～('▽^人)" , "(´• ω •`) ♡" , "(´ ε ` )♡" , "(´｡• ω •｡`) ♡" , "( ´ ▽ ` ).｡ｏ♡" , "╰(*´︶`*)╯♡" , "(*˘︶˘*).｡.:*♡" , "(♡˙︶˙♡)" , "♡＼(￣▽￣)／♡"];
const title = document.querySelector('#title');
title.textContent = `PXL ${kaomoji[Math.floor(Math.random() * 20)]}`

let mouseClick = false;
let currentTool = 'pen'
let canvasSize = 16;
let color = '#656565';

//Click Listener
canvas.addEventListener('mousedown', function(e){e.preventDefault(); mouseClick=true});
canvas.addEventListener('mouseup', function(e){e.preventDefault(); mouseClick=false});

// Button Action
const clearButton = document.getElementById('clear').addEventListener('click', function(){createCanvas(canvasSize)})
const buttons = document.querySelectorAll('.buttons button');
const toggleButtons = document.querySelectorAll('.buttons .toggle');

toggleButtons.forEach(item =>{

    item.addEventListener('click', function(){
        if(item.classList.contains('select')){
            item.classList.remove('select');
            currentTool = null;
        }
        else{
            buttons.forEach(item => item.classList.remove('select'))
            item.classList.add('select');
            currentTool = item.id;
        }
    })
})

buttons.forEach( item => {

    item.addEventListener('mouseenter', function(){
        item.classList.add('mouseover');
    })

    item.addEventListener('mouseleave', function(){
        item.classList.remove('mouseover');
    })

})

// Slider Listener
const slider = document.getElementById('slider');
slider.oninput = function(){
    canvasSize = slider.value;
    createCanvas(canvasSize);
}

// Color Listener
const colorPicker = document.getElementById('colorpicker');
const colorBox = document.getElementById('color');
colorPicker.oninput = function(){
    color = colorPicker.value;
    colorBox.style['background-color'] = color;
}

createCanvas(canvasSize);

//Build Canvas
function createCanvas(canvasSize){

    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ""; // clear canvas
    let dimension = canvas.offsetWidth / canvasSize;

    for(let i = 0; i < canvasSize * canvasSize; i++){
        const pixel = document.createElement('div');
        pixel.style.width = `${dimension}px`;
        pixel.style.height = `${dimension}px`;
        pixel.style['background-color'] = '#FFFFFF';

        pixel.addEventListener('mouseover', function(e){
            if(mouseClick){
                e.preventDefault();
                if(currentTool == 'pen') pixel.style['background-color'] = color;
                else if(currentTool == 'eraser') pixel.style['background-color'] = '#FFFFFF';
            }
        })

        canvas.appendChild(pixel);
    }
}
