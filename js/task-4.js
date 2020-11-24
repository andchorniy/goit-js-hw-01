const credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt("Сколько дроидов вы хотите купить?");
if (quantity === null) {
    console.log('Отменено пользователем!');
} else {
    const totalPrice = pricePerDroid * quantity;
    console.log(totalPrice > credits ? 'Недостаточно средств на счету!' : `Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    // if (totalPrice > credits) {
    //     console.log('Недостаточно средств на счету!');
    // } else {
    //     console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
    // }
}
