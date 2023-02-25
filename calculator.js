
const container = document.querySelector(".container");

// let fristName = window.prompt("Bienvenue! Entrez votre Prénom,s'il vous plait.","");

const createElements = () => {
    // Création de div pour la salutation
    const divSalutation = document.createElement("div");
    divSalutation.className = "salutation";
    container.appendChild(divSalutation);

    // Création de div pour afficher le calcul
    const divCalculator = document.createElement("div");
    divCalculator.className = "calculator";
    container.appendChild(divCalculator);

    // creation de fênetre modale pour récupérer les cordonnées de l'utilisateur
    const modalWindow = document.createElement("div");
    modalWindow.className = "modal-window";
    container.appendChild(modalWindow);
    
}


function init() {
    createElements()
}