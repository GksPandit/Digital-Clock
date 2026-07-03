const clock = document.querySelector("#clock");

function updateClock() {

    // Har second current time lo
    const date = new Date();

    // Hour, Minute, Second nikalo
    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");

    // 24 Hour -> 12 Hour Format
    let period = "AM";

    if (hours >= 12) {
        period = "PM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    // Display Update
    clock.textContent = `${hours}:${minutes}:${seconds} ${period}`;
}

// Page load hote hi ek baar clock dikhao
updateClock();

// Har 1 second baad update karo
setInterval(updateClock, 1000);