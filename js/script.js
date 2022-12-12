


alert('Benvenuto Player 1! Pronto per una nuova entusiasmante partita del famoso campo minato?');

let nome = prompt("Per favore inserisci il tuo nome");
console.log(nome);



/*ELEMENTO DOM*/
const containerElement = document.querySelector(".container")

//L'utente indica un livello di difficoltà
const user_choice_difficult = parseInt(prompt("Inserisci un livello di difficoltà compreso tra 1 e 3:"));


//In base alla scelta do una dimensione alla griglia
let cell_number;
if (user_choice_difficult == 1) {
    cell_number = 100;
    containerElement.style.width = "1000px"
} else if (user_choice_difficult == 2) {
    cell_number = 81;
    containerElement.style.width = "900px"

} else if (user_choice_difficult == 3) {
    cell_number = 49;
    containerElement.style.width = "700px"
}



//Creo la griglia cliccabile in base al valore passato
function createGridClick(cell_number) {
    for (let i = 1; i <= cell_number; i++) {
        let gridElement = document.createElement("div");
        gridElement.className = "grid_cell"
        gridElement.innerHTML = i
        containerElement.append(gridElement)

        gridElement.addEventListener("click", function () {
            //console.log(this);

            if (this.classList.contains("clicked")) {
                this.classList.remove("clicked")
            } else {
                this.classList.add("clicked")
            }
            //this.style.backgroundColor = "#99CBFF"
            //this.style.color = "black"
        })

    }
}

createGridClick(cell_number)