
//                    1

console.log('1 задание')
console.log('_____________________________________')

alert('(1 задание) Нахождение наибольшего числа ');
var A = prompt('Введите число A: ')
var B = prompt('Введите число B: ')
console.log('A= ' + A)
console.log('B= ' + B)

if (A > B) {
    alert(A);
    console.log('Наибольшее число= ' + A)
}
else {
    alert(B);
    console.log('Наибольшее число= ' + B)
}

console.log('_____________________________________')
                                  // 2
console.log('2 задание')
console.log('_____________________________________')

alert('(2 задание) Упорядочение чисел по возрастанию ');
var X = prompt('Введите число X: ')
var Y = prompt('Введите число Y: ')
console.log('X= ' + X)
console.log('Y= ' + Y)

if (X > Y) {
    alert(Y);
    alert(X);
    console.log('Возрастающая последовательность= ' + Y + X)
}
else {
    alert(X);
    alert(Y);
    console.log('Возрастающая последовательность= ' + X + Y)
}
console.log('_____________________________________')
                                //3
console.log('3 задание')
console.log('_____________________________________')

alert('(3 задание) if(0) не сработает');
console.log('if (0) {')
console.log('console.log ( "Привет" );')
console.log('}')
console.log('Ничего не выведет т.к условие тождественно ложно и никогда не выполниться')

console.log('_____________________________________')
                              //4
console.log('4 задание')
console.log('_____________________________________')

alert('(4 задание) Нахождение максимальной переменной среди 3 чисел');
var A = prompt('Введите число A: ')
var B = prompt('Введите число B: ')
var C = prompt('Введите число C: ')

console.log('A= ' + A)
console.log('B= ' + B)
console.log('C= ' + C)

/* Почему нельзя было сделать проще
var num = [A, B, C];
console.log(Math.max(num[0,1,2]));                    !!!!!!!
Почему нельзя было сделать проще*/

if (A > B) { D = A; } else { D = B; }
if (C > D) { D = C; }
alert(D);
console.log('Наибольшее число: ' + D)

console.log('_____________________________________')
                                //5
console.log('5 задание')
console.log('_____________________________________')
alert('(5 задание) Нахождение старшего родителя');
var ageFa = prompt('Введите возраст папы: ')
var ageMa = prompt('Введите возраст мамы: ')

console.log('Возраст папы: ' + ageFa)
console.log('Возраст мамы: ' + ageMa)

if (ageFa > ageMa) { console.log('Мама старше папы'); }
else { console.log('Папа старше мамы'); }

console.log('_____________________________________')

                        //6
console.log('6 задание')
console.log('_____________________________________')
alert('(6 задание) Нахождение старшего родителя');
var ageFa = prompt('Введите возраст папы: ')
var ageMa = prompt('Введите возраст мамы: ')

console.log('Возраст папы: ' + ageFa)
console.log('Возраст мамы: ' + ageMa)

if (ageFa = ageMa) { console.log('Мои родители - ровесники'); }
else {
    if (ageFa > ageMa) { console.log('Мама старше папы'); }
    else { console.log('Папа старше мамы'); }
}


console.log('_____________________________________')




                          //8
console.log('8 задание')
console.log('_____________________________________')
alert('(8 задание) Условие на тернарном операторе');

var value = prompt('Введите число: ')

alert((value == 1000) ? 'Верно' : 'Неверно')
console.log((value == 1000) ? 'Верно' : 'Неверно');

console.log('_____________________________________')


                                //8.1
console.log('8.1 задание')
console.log('_____________________________________')
alert('(8.1 задание) Комнда switch (вместо if)');

var a = 5 + 167;

switch (a) {
    case 9:
        alert('Это меньше а');
        break;
    case 10:
        alert('Это a!');
        break;
    case 11:
        alert('Это больше а');
        break;
    default:
        alert('Это не a!');
}


console.log('_____________________________________')



                                //9
console.log('9 задание')
console.log('_____________________________________')

var week = [];
var lang = prompt('Введите язык (ru или en): ');

console.log('Через if');

if (lang == 'ru')
{
    week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    console.log('Название недель на Русском: ' + week);
}

if (lang == 'en')
{
    week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log('Название недель на Английском: ' + week);
}

console.log('Через switch-case');

switch (lang) {
    case 'ru':
        week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        console.log('Название недель на Русском: ' + week);
        break;
    case 'en':
        week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        console.log('Название недель на Английском: ' + week);
        break;
}



console.log('_____________________________________')

                              //11
console.log('11 задание')
console.log('_____________________________________')
alert('(11 задание) Сколько букв (а, е, i, o) в слове');

var slovo = prompt('Введите слово: ');
console.log(slovo);
//Зачем мучитсья, если можно использовать split              !!!!!!!!!!
var a = slovo.split("a").length - 1;
var e = slovo.split("e").length - 1;
var i = slovo.split("i").length - 1;
var o = slovo.split("o").length - 1;


console.log('Содержание в слове буквы "a": ' + a);
console.log('Содержание в слове буквы "e": ' + e);
console.log('Содержание в слове буквы "i": ' + i);
console.log('Содержание в слове буквы "o": ' + o);

console.log('_____________________________________')
