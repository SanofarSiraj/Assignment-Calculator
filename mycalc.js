let display = document.querySelector('#display');
let equal = document.querySelector('#equal');
let history = document.querySelector('.history');

//function addToHistory(val){
  //  history += val="";
    //History.innerText=history;
//}

function addToHistory(){
    history.innerText +=display.innerText;
}
let buttons = Array.from(document.getElementsByClassName('button'));



buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                addToHistory();
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                    
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

