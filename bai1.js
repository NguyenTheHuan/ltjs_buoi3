let price = prompt("Nhập giá sản phẩm:");
console.log("Giá sản phẩm là: " + price);
let quantity = prompt("Nhập số lượng sản phẩm:");
console.log("Số lượng sản phẩm là: " + quantity);
let total = price * quantity;
total -= total * 0.1; // Giảm giá 10%
total += total * 0.05; // Thuế VAT 5%
console.log("Tổng tiền cần thanh toán là: " + total);