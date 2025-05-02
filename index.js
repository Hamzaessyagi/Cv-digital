const descc = document.querySelector('.descc');
const vd = document.querySelector('.vd');  // Cibler la vidéo ici

descc.addEventListener('click', () => {
    if (vd.style.display === "none" || vd.style.display === "") {
        vd.style.display = "flex";  // Afficher la vidéo
    } else {
        vd.style.display = "none";  // Cacher la vidéo
    }
});

function toggleContact() {
  const bar = document.getElementById('contact-bar');
  if (bar.style.display === 'none') {
    bar.style.display = 'block';
  } else {
    bar.style.display = 'none';
  }
}

