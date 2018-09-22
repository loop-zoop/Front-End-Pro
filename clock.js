    function Clock() {
    let date = new Date();
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");

    function addZero(num) {
        if (num.toString().length == 1) {
          num = '0'+num;
        }
        return num;
    }

    if (hours.innerHTML != addZero(date.getHours())) {
        hours.innerHTML = addZero(date.getHours());
    }
    if (minutes.innerHTML != addZero(date.getMinutes())) {
        minutes.innerHTML = addZero(date.getMinutes());
    }
    if (day.innerHTML != addZero(date.getDate())) {
        day.innerHTML = addZero(date.getDate());
    }
    if (month.innerHTML != addZero(date.getMonth()+1)) {
        month.innerHTML = addZero(date.getMonth() + 1);
    }
    if (year.innerHTML != date.getFullYear()) {
        year.innerHTML = date.getFullYear();
    }
    setTimeout(Clock, 500);
}