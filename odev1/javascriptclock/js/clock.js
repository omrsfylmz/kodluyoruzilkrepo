const userNameEl = document.getElementById('myName')
const clock = document.getElementById('myClock')

let userName = prompt('Lutfen adinizi giriniz:');
userNameEl.innerHTML = userName

function showDate() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds()
    let session = date.getDay();

    if (session == 1) {
        session = "Pazartesi";
    } else if (session == 2) {
        session = "Salı";
    } else if (session == 3) {
        session = "Çarşamba";
    } else if (session == 4) {
        session = "Perşembe";
    } else if (session == 5) {
        session = "Cuma";
    } else if (session == 6) {
        session = "Cumartesi";
    } else if (session == 7) {
        session = "Pazar";
    }
    let currentDate = `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`
    clock.innerHTML = currentDate

}

setInterval(showDate, 1000)
