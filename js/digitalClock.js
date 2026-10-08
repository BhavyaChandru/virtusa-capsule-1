function displayTime() {

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    let time = hours + ":" + minutes + ":" + seconds;

    console.log(time);
}

displayTime();

