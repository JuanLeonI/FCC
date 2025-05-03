document.addEventListener('DOMContentLoaded', () => {
    // Configuración del reproductor
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    const volumeControl = document.getElementById('volumeControl');
    
    // Volumen inicial
    music.volume = 0.7;
    
    // Control Play/Pause
    musicBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play()
                .then(() => {
                    musicBtn.innerHTML = '<i class="bx bx-pause"></i>';
                })
                .catch(e => {
                    alert("Toca cualquier parte de la página para activar la música");
                });
        } else {
            music.pause();
            musicBtn.innerHTML = '<i class="bx bx-play"></i>';
        }
    });
    
    // Control de Volumen
    volumeControl.addEventListener('input', () => {
        music.volume = volumeControl.value;
    });
    
    // Permitir reproducción en móviles (requiere interacción primero)
    document.body.addEventListener('click', function initMusic() {
        music.play()
            .then(() => {
                musicBtn.innerHTML = '<i class="bx bx-pause"></i>';
            })
            .catch(e => console.log("Autoplay bloqueado:", e));
        document.body.removeEventListener('click', initMusic);
    }, { once: true });
});