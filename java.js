var time = document.getElementById("time");

function updateTime() {
    var currentDate = new Date();

    var option = {year: 'numeric'};
    var formatedTime = currentDate.toLocaleDateString(undefined, option);

    time.textContent += ' ' + formatedTime;
}

updateTime();

