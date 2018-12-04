
// 1

console.log('1 задание');
console.log('_____________________________________');
/*var empty = {};
var point = { x: 0, y: 0 };
var point2 = {
  x: point.x,
  y:point.y+1
};
*/
/*
var book = {
  "main title":	"JavaScript",
  'sub-title':	"The Def. Guide",

  "for": "all audiences",

  author: {
  firstname: "David",
  surname: "Flanagan"
  }
};

*/
var student = new Object();
  student.name = "Ибрагим";
  student.surname = "Петров";
  student.name = "Вася";
  delete student.name;
  console.log('age' in student)
  console.log(student.surname);

console.log('_____________________________________');
// 2
console.log('2 задание');
console.log('_____________________________________');

//Заполнение Объекта свойствами:
var rating = {
    "Васильев Вася": 5,
    "Петров Петя": 4,
    "Алиумерова Асие": 2
};

var k = 0, srb = 0; //Объявление доп. переменных.

for (var key in rating) { k++; }//Проверка количества свойств в Объекте.

if (k > 0)
{
    //Выполняется если Объект не пустой
    for (var key in rating) { srb += rating[key]; } //Находим сумму всех оценок
    srb = srb / k; //Вычисляем среднее арифметическое
    console.log("Средний балл равен: " + srb); //Выводим в консоль средний балл
}
else {
    //Выполняется если Объект пустой
    console.log(0);
}


console.log('_____________________________________');
// 3
console.log('3 задание');
console.log('_____________________________________');

var salaries = new Object(); //Созданиее Объекта

//Заполнение Объекта свойствами:
salaries = {
    "Анна": 500,
    "Иван": 40,
    "Алие": 200
};

var k = 0, max = 0, name =''; //Объявление доп. переменных.

for (var key in salaries) { k++; } //Проверка количества свойств в Объекте.

if (k > 0) {
    //Выполняется если Объект не пустой
    for (var key in salaries)
    {
        if (max < salaries[key])
        {
            max = salaries[key];//Условие нахождения максимального числа (зарплаты)
            name = key;//присваеваем переменной имя человека с максимальной зарплатой.
        }
    }
    console.log(name); //Выводим имя человека с максимальной зарплатой.
}
else {
    //Выполняется если Объект пустой
    console.log(0);
}


console.log('_____________________________________');
// 4
console.log('4 задание');
console.log('_____________________________________');

var salaries = new Object(); //Созданиее Объекта

//Заполнение Объекта свойствами:
menu = {
    "width": 500,
    "height": 300,
    "title": "My menu"
};

console.log('Было: ');
for (var key in menu) { console.log(key + " " + menu[key]) }

for (var key in menu) {
    if (typeof (menu[key]) == 'number')
    {
        menu[key] *= 2;
    }
}

console.log('Стало: ');
for (var key in menu) { console.log(key + " " + menu[key]) }


console.log('_____________________________________');
