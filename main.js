var interval;
var started = false;
var time = 0;
setUp();

//запускает и останавливает отсчет времени
function startTime() {
    if (started == false) {
        interval = setInterval(function () {
            time += 0.01;
            time_str = time.toFixed(2);
            document.getElementById("timer").innerHTML = time_str;
        }, 10)
        started = true;
    }
    else {
        clearInterval(interval);
        started = false;
    }
}

//стирает результат
function resetTime() {
    time = 0;
    document.getElementById("timer").innerHTML = time;
    var timeList = document.getElementById("pastTime");
    var listArray = document.getElementsByTagName('li');
    var listLength = listArray.length;    
    for (var i = listLength-1; i >= 0; i--) {
        timeList.removeChild(listArray[i]);
    }    
}

//записывает результат
function recordTime() {
    time_str = time.toFixed(2);
    var newTime = document.createElement("li");
    newTime.innerHTML += time_str;
    document.getElementById("pastTime").appendChild(newTime);
}

//основная функция, обрабатывает события
function setUp() {
    var startBtn = document.getElementById("start");
    var resetBtn = document.getElementById("reset");
    var recordBtn = document.getElementById("record");
    startBtn.addEventListener('click', function () {
        startTime();
    });
    resetBtn.addEventListener('click', function () {
        resetTime();
    });
    recordBtn.addEventListener('click', function () {
        recordTime();
    });
}
