
// Title Generation
const kaomoji = ["(─‿‿─)♡" , "(´｡• ᵕ •｡`) ♡" , "(*♡∀♡)" , "(｡・//ε//・｡)" , "(´ ω `♡)" , "♡( ◡‿◡ )" , "(◕‿◕)♡" , "♡ (￣З￣)" , "(ღ˘⌣˘ღ)" , "(♡°▽°♡)" , "♡(｡- ω -)" , "♡ ～('▽^人)" , "(´• ω •`) ♡" , "(´ ε ` )♡" , "(´｡• ω •｡`) ♡" , "( ´ ▽ ` ).｡ｏ♡" , "╰(*´︶`*)╯♡" , "(*˘︶˘*).｡.:*♡" , "(♡˙︶˙♡)" , "♡＼(￣▽￣)／♡"];
const title = document.querySelector('#title');
title.textContent = `PXL ${kaomoji[Math.floor(Math.random() * 20)]}`

let currentTool = 'pen'

// Button Action
const buttons = document.querySelectorAll('.buttons button');
const toggleButtons = document.querySelectorAll('.buttons .toggle');

toggleButtons.forEach(item =>{

    item.addEventListener('click', function(){
        if(item.classList.contains('select')) item.classList.remove('select');
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