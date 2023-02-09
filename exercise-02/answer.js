// ข้อ 2.1

function display(msg) {
    let div = document.getElementById('ex01-div')
    div.innerHTML = msg
}

function showConfirm(callback) {
    if (confirm("Ok = ยืนยันจ้า\nCancel = ไม่ดีกว่า") == true) {
         msg = "ยืนยันจ้า";
      } else {
         msg = "ไม่ดีกว่า";
      }
    callback(msg)
    // You code here
}

// ข้อ 2.2
function start() {
    // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
    document.getElementById('start').innerHTML = "Program started"
    setTimeout(() => {
        document.getElementById('process').innerHTML = "Hello World"
        setTimeout(() => {
            document.getElementById('end').innerHTML = "Program ended"
        }, 3000);
        
    }, 2000);
}

// ข้อ 2.3
let round = 0
function stopTime() {
    if(round > 0){
        clearInterval(countdown);
        round--
    }
    round++
    time = document.getElementById('Time').value
    document.getElementById('setMinute').innerHTML = "00"
    document.getElementById('setSecond').innerHTML = "00"
    countdown = setInterval(() => {
        let min = (time-time%60)/60
        let sec = time%60
        if(min < 10){
            document.getElementById('setMinute').innerHTML = "0"+((time-time%60)/60)
        }
        else{
            document.getElementById('setMinute').innerHTML = ((time-time%60)/60)
        }
        if(sec < 10){
            document.getElementById('setSecond').innerHTML = "0"+(time%60)
        }
        else{
            document.getElementById('setSecond').innerHTML = (time%60)
        }
        time--
        if (time <= 0) {
            clearInterval(countdown);
            document.getElementById('setMinute').innerHTML = "00"
            document.getElementById('setSecond').innerHTML = "00"
        }
    }, 1000);

}
