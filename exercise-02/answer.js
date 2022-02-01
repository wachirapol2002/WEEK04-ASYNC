// ข้อ 2.1
function displayMax() {
    // hint: ทำการเรียก function findMax ส่งตัวเลขตัวที่ 1 ไปที่ num1 และ ตัวเลขตัวที่ 2 ไปที่ num2 
    // และส่ง display เป็น callback function เพื่อแสดงผล
}
function findMax(num1, num2, display) {
    
}

// ข้อ 2.2
function start() {
    // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
}

// ข้อ 2.3
function myTime() {
    
}
function mytimeStop() {
    
}

// ข้อ 2.4
function getDogDemo(url) {
    // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
    // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร

}

// ข้อ 2.5
function getMedium(url) {
    // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://v1.nocodeapi.com/jacktnp/medium/xvYwlRhrjtVLsWUn
    // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร
   
}

// ข้อ extra
function stopTime() {
    
}

// ฟังก์ชันเรียก API
function getAPI(url, success, error) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.response);
            success(res);
        } else if (this.readyState == 4) {
            const res = JSON.parse(this.response);
            error(res);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.send();
}