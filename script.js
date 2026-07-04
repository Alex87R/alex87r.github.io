// ================================
// ДАТА ОКОНЧАНИЯ
// ================================

// Укажите здесь нужную дату.
// Пример: 31 декабря 2026 23:59:59
const targetDate = new Date("2026-12-31T23:59:59").getTime();

const timer = document.getElementById("timer");

// ================================
// ОБРАТНЫЙ ОТСЧЕТ
// ================================

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

// Первый запуск
updateCountdown();

// Обновление каждую секунду
const interval = setInterval(updateCountdown, 1000);

// ================================
// ФОНОВАЯ МУЗЫКА
// ================================

const music = document.getElementById("bgMusic");

if (music) {

    // Громкость (от 0.0 до 1.0)
    music.volume = 0.4;

    // Попытка автозапуска
    music.play().catch(() => {

        // Если браузер заблокировал —
        // музыка начнет играть после первого клика
        document.addEventListener("click", () => {

            music.play().catch(() => {});

        }, { once: true });

    });

}

// ================================
// НАСТРОЙКА ВИДЕО
// ================================

const video = document.getElementById("bgVideo");

if (video) {

    // Гарантированно отключаем звук видео
    video.muted = true;
    video.volume = 0;

    // Если видео остановилось — запускаем снова
    video.addEventListener("ended", () => {
        video.play();
    });

}
