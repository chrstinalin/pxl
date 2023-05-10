
// Title Generation
//const kaomoji = ["(─‿‿─)♡" , "(´｡• ᵕ •｡`) ♡" , "(*♡∀♡)" , "(｡・//ε//・｡)" , "(´ ω `♡)" , "♡( ◡‿◡ )" , "(◕‿◕)♡" , "♡ (￣З￣)" , "(ღ˘⌣˘ღ)" , "(♡°▽°♡)" , "♡(｡- ω -)" , "♡ ～('▽^人)" , "(´• ω •`) ♡" , "(´ ε ` )♡" , "(´｡• ω •｡`) ♡" , "( ´ ▽ ` ).｡ｏ♡" , "╰(*´︶`*)╯♡" , "(*˘︶˘*).｡.:*♡" , "(♡˙︶˙♡)" , "♡＼(￣▽￣)／♡"];
//const title = document.querySelector('#title');
//title.textContent = `PXL ${kaomoji[Math.floor(Math.random() * 20)]}`

// Button Action
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach( item => {

    item.addEventListener('click', function(){
        if(item.id != 'color'){
            if(item.classList.contains('select')) item.classList.remove('select');
            else{
                buttons.forEach(item => item.classList.remove('select'))
                item.classList.add('select');
            }
        }
    })

    item.addEventListener('mouseenter', function(){
        item.classList.add('mouseover');
    })

    item.addEventListener('mouseleave', function(){
        item.classList.remove('mouseover');
    })

})