const target = new Date("2026-12-31T23:59:59");

function updateTimer() {

    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
        document.getElementById("timer").innerHTML = "Время наступило!";
        return;
    }

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("timer").innerHTML =
        `${days} д ${hours} ч ${minutes} мин ${seconds} сек`;
}

updateTimer();
setInterval(updateTimer, 1000);