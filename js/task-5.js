const counrtyDelivery = prompt("Укажите страну досавки");
let delivery = 0;
if (counrtyDelivery === null) {
    console.log('Отменено пользователем!');
} else {
    switch (counrtyDelivery.toLowerCase()) {
    case 'китай':
        delivery = 100;
        break;
    case 'чили':
        delivery = 250;
        break;
    case 'австралия':
        delivery = 170;
        break;
    case 'индия':
        delivery = 80;
        break;
    case 'ямайка':
        delivery = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна');
        
    }
    if (delivery !== 0) {
        console.log(`Доставка в ${counrtyDelivery} будет стоить ${delivery} кредитов`);
    }
    
}

