const Empname = "karn"
const Empid = "510951"
const array = [100, 200, 300]
const newarray = [1, 2, ...array]
let newdata = [3, 4, 5]
newarray.push(...newdata) //push in to array
newarray.unshift(0) //insert front
newarray.shift() //remove front
newarray.splice(1, 2, 100) //(ต่ำแหน่งเริ่มต้น  จำนวนที่ลบ  แทนที่)
console.log(newarray.slice(1, 5)) //ดึงข้อมูลออกมาในตำแหน่ง(ต่ำแหน่งเริ่มต้น  ต่ำแหน่งสินสุด)
const newarray2 = newarray.join("/") // call sting in array
console.log(newarray2)
const index = newarray.indexOf(200) // seach index
console.log("index" + index)
newarray.forEach(e => { // foreach cant break and continute
    if (e >= 50) {
        console.log(e)
    }
})
for (const element of newarray) {
    if (element >= 50) {
        console.log("pass" + element)
    }
}
const details = `ชื่อ : ${Empname} 
รหัสประจำตัว  : ${Empid}`
const Employee = { //object
    Empname,
    Empid,
    showdata() { //method in object
        console.log(details + newarray)
    }
}
sum_allnum = (...num) => { //function รับค่าinputไม่จำกัด
    let total = 0
    for (let number of num) total += number
    return total
}
fullname = (name, lastname = "shirou") => { //defualt parameter
        const details = name + lastname //normal function
        return details
    }
    //Employee.showdata();
console.log(sum_allnum(100, 200));
console.log(fullname("fubukai"));
const { Empname: name1, Empid: id } = Employee
console.log(name1 + id)