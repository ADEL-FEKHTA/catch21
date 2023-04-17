const mainElement = document.getElementById("main");
const drawCardButton = document.getElementById("draw-card");
const stopButton = document.getElementById("stop");

let main = [];

function distribuerCarte() {
    const valeur = Math.floor(Math.random() * 11) + 1;
    return valeur;
}

function afficherCarte(valeur) {
    const carte = document.createElement("div");
    carte.classList.add("card");
    carte.textContent = valeur;
    mainElement.appendChild(carte);
}

function afficherMain() {
    mainElement.innerHTML = "";
    main.forEach((carte) => {
        afficherCarte(carte);
    });
}

function ajouterCarte() {
    const carte = distribuerCarte();
    main.push(carte);
    afficherMain();
}

function initialiserJeu() {
    main = [distribuerCarte(), distribuerCarte()];
    afficherMain();
}

drawCardButton.addEventListener("click", () => {
    ajouterCarte();
    const total = main.reduce((a, b) => a + b, 0);

    if (total > 21) {
        alert("Vous avez dépassé 21. Vous avez perdu.");
        initialiserJeu();
    } else if (total === 21) {
        alert("Catch 21! Vous avez gagné!");
        initialiserJeu();
    }
});

stopButton.addEventListener("click", () => {
    const total = main.reduce((a, b) => a + b, 0);
    alert(`Vous avez terminé avec ${total} points.`);
    initialiserJeu();
});

initialiserJeu();
