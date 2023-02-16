// ข้อ 3.1
function getDogDemo(url) {
  // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
  // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร

  function setimg(url){
    document.getElementById('dogImg').src = url.message;
  }
  
  var num = 10;
  var stop = setInterval(run , 1000);
  function run(){
    document.getElementById("dogTime").innerHTML = num  
    num--
    if( num == -1 ){
      getAPI("https://dog.ceo/api/breeds/image/random",setimg,console.log)
      clearInterval(stop)
    }
  }
  

}


// ข้อ 3.2
function Rainbow() {
  //TODO
  // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
  // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
  // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')

  const rainbow = document.getElementById("rainbow")
  setTimeout(() => {
     //STATE 1 color = 'has-text-primary'
     var state1 = getResult()
     if(state1.status == 'error'){
      document.getElementById('rainbow').innerHTML = 'error'
      rainbow.setAttribute('class','has-text-danger')
     }
     else{
      document.getElementById('rainbow').innerHTML = state1.text
      rainbow.setAttribute('class','has-text-primary')
     }
      setTimeout(() => {
        //STATE 2 color = 'has-text-success'
        var state2 = getResult()
        if(state2.status == 'error'){
          document.getElementById('rainbow').innerHTML = 'error'
          rainbow.setAttribute('class','has-text-danger')
         }
         else{
          document.getElementById('rainbow').innerHTML = state2.text
          rainbow.setAttribute('class','has-text-success')
         }
        setTimeout(() => {
            // STATE 3 color = 'has-text-success'
            var state3 = getResult()
            if(state3.status == 'error'){
              document.getElementById('rainbow').innerHTML = 'error'
              rainbow.setAttribute('class','has-text-danger')
             }
             else{
              document.getElementById('rainbow').innerHTML = state3.text
              rainbow.setAttribute('class','has-text-success')
             }
        }, 2000)

      }, 2000)

  }, 2000)
}

function getResult(){
  const num = Math.floor(Math.random() * 10)
  console.log(num)
  if(num > 5) {
    return {
      'status': 'success',
      'text': num
    }
  }else{
    return {
      'status': 'error',
      'text': num
    }
  }
}

// ข้อ 3.3
function evenNumber(num) {
  var num = document.getElementById("number").value
  return new Promise((reslove, reject) =>{
    setTimeout(() => {
      if(num % 2 == 0){
        reslove(document.getElementById('result').innerHTML = "success : " + num + " is an even number")
      }
      else{
        reject(document.getElementById('result').innerHTML = "Error : " + num + " is not an even number")
      }
    },1000);
  })
  

}

// ข้อ 3.4
function task(id) {
  const delay = parseInt(Math.random() * 1000)
  // return promise   
  return new Promise((reslove, reject) =>{
    setTimeout(() => {
      if(delay < 500){
        reslove('task ' + id + ': ' + delay+ 'ms ... PASS!');
      }
      else{
        reject('task ' + id + ': ' + delay+ 'ms ... NOTPASS!');
      }
    },delay);
    console.log("sdsaasdasadsd")
  })
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
  // ต้องเรียก function task 4 ครั้ง เปลี่ยน id ไปเรื่อยๆ

  task(1).then(function (result){
    console.log(result);
}).catch(function (error){
    console.log(error);
  })
  task(2).then(function (result){
    console.log(result);
  }).catch(function (error){
    console.log(error);
  })
  task(3).then(function (result){
    console.log(result);
  }).catch(function (error){
    console.log(error);
  })
  task(4).then(function (result){
    console.log(result);
  }).catch(function (error){
    console.log(error);
  })


  
}

// ข้อ 3.5
// hint : เรียก getAPI() ที่ url = https://api.thecatapi.com/v1/images/search 
// อย่าลืม console.log() ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {
  return new Promise((reslove, reject) =>{
    if(password == 'Cisco'){
      reslove(alert("รหัสผ่านถูกต้อง"))
    }
    else{
      reject(alert("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง"))
    }
  })
}

function fetchData(password) {
  let auth = checkAuth(password)

  function setcat(json){
    document.getElementById('cat').src = json[0].url;
  }
  
  auth.then(
    result => {
      getAPI("https://api.thecatapi.com/v1/images/search",setcat,console.log)
    },
    error => {
    }
  )

}

// GET API
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
