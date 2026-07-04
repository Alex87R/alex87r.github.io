// =====================================
// ДАТА ОКОНЧАНИЯ
// =====================================

// Измените на нужную дату
const targetDate = new Date("2026-12-31T23:59:59").getTime();

// =====================================
// ЭЛЕМЕНТЫ
// =====================================

const timer = document.getElementById("timer");
const music = document.getElementById("bgMusic");
const video = document.getElementById("bgVideo");

// =====================================
// ПОЯВЛЕНИЕ ТАЙМЕРА ЧЕРЕЗ 5 СЕКУНД
// =====================================

setTimeout(() => {
    timer.style.opacity = "1";
}, 5000);

// =====================================
// ОБРАТНЫЙ ОТСЧЕТ
// =====================================

function updateCountdown() {

    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
        timer.textContent = "🎉 Время пришло!";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    timer.textContent =
        `${days}д ` +
        `${String(hours).padStart(2, "0")}ч ` +
        `${String(minutes).padStart(2, "0")}м ` +
        `${String(seconds).padStart(2, "0")}с`;
}

updateCountdown();

const interval = setInterval(updateCountdown, 1000);

// =====================================
// НАСТРОЙКА ВИДЕО
// =====================================

if (video) {

    // Видео всегда без звука
    video.muted = true;
    video.volume = 0;

    // Запуск после загрузки страницы
    video.play().catch(() => {});

    // На случай, если браузер остановит видео
    video.addEventListener("ended", () => {
        video.play();
    });

}

// =====================================
// ФОНОВАЯ МУЗЫКА
// =====================================

if (music) {

    music.loop = true;
    music.volume = 0.4;

    // Попытка автозапуска
    music.play().catch(() => {

        // Если браузер запретил — запуск после первого клика
        document.addEventListener("click", () => {
            music.play().catch(() => {});
        }, { once: true });

    });

}
