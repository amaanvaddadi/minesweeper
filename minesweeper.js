document.addEventListener('DOMContentLoaded', startGame)

function startGame ()  {
    var children = document.getElementsByClassName('board')[0].children;
    console.log(children);
    addListeners(children);
    }

function addListeners (element) {
    for (var i = 0; i < element.length; i++) {
        //console.log(elements[i])
    element[i].addEventListener('click', showCell);
    element[i].addEventListener('contextmenu', markCell);
    }
}

function showCell (evt) {
    evt.target.classList.remove('hidden');
}

function markCell (evt) {

    evt.preventDefault();

    evt.target.classList.toggle('marked');
}
startGame();


var board  = {cells[]};
var arr = str.split('-')

function getRow (element){

for (var i=0; i<elements.length; i++){

    if (element(i).classList.contains('row- ')){return arr[1];}

}

}
