
const container = document.querySelector(".container");


const createElements = () => {
    // Création de div pour la salutation
    const divSalutation = document.createElement("div");
    divSalutation.className = "salutation";
    container.appendChild(divSalutation);

    // Création de div pour afficher le calcul
    const divCalculator = document.createElement("div");
    divCalculator.className = "calculator";
    container.appendChild(divCalculator);

    // creation de fenêtre modale pour récupérer les cordonnées de l'utilisateur
    const modalWindow = document.createElement("div");
    modalWindow.className = "modal-window";
    container.appendChild(modalWindow); 
}

// Composition de la fenêtre modale
const handleModalWindow = (el) => {
    const getModalWindow = document.querySelector(".modal-window");


    // Création input Prénom et paragraphe
    const paraFirstName = document.createElement("p");
    getModalWindow.appendChild(paraFirstName);
    paraFirstName.innerText = "Entrez votre Prénom";

    const inputFirstName = document.createElement("input");
    inputFirstName.type = "text";
    inputFirstName.name = "firstName";
    getModalWindow.appendChild(inputFirstName);

    // Création input Nom et paragraphe
    const paraLastName = document.createElement("p");
    getModalWindow.appendChild(paraLastName);
    paraLastName.innerText = "Entrez votre Nom";

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.name = "lastName";
    getModalWindow.appendChild(inputName);

    // console.log(inputFirstName.value, inputName.value);
}

function init() {
    createElements();
    handleModalWindow();
}