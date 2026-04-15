function sayHello() {
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
    } else if (operator === "+") {
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

function buttonLoop() {
    document.getElementById("result").innerHTML = ""
    for (let i = 1; i <= 10; i++) {
        document.getElementById("result").innerHTML += i + ","  + " "
    }
}

function multiPlication() {
    let num = Number(document.getElementById("inputnum").value)
    let answer = ""

    if (isNaN(num)) {
        answer = "กรุณาใส่ค่าเป็นตัวเลขเท่านั้น"
    } else {
        for (let i = 1; i <= 12; i++) {
            answer += num + " " + "×" + " " + i + " " + "=" + " " + (num * i) + "<br>"
        }
    }
    document.getElementById("answer").innerHTML = "ผลลัพธ์ :" + "<br>" + answer
}


let friends = ["ต้น", "เบส", "ไอซ์", "แจ๊ค", "แม็กซ์"]
function friendArray() {

    let i = 0
    let result = ""

    while (i < friends.length) {
        result += "คนที่ " + (i + 1 ) + " " + friends[i] + "<br>"
        i++
    }
    document.getElementById("result").innerHTML = "มีเพื่อนทั้งหมด " + friends.length + " คน" + "<br>" +result
}

function addFriend() {
    let newfriend = document.getElementById("addfriend").value

    if (newfriend.trim() !== "") { // trim ป้องกันการกด space
        friends.push(newfriend);
        document.getElementById("addfriend").value = ""   
        document.getElementById("answer").innerHTML = "เพิ่ม " + newfriend + " ในรายชื่อเพื่อนแล้ว"
        friendArray()
    }

}

let students = [
    {name : "ปิยพัทธ์" , age: 20, major: "IT"},
    {name : "วัฒนชัย" , age: 20, major: "IT"},
    {name : "นพรัตน์ " , age: 20, major: "MKT"},
    {name : "วิชยุตม์" , age: 20, major: "CS"}
]

function showStudents() {
    let result = ''
    for (let i = 0; i < students.length; i++) {
        result += "ชื่อ " + students[i].name + " | อายุ " + students[i].age + " | สาขา " + students[i].major + "<br>"
    }
    document.getElementById("studensobject").innerHTML = result
}

function addStudent() {
    let regex = /^[A-Za-z\u0E00-\u0E7F\s]+$/
    let result 

    let newStudent = {
        name : document.getElementById("name").value,
        age : Number(document.getElementById("age").value),
        major : document.getElementById("major").value,
    } 
     if (!regex.test(newStudent.name) && (isNaN (newStudent.age) || newStudent.age === "")){
        result = "กรุณากรอกชื่อเป็นตัวอักษรและอายุเป็นตัวเลข !"
         document.getElementById("result").innerHTML = result
        return
    } if (!regex.test(newStudent.name)) {
        result = "กรุณากรอกชื่อเป็นตัวอักษรเท่านั้น !"
         document.getElementById("result").innerHTML = result
         return
    } if (isNaN (newStudent.age) || newStudent.age === "" ) {
        result = "กรุณากรอกอายุเป็นตัวเลข !"
         document.getElementById("result").innerHTML = result
        return
    }
    students.push(newStudent)
    document.getElementById("name").value = ""
    document.getElementById("age").value = ""

    document.getElementById("result").innerHTML = "เพิ่มข้อมูลเรียบร้อย"


    showStudents()
}