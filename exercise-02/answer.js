// ข้อ 2.1
function addEvent() {
    /* 
    TODO
     1. สร้าง function สำหรับ callback
     2. Get Element ที่ต้องการจะเพิ่ม Event
     3. Add Event ให้ Element 
     4. ใส่ callback function ให้ Event
    ตัวช่วย
    https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    */ 

     
}

// ข้อ 2.2
function start() {
    // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
}

// ข้อ 2.3
function stopTime() {

}

// ข้อ 2.4
function getDogDemo(url) {
    // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
    // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร

}


// ข้อ 2.5
function Rainbow() {
    //TODO
    // 1. ทำการเช็ค Error ว่ามาจาก State ใด
    // 2. ให้แสดงชื่อ State ในกล่องข้อความเมื่อเกิด Error
    // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error

    const colors = ['has-text-primary','has-text-success', 'has-text-warning', 'has-text-danger']

    const animateAll = (callbackFunct) => {
       setTimeout(() => {
            //State1 ใช้ try catch 
            callbackFunct(colors[0])
            
            
            setTimeout(() => {
                //State2 ใช้ try catch 
                callbackFunct(colors[1])
                

                setTimeout(() => {     
                    //State3 ใช้ try catch 
                    callbackFunct(colors[2])

                    
                }, 1000)
            }, 1000)
        }, 1000)
    }

    animateAll(changeText);
}

function changeText(word){
    const num = Math.floor(Math.random() * 10)
    const rainbow = document.getElementById("rainbow")
    if(num > 6) {
        rainbow.innerText = num
        rainbow.className = word
    }else{
        throw new Error("Error")
    }
}

