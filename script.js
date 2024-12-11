document.addEventListener('click', () => {
    const audio = document.getElementById('cancion');
    if (audio.paused) {
        audio.play();
    }
}, { once: true });

alert("Presiona cualquier lugar de la pantalla");