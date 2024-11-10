console.log("Я загадал число от 1 до 10. Попробуй угадать его!");
// let userNumber = Number(prompt('введите число'));
// console.log(+userNumber - 5);
let secretNumber = Math.floor(Math.random() * 10)+ 1;
let attempts = 3;
while (attempts > 0) {
    let userNumber = Number(prompt('введите число'));

    if (userNumber < secretNumber) {
        console.log("секретное число больше");
        attempts--;
        console.log("у вас осталось " + attempts + " попыток");
       
    }
    else if (userNumber === secretNumber) {
        console.log("вы угадали");
        break;
    } else {
        console.log("секретное число меньше");
        attempts--;
        console.log("у вас осталось " + attempts + " попыток");
     
    }
}
