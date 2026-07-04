document.addEventListener("DOMContentLoaded", () => {

    const targetDate = new Date("2026-12-31T23:59:59").getTime();

    const timer = document.getElementById("timer");
    const music = document.getElementById("bgMusic");
    const video = document.getElementById("bgVideo");

    function update() {

        const now = Date.now();
        const diff = targetDate - now;

        if (diff <= 0) {
            timer.textContent = "ВРЕМЯ ПРИШЛО!";
            return;
        }

        const d = Math.floor(diff / (1000*60*60*24));
        const h = Math.floor((diff / (1000*60*60)) % 24);
        const m = Math.floor((diff / (1000*60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        timer.textContent = `${d} д ${h} ч ${m} м ${s} с`;
    }

    update();
    setInterval(update, 1000);

    if (video) {
        video.muted = true;
        video.play().catch(()=>{});
    }

    if (music) {
        music.volume = 0.4;

        music.play().catch(() => {
            document.addEventListener("click", () => {
                music.play();
            }, { once: true });
        });
    }

});
