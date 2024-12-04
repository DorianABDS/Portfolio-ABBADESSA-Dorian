// Récupérer la checkbox et les SVG
const themeToggle = document.getElementById('theme-toggle');
const themeSwitch = document.getElementById('theme-switch');
let darkmode = localStorage.getItem('darkmode');

// Fonction pour activer le mode sombre
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    themeToggle.checked = true; // Marque la checkbox comme activée
};

// Fonction pour désactiver le mode sombre
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    themeToggle.checked = false; // Marque la checkbox comme désactivée
};

// Vérifier si le mode sombre était activé précédemment
if (darkmode === "active") enableDarkmode();

// Ajouter un écouteur d'événement sur la checkbox
themeSwitch.addEventListener("click", () => {
    if (themeToggle.checked) {
        enableDarkmode(); // Si la checkbox est cochée, activer le mode sombre
    } else {
        disableDarkmode(); // Si la checkbox est décochée, désactiver le mode sombre
    }
});