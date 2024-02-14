var tab = []

for(var i = 0; i<20; ++i){
    tab.push(Math.floor(Math.random() * 50)-10)
}

var displayLabel = document.getElementById("display-label")

var i = 0


let interval  =setInterval(displayValue, 1000)
console.log(tab)
function displayValue(){
    console.log(i);
    displayLabel.innerText = tab[i] + "°C";
    //displayLabel.classList.remove(displayLabel.className);
    if(i>0){displayLabel.classList.remove(displayLabel.className);}
    if (tab[i] <= 0){
        displayLabel.classList.add("cadreBleu");
    }else if (tab[i] <= 20){
        displayLabel.classList.add("cadreVert");
    }else if (tab[i] <= 30){
        displayLabel.classList.add("cadreOrange");
    }else{
        displayLabel.classList.add("cadreRouge");
    }
    i++
    if(tab[i] === undefined){
        clearInterval(interval)
    }
}
