const sidebar = document.getElementById("sidebar");
const mobileNavbar = document.getElementById("mobileNavbar");

// Fonction de redimensionnement pour afficher ou masquer les éléments en fonction de la largeur de l'écran
function checkLayout() {
    if (window.innerWidth <= 992) {
        sidebar.style.setProperty('display', 'none', 'important');
        mobileNavbar.style.setProperty('display', 'block', 'important');
    } else {
        sidebar.style.setProperty('display', 'flex', 'important');
        mobileNavbar.style.setProperty('display', 'none', 'important');
    }  
}

// Au lancement de la page 
checkLayout();

// À chaque redimensionnement de la fenêtre
window.addEventListener('resize', checkLayout);