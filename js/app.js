const showClock = () => {
    let date = new Date();
    let hr = hourFormat(date.getHours());
    let min = hourFormat(date.getMinutes());
    let sec = hourFormat(date.getSeconds());
    document.getElementById('hour').innerHTML = `${hr}:${min}:${sec}`;

    const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let weekDay = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let dataText = `${weekDay}, ${day}, ${month}`;
    document.getElementById('date').innerHTML = dataText;
}

const hourFormat = (hora) => {
    if (hora < 10) {
        hora = '0' + hora
    }
    return hora;
}

setInterval(showClock, 1000);