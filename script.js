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

/* Le Sujet observable*/
class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(ob) {
        this.observers.push(ob);
        console.log(this.observers);
    }

    unsubscribe(ob) {
        this.observers.remove(ob);
        console.log(this.observers);
    }

    notify(data) {
        this.observers.forEach((observer) => observer.update(data));
    }

}


/* Les observateurs */
class Logger {
    temp;
    constructor() {
        this.temp = 0;
    }

    update(data) {
        console.log(data + ' Logger');
        this.temp = data;
        displayLabel.innerHTML = this.temp + "<abbr>°C</abbr>";
        if(displayLabel.classList != ""){displayLabel.classList.remove(displayLabel.className);}
        if (this.temp <= 0){
            displayLabel.classList.add("cadreBleu");
        }else if (this.temp <= 20){
            displayLabel.classList.add("cadreVert");
        }else if (this.temp <= 30){
            displayLabel.classList.add("cadreOrange");
        }else{
            displayLabel.classList.add("cadreRouge");
        }
    }

}

class Logger2 {
    constructor() {

    }

    update(data) {
        console.log(data + ' Logger 2');
        var row = historiqueTable.insertRow(0);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = data + "<abbr>°C</abbr>";
    }
}

class Logger3 {
    constructor() {

    }

    update(data) {
        console.log(data + ' Logger 3');
        if (data <= 0){
            message.innerText = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        }else if (data <= 20){
            message.innerText = "";
        }else if (data <= 30){
            message.innerText = "";
        }else{
            message.innerText = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        }
    }

}

ob = new Observable();

ob.subscribe(new Logger);
ob.subscribe(new Logger2);
ob.subscribe(new Logger3);

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}

function displayValue(){
    console.log(i);
    ob.notify(tab[i]);
    i++;
    if(tab[i] === undefined){
        clearInterval(interval);
    }
}
