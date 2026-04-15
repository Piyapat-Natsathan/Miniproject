function sayHello () {
    alert("สวัสดี !")
}

function showGreet() {
    let name = document.getElementById("nameInput").value
    document.getElementById("result").innerHTML = "สวัสดีคุณ" + " " + name + "ครับ !"
    
}

function changText() {
    document.getElementById("message").innerHTML = "ข้อความใหม่"
}

function calculate() {
        let num1 = Number(document.getElementById("num1").value)
        let num2 = Number(document.getElementById("num2").value)
        let operator = document.getElementById("operator").value
        let result

        if (isNaN(num1) || isNaN(num2)) {
            result = "กรุณาใส่ค่าเป็นตัวเลข"
        } else if (operator === "+"){
            result = num1 + num2
        } else if (operator === "-") { 
            result = num1 - num2
        } else if (operator === "*") { 
            result = num1 * num2
        } else if (operator === "/") {
            if (num2 === 0) {
                result = "หารด้วย 0 ไม่ได้ !"
            } else {
                result = num1 / num2
            }
        }
            
        document.getElementById("result").innerHTML = "ผลลัพธ์ :<br>" + " " + result
}