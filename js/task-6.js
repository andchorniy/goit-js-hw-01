let input;
let total = 0;
while (input !== null) {
    input = prompt("Введите число или нажмите 'Cancel'");
    if (isNaN(Number(input)))
        alert('Было введено не число, попробуйте еще раз');
    else {
        if (input === null) {
            alert(`Общая сумма чисел равна ${total}`);
        } else {
            input = Number(input);
            total += input;
    }
    }

}
