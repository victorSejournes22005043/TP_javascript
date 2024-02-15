var tab = [];

for(var i = 0; i<20; ++i){
    tab.push(Math.floor(Math.random() * 50)-10);
}

var displayLabel = document.getElementById("display-label");
var message = document.getElementById("message");
var historiqueTable = document.getElementById("historique-table");

var i = 0;


let interval  =setInterval(displayValue, 1000);
console.log(tab);
function displayValue(){
    console.log(i);
    displayLabel.innerText = tab[i] + "°C";
    var row = historiqueTable.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = tab[i] + "°C";
    //displayLabel.classList.remove(displayLabel.className);
    if(i>0){displayLabel.classList.remove(displayLabel.className);}
    if (tab[i] <= 0){
        displayLabel.classList.add("cadreBleu");
        message.innerText = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
    }else if (tab[i] <= 20){
        displayLabel.classList.add("cadreVert");
        message.innerText = "";
    }else if (tab[i] <= 30){
        displayLabel.classList.add("cadreOrange");
        message.innerText = "";
    }else{
        displayLabel.classList.add("cadreRouge");
        message.innerText = "Caliente ! Vamos a la playa, ho hoho hoho !!";
    }
    i++
    if(tab[i] === undefined){
        clearInterval(interval);
    }
}
