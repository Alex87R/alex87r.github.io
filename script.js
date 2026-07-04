const targetDate = new Date("2026-12-31T23:59:59").getTime();

const timer = document.getElementById("timer");
const music = document.getElementById("bgMusic");
const video = document.getElementById("bgVideo");

/* =========================
   ТАЙМЕР ПОЯВЛЕНИЕ (17 сек)
========================= */

setTimeout(() => {
    timer.style.opacity = "1";
}, 17000);

/* =========================
   ФОРМАТ: 21 ч 45 м
========================= */

function formatTime(days, hours, minutes, seconds) {
    return `${days} д ${hours} ч ${minutes} м ${seconds} с`;
}

/* =========================
   COUNTDOWN
========================= */

function updateCountdown() {

    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
        timer.innerHTML = "🎉 Время пришло!";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = formatTime(days, hours, minutes, seconds);
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);

/* =========================
   MUSIC
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
   VIDEO
========================= */

if (video) {
    video.muted = true;
    video.volume = 0;
}
