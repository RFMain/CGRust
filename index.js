
const targetDate = new Date("2024-11-07T19:00:00").getTime();

const timerElement = document.getElementById('timer');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;


    console.log("Target Date:", new Date(targetDate));
    console.log("Current Date:", new Date(now));
    console.log("Distance (ms):", distance);


    if (distance < 0) {
        clearInterval(countdown);
        timerElement.textContent = "Event Started!";
        return;
    }


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );


    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


const countdown = setInterval(updateCountdown, 1000);


updateCountdown();
