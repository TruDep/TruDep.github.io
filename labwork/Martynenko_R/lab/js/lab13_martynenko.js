
// 1 ########################

console.log('1 задание');
console.log('_____________________________________');

var user = { name: "Vasya", age: 17 }; // в переменной - ссылка
var admin = user; // скопировали ссылку в admin 
admin.name = "Petya";
console.log(user.name)//Выведет Petya 
//(т.к. объект user скреплён ссылкой с объектом admin)


console.log('_____________________________________');
// 2 ########################
console.log('2 задание');
console.log('_____________________________________');

var user = { name: "Vasya", age: 17 };
var userClone = {};
for (var key in user)
{
    userClone[key] = user[key];
}
userClone.name = "Petya";
console.log(user.name)//Выведет Vasya
//(т.к. мы создали новый независимый объект userClone)

console.log('_____________________________________');
// 3 ########################
console.log('3 задание');
console.log('_____________________________________');

var A = [], sum = 0, i = 0;

while (true) {
    A[i] = +prompt('Введите число', '')
    if (A[i] == '') { break;}
    i++;
}

for (var i = 0; i < A.length - 1; i++) {
    sum += A[i]; 
}
console.log('Сумма всех элементов массива = ' + sum);


console.log('_____________________________________');
// 4 ########################
console.log('4 задание');
console.log('_____________________________________');

var arr = [12, 12, 45];
var Arr = arr;
Arr[2] = 1000;
console.log(Arr[2]);
console.log(arr[2]);//Выведет 1000 
//(т.к. массив Arr скреплён ссылкой с массивом arr)


console.log('_____________________________________');

// 5 ########################
console.log('5 задание');
console.log('_____________________________________');

var arr = [12, 12, 45];
var Arr = [];

for (var i = 0; i < arr.length; i++) {
    Arr[i] = arr[i];
}

Arr[2] = 1000;
console.log(Arr[2]);
console.log(arr[2]);//Выведет 45
//(т.к. мы создали новый независимый массив Arr и заполнели элементами из arr)

console.log('_____________________________________');

// 6 ########################
console.log('6 задание');
console.log('_____________________________________');

var bankUser = {
    "доход": function () {
        if ((bankUser['размер вклада в руб.'] >= 100) &&
            (bankUser['размер вклада в руб.'] <= 10000) &&
            (bankUser.срок >= 1) &&
            (bankUser.срок <= 12)) {
            //12% годовых (Я сделаю на месячную капитализацию)
            var rvklada2 = bankUser['размер вклада в руб.'];

            for (var i = 0; i < bankUser.срок; i++) {
                rvklada2 *= 1.01;
            }
            return (rvklada2 - bankUser['размер вклада в руб.']).toFixed(2);
        } else
        {
            if ((bankUser['размер вклада в руб.'] > 10000) &&
                (bankUser.срок >= 12) &&
                (bankUser.срок <= 36)) {
                //22% годовых (Я сделаю на месячную капитализацию)
                var rvklada2 = bankUser['размер вклада в руб.'];

                for (var i = 0; i < bankUser.срок; i++) {
                    rvklada2 *= 1.0183;
                }
                return (rvklada2 - bankUser['размер вклада в руб.']).toFixed(2);
            }
        }
        
    }
};

bankUser['имя вкладчика'] = prompt('Введите имя вкладчика','')
bankUser['размер вклада в руб.'] = +prompt('Введите размер вклада в руб.','')
bankUser.срок = +prompt('Введите срок.(колличество месяцев)','')

var bankUserCopy = bankUser;
var bankUserClone = {};
for (var key in bankUser) { bankUserClone[key] = bankUser[key]; }
bankUser['имя вкладчика'] = 'Роман'


console.log(bankUser);
console.log(bankUserCopy);
console.log(bankUserClone);
console.log("Если хотим получить (Доход) то прописываем: ")
console.log("console.log(bankUser.доход())")
console.log(bankUser.доход());


console.log('_____________________________________');