const elements = {
    timer: document.getElementById("timer"),
    start: document.getElementById("btn-start"),
    reset: document.getElementById("btn-reset")
}

let running = false;
//function to start the timer
function start() {
    running = !running;
    elements.start.innerText = running ? "Stop" : "Start";
    console.log(running);
}

//function to reset the timer
function reset() {
    timer.value = "00:00:00";
    clearInterval()
}