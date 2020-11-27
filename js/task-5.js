const counrtyDelivery = prompt("Укажите страну досавки");
let delivery;
if (counrtyDelivery === null) {
    console.log('Отменено пользователем!');
} else {
    switch (counrtyDelivery.toLowerCase()) {
    case 'китай':
        delivery = 100;
        console.log(`Доставка в ${counrtyDelivery} будет стоить ${delivery} кредитов`)
        break;
    case 'чили':
        delivery = 250;
        console.log(`Доставка в ${counrtyDelivery} будет стоить ${delivery} кредитов`)
        break;
    case 'австралия':
        delivery = 170;
        console.log(`Доставка в ${counrtyDelivery} будет стоить ${delivery} кредитов`)    
        break;
    case 'индия':
        delivery = 80;
        console.log(`Доставка в ${counrtyDelivery} будет стоить ${delivery} кредитов`)    
        break;
    case 'ямайка':
        delivery = 120;
        console.log(`Доставка в ${counrtyDelivery} будет стоить ${delivery} кредитов`)    
        break;
    default:
        alert('В вашей стране доставка не доступна');
        
    }
}

