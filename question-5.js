// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0;
  for (let i of products) {
    totalPrice = totalPrice + i.price * i.quantity;
  }

  if (promotionCode === "SALE20") {
    return totalPrice * 0.8;
  } else if (promotionCode === "SALE50") {
    return totalPrice * 0.5;
  } else {
    return totalPrice;
  }
}

console.log(calculateTotalPrice(products, ""));

console.log(calculateTotalPrice(products, "SALE20"));

console.log(calculateTotalPrice(products, "SALE50"));
