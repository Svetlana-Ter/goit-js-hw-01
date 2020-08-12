const invoice = 102;
const stock = 100;

// Write code under this line
const message =
  invoice <= stock
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно товаров!";

console.log(message);
