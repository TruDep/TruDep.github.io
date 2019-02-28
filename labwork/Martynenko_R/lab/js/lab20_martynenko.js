
// 1 ########################

console.log('1 задание');
console.log('_____________________________________');

function Paper() {
    Paper.count++;
    Paper.DEFAULT_FORMAT = "А4";

    Object.defineProperty(Paper, "Person", {
        get: function() {
            if(Paper.count == undefined){Paper.count = 0}else{return Paper.count++}
        }
    });
    
}
Paper()
Paper.Person; //Возвращает на +1 счетчик count


console.log('_____________________________________');
// 2 ########################
console.log('2 задание');
console.log('_____________________________________');


Publications = {}

function Publish() {
    this.Publish_info = function () {
        console.log(this)
    };
}
Publications.createNews = function (PublishData) {
    var Publications = new Publish;

    Publications.Headline = PublishData.Headline;
    Publications.Text = PublishData.Text;
    Publications.date = PublishData.date;
    Publications.Sources = PublishData.Sources;

    return Publications;
}
Publications.createArticle = function (PublishData) {
    var Publications = new Publish;

    Publications.Headline = PublishData.Headline;
    Publications.Text = PublishData.Text;
    Publications.date = PublishData.date;
    Publications.authors = PublishData.authors;

    return Publications;
}
Publications.createAnnouncement = function (PublishData) {
    var Publications = new Publish;

    Publications.Headline = PublishData.Headline;
    Publications.Text = PublishData.Text;
    Publications.date = PublishData.date;
    Publications.RelDate = PublishData.RelDate;

    return Publications;
}

//
var News = Publications.createNews({
    Headline: "Новость №1",
    Text: "Создании полиморфной функции",
    date: "18.02.19",
    Sources: "Roma-Pc",
});

var Article = Publications.createArticle({
    Headline: "Статья №1",
    Text: "Создании полиморфной функции",
    date: "18.02.19",
    authors: "Roman_M",
});

var Announcement = Publications.createAnnouncement({
    Headline: "Объявление №1",
    Text: "Создании полиморфной функции",
    date: "18.02.19",
    RelDate: "18.02.19",
});


News.Publish_info()
Article.Publish_info()
Announcement.Publish_info()


console.log('_____________________________________');
// 3 ########################
console.log('3 задание');
console.log('_____________________________________');


function User(fullName) {
    this.fullName = fullName;

    Object.defineProperty(this, "firstName", {
        get: function () {
            var arr = this.fullName.split(' ');
            return arr[0]
        },
        set: function (value) {
            var arr = this.fullName.split(' ');
            arr[0] = value;
            this.fullName = arr.join(" ")
        }
    });
    
    Object.defineProperty(this, "lastName", {
        get: function () {
            var arr = this.fullName.split(' ');
            return arr[1]
        },
        set: function (value) {
            var arr = this.fullName.split(' ');
            arr[1] = value;
            this.fullName = arr.join(" ")
        }
    });
}

var vasya = new User("Василий Попкин");

// чтение firstName/lastName
console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин

// запись в lastName
vasya.firstName = 'Роман';
vasya.lastName = 'Мартыненко';

console.log( vasya.fullName ); // Роман Мартыненко



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