
// 1

console.log('1 задание');
console.log('_____________________________________');

//Создание пустых объектов
var student = {};
//var student  = new Object();
//var student  = Object.create({});

student.name = "Ибраим"; 
student.surname = "Петров";


student.name = "Вася";

delete student['name'];

console.log('age' in student);

console.log('surname в объекте student = ' + student.surname);


console.log('_____________________________________');
// 2
console.log('2 задание');
console.log('_____________________________________');

var rating = {
    "Васильев Вася": 5,
    "Петров Петя": 4,
    "Алиумерова Асие": 2
};

var k = 0, srb = 0;

for (var key in rating) { k++; }

if (k > 0) {

    for (var key in rating) { srb += rating[key]; }
    srb = srb / k;
    console.log("Средний балл равен: " + srb);
}
else {

    console.log(0);
}


console.log('_____________________________________');
// 3
console.log('3 задание');
console.log('_____________________________________');

var salaries = new Object();


salaries = {
    "Анна": 500,
    "Иван": 40,
    "Алие": 200
};

var k = 0, max = 0, name = '';

for (var key in salaries) { k++; }

if (k > 0) {

    for (var key in salaries) {
        if (max < salaries[key]) {
            max = salaries[key];
            name = key;
        }
    }
    console.log(name);
}
else {

    console.log('нет сотрудников');
}


console.log('_____________________________________');
// 4
console.log('4 задание');
console.log('_____________________________________');


var country = {
    "название страны": 'Россия',
    "численность (чел.)": 144500000,
    "площадь (кв.км)": 17100000,
    "столица": {
        "название": 'Москва',
        "год основания": 1147
    }
};

country['плотность населения'] = country['численность (чел.)'] / country['площадь (кв.км)'];

console.log('Плотность населения = ' + country['плотность населения'] + ' чел/км²');

console.log('_____________________________________');
