const sum = (a , b) => { return a + b }
const section = 'Group1'
//common js module
//module.exports = {sum : sum, section : section} 
//module.exports = {sum , section}

//es module
// export {sum, section} //name export ชื่อตอนเรียกกับส่งต้องเหมือนกัน
export {sum as default, section} //ไปเปบี่ยนชื่อที่ปลายทางได้ แล้วไม่ต้องเรียกใน {} ด้วย