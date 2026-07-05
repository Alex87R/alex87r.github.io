const music = document.getElementById("bgMusic");
const video = document.getElementById("bgVideo");

/* 🎵 МУЗЫКА (авто + fallback на клик) */
if (music) {
    music.volume = 0.4;

    const playMusic = () => {
        music.play().catch(() => {});
    };

    playMusic();

    document.addEventListener("click", playMusic, { once: true });
    document.addEventListener("touchstart", playMusic, { once: true });
}

/* 🎥 ВИДЕО (на всякий случай принудительный старт) */
if (video) {
    video.muted = true;
    video.play().catch(() => {});
}
