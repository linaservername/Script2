var age = +prompt('Введите свой возраст в цифрах')
if (age > 0 && age <= 18) {
    alert('Вы ещё  молоды, Вам нужно учиться');
} else if (age > 18 && age <= 50) {
    alert('Вам нужно работать');
} else if (age > 50 && age <= 59) {
    alert('Вам пора на пенсию');
} else if (age > 59 && age <= 100) {
    alert('Вы пенсионер');
} else {
    alert('Введите корректные данные');
}


var time = +prompt('Введите время в цифрах')
switch (time) {
    case 0:
        alert('полночь')
        break;
    case 1:
        alert('1 час ночи')
        break;
    case 2:
        alert('2 часа ночи')
        break;
    case 3:
        alert('3 часа ночи')
        break;

    case 4:
        alert('4 часа утра')
        break;
    case 5:
        alert('5 часов утра')
        break;

    case 6:
        alert('6 часов утра')
        break;
    case 7:
        alert('7 часов утра')
        break;
    case 8:
        alert('8 часов утра')
        break;
    case 9:
        alert('9 часов утра')
        break;
    case 10:
        alert('10 часов утра')
        break;
    case 11:
        alert('11 часов дня')
        break;
    case 12:
        alert('полдень')
        break;
    case 13:
        alert('1 час дня')
        break;
    case 14:
        alert('2 часа дня')
        break;
    case 15:
        alert('3 часа дня')
        break;
    case 16:
        alert('4 часа дня')
        break;
    case 17:
        alert('5 часов вечера')
        break;
    case 18:
        alert('6 часов вечера')
        break;
    case 19:
        alert('7 часов вечера')
        break;
    case 20:
        alert('8 часов вечера')
        break;
    case 21:
        alert('9 часов вечера')
        break;
    case 22:
        alert('10 часов вечера')
        break;
    case 23:
        alert('11 часов вечера')
        break;

    default:
        alert('Время введено неверно!')
        break;
}

var a = +prompt('Введите первое число')
var b = +prompt('Введите второе число')
var c = +prompt('Введите третье число')

if (a < b && a > c || a > b && a < c) {
    alert('Среднее число ' + a);
} else if (b < c && b > a || b > c && b < a) {
    alert('Среднее число ' + b);
} else if (c < b && c > a || c > b && c < a) {
    alert('Среднее число ' + c);
} else {
    alert('Введите числа');
}

