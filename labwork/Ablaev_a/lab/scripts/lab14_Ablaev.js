
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


var rating = {
    "Васильев Вася": 5,
    "Петров Петя": 4,
    "Алиумерова Асие": 2
};

var k = 0, srb = 0;

for (var key in rating) { k++; }

if (k > 0)
{

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

var k = 0, max = 0, name ='';

for (var key in salaries) { k++; }

if (k > 0) {
    for (var key in salaries)
    {
        if (max < salaries[key])
        {
            max = salaries[key];
            name = key;
        }
    }
    console.log(name);
}
else {
    console.log(0);
}


console.log('_____________________________________');
// 4
console.log('4 задание');
console.log('_____________________________________');

var salaries = new Object();


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
