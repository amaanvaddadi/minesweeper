document.addEventListener('DOMContentLoaded', startGame)

function startGame() {
    var children = document.getElementsByClassName('board')[0].children;
    for (var i = 0; i < children.length; i++) {
        addListeners(children[i]);
        addCellToBoard(children[i]);
    } 
    // console.log(board);

    for (var i = 0; i < board.cells.length; i++) {
        var surroundingMines = countSurroundingMines(board.cells[i]);
        board.cells[i].surroundingMines =  surroundingMines;
     
    } 
} 

function countSurroundingMines (cell) {
    var surroundingCells =  getSurroundingCells(cell.row, cell.col);
   
    var numb = 0;
    for (var i = 0; i < surroundingCells.length; i++) {
        if (surroundingCells[i].isMine){ 
            numb++;
        }

    } 
    return numb;
}


function addListeners(element) {
    element.addEventListener('click', showCell);
    element.addEventListener('contextmenu', markCell);
}

function showCell(evt) {
    evt.target.classList.remove('hidden');
    if (evt.target.classList.contains('mine') ) {
        showAllMines();
        return 
    }
    showSurrounding(evt.target);
    
    checkForWin();
}

function showAllMines () {
       var mines = document.getElementsByClassName('mine');
       for (var i=0; i<mines.length; i++){
        mines[i].classList.remove('hidden');

       }
}
function markCell(evt) {

    evt.preventDefault();
    
    evt.target.classList.toggle('marked');
    evt.target.classList.toggle('hidden');

    for (var i=0; i<board.cells.length; i++){
        var row = getRow(evt.target);
        var col = getCol(evt.target);

        if (board.cells[i].row === row && board.cells[i].col===col) { 
            board.cells[i].isMarked = true; 
        }
    }
    checkForWin();
}

function checkForWin () {
console.log('test');
    for (var i=0; i<board.cells.length; i++){
        if (board.cells[i].isMine === true && board.cells[i].isMarked===false) { 
            return  
        }
        var hidden = document.getElementsByClassName('hidden');
        if (hidden.length > 0){

            return
        }

        alert("You have won!");

    }
}

function addCellToBoard(element) {

    var newCell = {};

    newCell.row = getRow(element);
    newCell.col = getCol(element);
    newCell.isMine = element.classList.contains("mine");
    board.cells.push(newCell);
}

var board = {
    cells: []
};

function getRow(element) {
    var elements = element.classList;

    for (var i = 0; i < elements.length; i++) {

        if (elements[i].indexOf("row-")> -1) {
            
               return parseInt(elements[i].split("row-").join(""));
                      
                }

    }

}

function getCol(element) {
 var elements = element.classList;
    for (var i = 0; i < elements.length; i++) {

        if (elements[i].indexOf("col-")> -1) {
            return parseInt(elements[i].split("col-").join(""));

        }

    }
}




