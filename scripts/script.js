

let displayUp = document.querySelector('.screenUp');
let displayDown = document.querySelector('.screenDown') 
let buttons = Array.from(document.querySelectorAll('button'));




buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                displayUp.innerText = '0';
                displayDown.innerText = '0';
                break;

            case 'C':
                if(displayUp.innerText){
                    displayUp.innerText = displayUp.innerText.slice(0, -1)
                }
                break;

            case '=':
                try{
                    displayDown.innerText = eval(displayUp.innerText);
                }catch{
                    displayDown.innerText = 'Error!';
                }
                break;

            default:
                displayUp.innerText += e.target.innerText;
        }
    });
});
