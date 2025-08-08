AOS.init();

const dateFuture = new Date('oct 15,2024 19:00:00');
const timeStampEvent = dateFuture.getTime();

const countingTheHours = setInterval(function () {
    const now = new Date();
    const timeStampCurrent = now.getTime();

    const timeToEvent = timeStampEvent - timeStampCurrent;

    const dayIsMs = 1000 * 60 * 60 * 24;
    const hoursIsMs = 1000 * 60 * 60;
    const minutesIsMs = 1000 * 60;
    const secondsIsMs = 1000;

    const daysToEvent = Math.floor(timeToEvent / dayIsMs);
    const hoursToEvent = Math.floor((timeToEvent % dayIsMs) / hoursIsMs);
    const minutesToEvent = Math.floor((timeToEvent % hoursIsMs) / minutesIsMs);
    const secondsToEvent = Math.floor((timeToEvent % minutesIsMs) / secondsIsMs);

    console.log(daysToEvent);
    console.log(hoursToEvent);
    console.log(minutesToEvent);
    console.log(secondsToEvent);

    document.getElementById('contador').innerHTML = `${daysToEvent}D ${hoursToEvent}H ${minutesToEvent}M ${secondsToEvent}S`

    if (timeToEvent < 0) {
        clearInterval(countingTheHours);
        document.getElementById('contador').innerHTML = `Conteudo expirado!`;
    }
}, 1000);