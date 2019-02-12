
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

//А)
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
for (let i = 1; i <= 5; i++) {
    console.log(2 * i);
}
alert(i);// если мы хотим получить значение переменной i то надо заменить в циклах let на var

//В)
var num = 10;
if (true) {
    var num = 50;//заменяем var на let
    alert(num);//если мы хотим получить 50 в 1 alert, а во втором 10, то заменяем var на let
}
alert(num);

//С)
var num = 10;
if (true) {
    let num = 50;
    alert(num);// получим 50
}
alert(num);//получим 10

//D)
let num = 10; //будет ошибка, т.к. нельзя использовать let в не if, for, while.....
if (true) {
    let num = 50;
    alert(num);
}
alert(num);

console.log('_____________________________________');
// 3 ########################
console.log('3 задание');
console.log('_____________________________________');

const TEST="JavaScript";
console.log("my favorite is: "+ TEST);

TEST="C++";  //Нельзя присвоить значение константе, т.к. константа не является переменной

const TEST=" C++"; // Нельзя присвоить значение константе, т.к. она уже объявлена ранее

var TEST="C++";  // Нельзя присвоить значение перемменной, т.к. имя уже занято константой

let TEST="C++";  // Нельзя присвоить значение константе, т.к. она уже объявлена ранее

if (TEST==="JavaScript"){
const TEST="Java";
console.log("my favorite is: "+ TEST);
}

if (TEST==="JavaScript"){
const TEST="Java";
console.log("my favorite is: "+ TEST);
}
console.log("Now my favorite is: "+ TEST);

// const работает с объектами
const MY_OBJ = {"name": "Вася"};
// переопределить ссылку на объект нельзя
MY_OBJ = {"fName": "Вася"};  //Uncaught TypeError: Assignment to constant variable.

// НО! Свойства объекта изменять можно
MY_OBJ.name = "Маша";

console.log('_____________________________________');
// 4 ########################
console.log('4 задание');
console.log('_____________________________________');


var phrase = 'Hi';
function sayHi(name) {
    // LexicalEnvironment = { name: 'Masha', phrase: Hi }
    console.log(phrase + ', ' + name);  // при первом вызове phrase = 'Hi'
//При 2 вызове функции phrase = 'Bye'
phrase = 'Bye';  // изменяет значение phrase на Bye
    // LexicalEnvironment = { name: 'Masha', phrase: Bye }
}
sayHi('Masha');  //Hi, Masha
sayHi('Masha');  //Bye, Masha


console.log('_____________________________________');

// 5 ########################
console.log('5 задание');
console.log('_____________________________________');

var num = 1;

function F1() 
{
    if (num > 0) { answer = function () { return "+" } }
    else if (num < 0) { answer = function () { return "-" } }

    return num;
}

console.log('_____________________________________');

// 6 ########################
console.log('6 задание');
console.log('_____________________________________');

function sayHi(fName, lName) 
{
    // LexicalEnvironment = { fName: "Masha", lName: "Ivanova" }
    console.log("Hi, " + FullName());
    console.log("Bye, " + FullName());
    function FullName() {// [[Scope]] -> LexicalEnvironment (**) В процессе выполнения sayHi() создаёт функцию в строке (**). При создании эта функция получает внутреннее свойство [[Scope]] со ссылкой на текущий LexicalEnvironment.
        return fName + " " + lName;
    }
}
sayHi("Masha", "Ivanova");


console.log('_____________________________________');


// 7 ########################
console.log('7 задание');
console.log('_____________________________________');

//Age = document.getElementById("id_lab_16_ex_7_Age").value;
var Age = 17

function sayHi(fName, lName, age) 
{
    if (age < 17) { console.log("Hi, " + FullName()); }
    else { console.log("Bye, " + FullName()); }
    
    
    function FullName() {
        return fName + " " + lName;
    }
}
sayHi("Masha", "Ivanova", Age);

console.log('_____________________________________');

// 8 ########################
console.log('8 задание');
console.log('_____________________________________');

function Counter() {
    var Count = 1;
    return function () {
        return Count++;
    };
}
var output = Counter();//вызов значения перемененной как функции
console.log(output());  //1
console.log(output());  //2
console.log(output());  //3

console.log('_____________________________________');

// 9 ########################
console.log('9 задание');
console.log('_____________________________________');

var A = [15,12,-12,13];
var B = [];
var i2 = 0;

function positive(a)
{
    if (a > 0){return true;}
    else {return false;}
}

for(var i=0; i<A.length; i++)
{
    if (positive(A[i])){B[i2++]=A[i]}
}

console.log(A)
console.log(B)




console.log('_____________________________________');


// ДЗ 1 ########################
console.log('ДЗ 1');
console.log('_____________________________________');

var kolVertex = 5; //список рёбер и количество вершин совершенно разные вещи, в условии ошибка! 
var edgesList = [[1, 3], [1, 4], [2, 3], [3, 5], [4, 5]] //(список ребер)

var y1 = +prompt('y1');
var y2 = +prompt('y2');

smegVertex(edgesList, y1, y2);


function smegVertex(A, y1, y2)
{
    var B = [];
    for (var i = 0; i<A.length; i++)
    {
        B = A[i];
        if ((B[0] == y1 && B[1] == y2) || (B[1] == y1 && B[0] == y2))
        {
            return true;
        }
    }
    return false;
}


console.log('_____________________________________');


// ДЗ 2 ########################
console.log('ДЗ 2');
console.log('_____________________________________');




console.log('_____________________________________');