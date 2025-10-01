let year = prompt("Nhap nam can kiem tra:");
let result = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "Nam nhuan" : "Nam khong nhuan";
console.log(result);