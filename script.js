document.addEventListener("DOMContentLoaded", () => {

    const targetDate = new Date("2026-12-31T23:59:59").getTime();

    const timer = document.getElementById("timer");
    const music = document.getElementById("bgMusic");
    const video = document.getElementById("bgVideo");

    /* =========================
       ВИДЕО ПОЯВЛЕНИЕ (4 сек)
    ========================= */

    setTimeout(() => {
        if (video) {
            video.style.opacity = "1";
            video.style.filter = "brightness(1)";
        }
    }, 4000);

    /* =========================
       ТАЙМЕР ПОЯВЛЕНИЕ (17 сек)
    ========================= */

    setTimeout(() => {
        if (timer) {
            timer.style.opacity = "1";
        }
    }, 17000);

    /* =========================
       ОБРАТНЫЙ ОТСЧЕТ
    ========================= */

    function updateCountdown() {

        const now = Date.now();
        const distance = targetDate - now;

        if (distance <= 0) {
            timer.textContent = "🎉 ВРЕМЯ ПРИШЛО!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.textContent =
            `${days} д ${hours} ч ${minutes} м ${seconds} с`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* =========================
       МУЗЫКА
    ========================= */

    if (music) {
        music.volume = 0.4;

        music.play().catch(() => {
            document.addEventListener("click", () => {
                music.play().catch(() => {});
            }, { once: true });
        });
    }

    /* =========================
       ВИДЕО СТАРТ
    ========================= */

    if (video) {
        video.muted = true;
        video.play().catch(() => {});
    }

});
