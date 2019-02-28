
// 1 ########################

console.log('1 задание');
console.log('_____________________________________');

// 1)
var user = {
    name: "Vasya",
    sayHi: function () {
        console.log(this.name);
    }
};
user.sayHi() //Выведет  Vasya, т.к. this возвращает user 
 // а user.name = Vasya


// 2)
var user = {
    name: "Vasya"
};
var admin = {
    name: "Dusya"
};
function func() {
    console.log(this.name);
}

user.f = func;  //Запишим в каждый объект функцию func в виде метода
admin.g = func;

user.f(); //Vasya
admin.g();  //Dusya

console.log('_____________________________________');
// 2 ########################
console.log('2 задание');
console.log('_____________________________________');

function User(firstName,secondName) {
    this.name = firstName,
    this.sName = secondName,
    this.sayHi = function(){
        console.log("Hi, " + this.sName + " " + this.name);
    };
}
var student1 = new User("Ivanov", "Vasya");
var student2 = new User("Мартыненко", "Роман");

student1.sayHi();
student2.sayHi();


console.log('_____________________________________');
// 3 ########################
console.log('3 задание');
console.log('_____________________________________');

function Calc() {
    this.a = 0,
    this.b = 0,
    this.read = function(){
        this.a = +prompt("Введите число А","5");
        this.b = +prompt("Введите число B","5");},
    this.sum = function(){
        return (this.a + this.b);},
    this.mul = function(){
        return (this.a * this.b);},
    this.div = function(){
        if(this.b != 0){return (this.a / this.b);}
        else{return "На ноль делить нельзя!";}};
}

var calc = new Calc();
calc.read();

console.log( "Сумма = " + calc.sum() );
console.log( "Произведение = " + calc.mul() );
console.log( "Частное = " + calc.div() );


console.log('_____________________________________');
// 4 ########################
console.log('4 задание');
console.log('_____________________________________');



console.log('_____________________________________');

// 5 ########################
console.log('5 задание');
console.log('_____________________________________');


function f(a) {
    return function (b) {
        console.log(a + ", " + b)
    }
}
var TuzikFunction = f("Тузик")
TuzikFunction("фууууу")
TuzikFunction("фас")
TuzikFunction("дай лапу")
TuzikFunction("лежать")


console.log('_____________________________________');

// 6 ########################
console.log('6 задание');
console.log('_____________________________________');




console.log('_____________________________________');


// 7 ########################
console.log('7 задание');
console.log('_____________________________________');



console.log('_____________________________________');

// 8 ########################
console.log('8 задание');
console.log('_____________________________________');


console.log('_____________________________________');

// 9 ########################
console.log('9 задание');
console.log('_____________________________________');




console.log('_____________________________________');


// ДЗ 1 ########################
console.log('ДЗ 1');
console.log('_____________________________________');

var car = {
    ICE: true,
    Fuel: "petrol",
    drive: function () {
        this["drive by drive"] = true
    }
}
var bus = {
    type: "public bus",
    capacity: 34,
    wheels: 4
}
var autotruck = {
    type: "cargo car",
    capacity: [2, 50],
    wheels: 6
}

bus.__proto__ = car
autotruck.__proto__ = car

autotruck.drive();

console.log(autotruck)

console.log('_____________________________________');


// ДЗ 2 ########################
console.log('ДЗ 2');
console.log('_____________________________________');




console.log('_____________________________________');







// 1 ########################

console.log('1 задание');
console.log('_____________________________________');

var animal = {
    eats: true
}

var elephant = {
    jumps: false,
    loves: "bananas",
    trunk: true
}

elephant.__proto__ = animal

for (var key in elephant) {
    console.log(key)
}

console.log(elephant.hasOwnProperty("eats"))
console.log(elephant.hasOwnProperty("trunk"))

delete elephant.eats
delete elephant.trunk

for (var key in elephant) {
    console.log(key)
}

console.log('_____________________________________');
// 2 ########################
console.log('2 задание');
console.log('_____________________________________');

var pet = {
    eats: function () {
        this.full = true
    }
}
var kitten = {
    say: "meow",
    __proto__: pet
}

kitten.eats()  //(full: true) Будет находится в объекте kitten

console.log(pet)
console.log(kitten)

console.log('_____________________________________');
// 3 ########################
console.log('3 задание');
console.log('_____________________________________');


var person = {
    eats: true,
    legs: 2,
    speaks: true,
    learnedEnglish: function () {
        this.knowsEnglish = true
    }
}
var dusya = {
    gender: "f",
    age: 18
}
var vasya = {
    gender: "m",
    loves: ["milk", "fruits"]
}

dusya.__proto__ = person
vasya.__proto__ = person

for (var key in dusya) {
    console.log(key)
}

for (var key in vasya) {
    console.log(key)
}

vasya.learnedEnglish()
console.log(vasya)


console.log('_____________________________________');
// 4 ########################
console.log('4 задание');
console.log('_____________________________________');


function square(x,y) {
    function sq(x) {return x*x};
    return sq(x)+sq(y);
};
square(2, 3)

console.log('_____________________________________');

// 5 ########################
console.log('5 задание');
console.log('_____________________________________');


function f(a) {
    return function (b) {
        alert(a + ", " + b)
    }
}
var TuzikFunction = f("Тузик")
TuzikFunction("фууууу")
TuzikFunction("фас")
TuzikFunction("дай лапу")
TuzikFunction("лежать")


console.log('_____________________________________');