let username = prompt("Nhap ten cua ban:");
let password = prompt("Nhap mat khau cua ban:");
let result = (username === "admin" && password === "123456") ? "Dang nhap thanh cong" : "Dang nhap that bai, vui long kiem tra lai";
console.log(result);