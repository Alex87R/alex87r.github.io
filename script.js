const targetDate = new Date("2026-12-31T23:59:59").getTime();

const timer = document.getElementById("timer");
const music = document.getElementById("bgMusic");
const video = document.getElementById("bgVideo");

/* =========================
   ПОЯВЛЕНИЕ ТАЙМЕРА (16 сек)
========================= */

setTimeout(() => {
    timer.style.opacity = "1";
}, 16000);

/* =========================
   АНИМАЦИЯ ЦИФР
========================= */

function formatWithAnimation(text) {
    return text
        .split("")
        .map((char, i) => {
            return `<span class="digit" style="animation-delay:${i * 0.03}s">${char}</span>`;
        })
        .join("");
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

    const text =
        `${days}д ${String(hours).padStart(2,"0")}ч ${String(minutes).padStart(2,"0")}м ${String(seconds).padStart(2,"0")}с`;

    timer.innerHTML = formatWithAnimation(text);
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
