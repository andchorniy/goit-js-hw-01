const counrtyDeliver = prompt("Укажите страну досавки");
let delivery;
switch (counrtyDeliver.toLowerCase()) {
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
console.log(`Доставка в ${counrtyDeliver} будет стоить ${delivery} кредитов`)