
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
const handleModalWindow = () => {
    const getModalWindow = document.querySelector(".modal-window");


    // Création input Prénom et paragraphe
    const paraFirstName = document.createElement("p");
    getModalWindow.appendChild(paraFirstName);
    paraFirstName.innerText = "Entrez votre Prénom";

    const inputFirstName = document.createElement("input");
    inputFirstName.type = "text";
    inputFirstName.name = "firstName";
    inputFirstName.id = "firstName";
    getModalWindow.appendChild(inputFirstName);

    // Création input Nom et paragraphe
    const paraLastName = document.createElement("p");
    getModalWindow.appendChild(paraLastName);
    paraLastName.innerText = "Entrez votre Nom";

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.name = "lastName";
    inputName.id = "lastName";
    getModalWindow.appendChild(inputName);
}

const listenInput = () => {
    const inputFirstName = document.querySelector("#firstName");
    inputFirstName.addEventListener("change", (e) => {
        e.preventDefault()
        console.log(inputFirstName.value);
    });

    const inputLastName = document.querySelector("#lastName");
    inputLastName.addEventListener("change", (e) => {
        e.preventDefault()
        console.log(inputLastName.value);
    });
}


function init() {
    createElements();
    handleModalWindow();
    listenInput();
}