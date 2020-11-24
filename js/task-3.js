const ADMIN_PASSWORD = 'jqueryismyjam';

let message = prompt('Введите пароль');
switch (message) {
    case null:
        message = 'Отменено пользователем!';
        break;
    case 'jqueryismyjam':
        message = 'Добро пожаловать!';
        break;
    default:
        message = 'Доступ запрещен, неверный пароль!';  
}
// if (message === null) {
//     message = 'Отменено пользователем!';
// } else if (message === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// }
alert(message);