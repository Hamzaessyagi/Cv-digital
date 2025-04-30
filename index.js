const descc = document.querySelector('.descc');
const vd = document.querySelector('.vd');  // Cibler la vidéo ici

descc.addEventListener('click', () => {
    if (vd.style.display === "none" || vd.style.display === "") {
        vd.style.display = "flex";  // Afficher la vidéo
    } else {
        vd.style.display = "none";  // Cacher la vidéo
    }
});