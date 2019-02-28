
// 1 ########################

console.log('1 задание');
console.log('_____________________________________');

function cube(f, a) {
    var result = [];
    for (var i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
var f = function (x) {
    return x * x * x;
}

cube(f,[1,2,3]) //[1, 8, 27]

console.log('_____________________________________');
// 2 ########################
console.log('2 задание');
console.log('_____________________________________');

// Через доп переменную (Глобальную)
var num = 0;
var fn = function(){return ++num;};
alert(fn()); //1
alert(fn()); //2
alert(fn()); //3


//Полностью анонимная функция с замыканием переменной    
var fn = function () {
    var num = 0;
    return function () {return ++num;}
};
fn = fn();

alert(fn()); //1
alert(fn()); //2
alert(fn()); //3




console.log('_____________________________________');
// 3 ########################
console.log('3 задание');
console.log('_____________________________________');


function sum(a) {
    return function (b) {
        return a + b;
    };
};

alert(sum(1)(2));
alert(sum(5)(-1));


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