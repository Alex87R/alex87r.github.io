// ==========================
// ДАТА ОКОНЧАНИЯ
// ==========================

const targetDate = new Date("2026-12-31T23:59:59").getTime();

const timer = document.getElementById("timer");

function updateCountdown() {

    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
        timer.textContent = "🎉 Время пришло!";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.textContent =
        `${days}д ${String(hours).padStart(2,"0")}ч ${String(minutes).padStart(2,"0")}м ${String(seconds).padStart(2,"0")}с`;
}

updateCountdown();

const interval = setInterval(updateCountdown, 1000);

// ==========================
// ФОНОВАЯ МУЗЫКА
// ==========================

const music = document.getElementById("bgMusic");

if (music) {

    music.volume = 0.5;

    music.play().catch(() => {

        document.addEventListener("click", () => {

            music.play().catch(() => {});

        }, { once: true });

    });

}
