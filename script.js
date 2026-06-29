const target = new Date("2026-7-10T15:00:00");

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
