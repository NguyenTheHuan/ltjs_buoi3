let weight = prompt("Nhap can nang cua ban (kg):");
let height = prompt("Nhap chieu cao cua ban (m):");
let bmi = weight / (height * height);
let result = (bmi < 18.5) ? "Gay" : (bmi => 25) ? "Beo" : "Binh thuong";
console.log("Chi so BMI cua ban la: " + bmi + ", Ban thuoc loai: " + result);