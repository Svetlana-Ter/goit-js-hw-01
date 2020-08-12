const userPassword = "fddd";

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
let message;

// Write code under this line
if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else {
  message = ACCESS_DENIED;
}

console.log(message);
