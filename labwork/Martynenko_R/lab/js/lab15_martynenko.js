
// 1 ########################

console.log('1 задание');
console.log('_____________________________________');

var login = 'user';
console.log(window.login);  //user
// т.к. window.login и переменная login одно и тоже

var login = 'user';
console.log(window.user);  //undefined
// т.к. присваивание ещё не выполнено, но свойство с именем user в объекте window уже существует

var login = 'user';
console.log(window);  //Window очень большой объект который хранит в себе множество объектов текущей открытой страницы

window.login='user';
console.log(login);  //user
// т.к. window.login и переменная login одно и тоже



console.log('_____________________________________');
// 2 ########################
console.log('2 задание');
console.log('_____________________________________');


console.log( x );  //undefined
var x = 1;
// т.к. переменная x объявлена, но т.к. присвоение значения x=1 сделано после вывода, то значение переменной по умолчанию = undefined

console.log( y );  //y is not defined т.к. y нигде не объявлена
y = 1;


console.log('_____________________________________');
// 3 ########################
console.log('3 задание');
console.log('_____________________________________');

if ("X" in window) {
    var X = 1;
}
console.log(X);  //undefined

//Какое значение имеет переменная Х после выполнения 1-й строки кода (undefined, 1, true, false)
//undefined т.к. переменная x объявлена, значение переменной по умолчанию = undefined

if ("X" in window) {
    X = 1;
}
console.log(X);  //Выведет ошибку, если в объекте window нет свойства X, оно может появится после выполнения команды из 1 примера, тогда и ошибки не будет и выведет 1

if ("X" in window) {
    X = 1;
}
var X;
console.log(X);  // Выведет undefined

console.log('_____________________________________');
// 4 ########################
console.log('4 задание');
console.log('_____________________________________');

function S(a,b) //Function Declaration
{
    var S = a*b; // локальная переменная
    return S;
}

var S2 = function(a,b) {return a*b;} //Function Expression .S2 - глобальная переменная

console.log(S(2,3)) //6
console.log(S2(2,3))  //6

console.log('_____________________________________');

// 5 ########################
console.log('5 задание');
console.log('_____________________________________');

sayHi('Masha');//undefinedMasha, т.к. phrase объявлена после и её значение по умолчанию = undefined
var phrase = "Hi, ";
function sayHi(name) {
    console.log(phrase + name);
}

console.log('_____________________________________');

// 6 ########################
console.log('6 задание');
console.log('_____________________________________');

var value = 0;// глобальная переменная value = 0
function f() {
    if (1) {//всегда выполнится
        value = true;// локальная переменная value = 1
    } else {
        var value = false;//никогда не выполнится
    }
    console.log(value);//выводит 1, т.к. обращается к локальной переменной
}
f();//true

console.log('_____________________________________');


// 6 ########################
console.log('7 задание');
console.log('_____________________________________');

function test() {
    console.log(window); //undefined
    var window = 5;
    console.log(window); //5, т.к. window был присвоен window = 5
}
test();

console.log('_____________________________________');