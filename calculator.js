
const container = document.querySelector(".container");

/* ============= Fonction pour la création des blocs principaux ==================  */
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

/* ======= Fonction pour la création des éléments de la fenêtre modale ==================== */
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
    inputFirstName.required = true;
    getModalWindow.appendChild(inputFirstName);

    // Création input Nom et paragraphe
    const paraLastName = document.createElement("p");
    getModalWindow.appendChild(paraLastName);
    paraLastName.innerText = "Entrez votre Nom";

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.name = "lastName";
    inputName.id = "lastName";
    inputName.required = true;
    getModalWindow.appendChild(inputName);

    // Création d'un bouton
    const btnOk = document.createElement("button");
    btnOk.type = 'submit';
    btnOk.name = 'formBtn';
    btnOk.innerHTML = "Validé";
    btnOk.classList.add("hover");
    getModalWindow.appendChild(btnOk);
}

/*=================== Écouter les événements ====================*/
const listenInput = (el) => {
    const inputFirstName = document.querySelector("#firstName");
    const inputLastName = document.querySelector("#lastName");

    let firstName = "";
    let lastName = "";

    // Écouter le changement de Prénom
    inputFirstName.addEventListener("change", (e) => {
        e.preventDefault();
        firstName = inputFirstName.value;
    });

    // Écouter le changement de Prénom
    inputLastName.addEventListener("change", (e) => {
        e.preventDefault();
        lastName = inputLastName.value;

        // Appel fonction
        handleSalutation(firstName, lastName);
    });
    
}

 /*==================== fonction pour la salutation ====================== */
function handleSalutation(firstName, lastName) {
   
    const salutation = document.querySelector(".salutation");

    // Récupération du bouton de la modale
    const btnValid = document.querySelector(".modal-window button");

    // Écoute du bouton de la modale d'identification
    btnValid.addEventListener("click", (e)=> {
        e.preventDefault();
        // Condition pour afficher le mot de bienvenue
        if (firstName !== "" && firstName !== undefined 
        && lastName !== "" && lastName !== undefined ) {
        salutation.innerText = "Bienvenue " + `${firstName} ` + `${lastName}`;
        const getModalWindow = document.querySelector(".modal-window");
        getModalWindow.classList.add("hidden");
        }
    })
} 

/* ############# Appels fonctions #################################### */
function init() {
    createElements();
    handleModalWindow();
    listenInput();
}