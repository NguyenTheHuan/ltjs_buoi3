let year = prompt("Nhap nam can kiem tra:");
let result =(year <= 0 || isNaN(year)) ? " Nam khong hop le" : (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "Nam nhuan" : "Nam khong nhuan";
document.write("Nam " + year + " la: " + result);