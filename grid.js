const container = document.getElementById("grid-container");
let grid_item =document.getElementById('grid-item');
let btns = document.querySelectorAll('button');
let colors = [0,0,0];
var cell;
let activeButton;
let input = document.getElementById('grid-input').value;

function makeGrid(rows, cols) {
    let size = Math.floor(((780/rows)-7));
    container.style.gridTemplateRows = `repeat(${rows}, auto)`;
    container.style.gridTemplateColumns = `repeat(${cols}, auto)`;
    for (c = 0; c < (rows * cols); c++) {
        cell = document.createElement("div");
        cell.setAttribute('id', 'grid-item');
        container.appendChild(cell).className = "grid-item";
    };

};

btns.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        switch(e.target.id){
            case 'btn-start':
                e.target.setAttribute('style','top: 5px; box-shadow: 1px 1px 5px #000');
                activateGrid();
                break;
            case 'btn-black':
                activeButton = 'black';
                e.target.setAttribute('style','top: 5px; box-shadow: 1px 1px 5px #000');
                document.getElementById('btn-random').setAttribute('style','top: 0px; box-shadow: 1px 10px 5px #000');
                break;
            case 'btn-random':
                activeButton = 'random';
                e.target.setAttribute('style','top: 5px; box-shadow: 1px 1px 5px #000');
                document.getElementById('btn-black').setAttribute('style','top: 0px; box-shadow: 1px 10px 5px #000');
                break;
                case 'btn-reset':
                if(inputValidation()){    
                    activeButton = '';
                    container.innerHTML = '';
                    makeGrid(Number(input.value), Number(input.value));
                    document.getElementById('btn-black').setAttribute('style','top: 0px; box-shadow: 1px 10px 5px #000');
                    document.getElementById('btn-random').setAttribute('style','top: 0px; box-shadow: 1px 10px 5px #000');
                    document.getElementById('btn-start').setAttribute('style','top: 0px; box-shadow: 1px 10px 5px #000');
                    document.getElementById('btn-reset').setAttribute('style','top: 0px; box-shadow: 1px 10px 5px #000');
                }
                break;    
            default:
            break;
        }

    });
});


function activateGrid(){
    cell = document.querySelectorAll('.grid-item');
    for(let i=0;i<cell.length;i++){
        cell[i].addEventListener('mouseenter', e=>{
            activeButton === 'random' ? colors = randomColor() : colors = [0,0,0];
            e.target.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
        });
    }

}
function randomColor(){
   for(let i =0;i<colors.length;i++){
       colors[i] = Math.round(Math.random() * 255);
   } 
   return colors;
}
function inputValidation(){
    if (input.value === '' || input.value < 16){
        alert('Please enter a grid size b/w 16-69');
        return false;
    }
    return true;
}
makeGrid(16, 16);