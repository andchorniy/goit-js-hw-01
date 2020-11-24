let input;
let total = 0;
while (input !== null) {
    input = prompt("Введите число или нажмите 'Cancel'");

    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
    } else {
        input = Number(input);
        total += input;
    }

}
