
// 1
function Sum() {
    console.log('1 задание')
    console.log('_____________________________________')
    var A = 0, B = 0;

    A = +prompt('Введите 1 число', "");
    B = +prompt('Введите 2 число', "");

    console.log(A + ' + ' + B + ' = ' + (A + B))
    A = A + B;
    alert(A)
    console.log('_____________________________________')
}
// 2
/*function twoPow() {
    console.log('2 задание')
    console.log('_____________________________________')
    var A = 0, B = 0;

   A = +prompt('Введите число', "");

    console.log(A + '^2 ' + ' = ' + (A*A))
    alert(A*A)
    console.log('_____________________________________')
}*/

function ex2(A)
{
    A = +prompt('Введите число', "");
    twoPow(A);
}

function twoPow(A) {
    console.log('2 задание')
    console.log('_____________________________________')

    console.log(A + '^2 ' + ' = ' + (A * A))
    alert(A * A)
    console.log('_____________________________________')
}
// 3
function averageArr() {
    console.log('3 задание')
    console.log('_____________________________________')
    var arr = [2, 4, 6, 8, 10];
    var A = 0;

    for (var i = 0; i < arr.length - 1; i++) { A += arr[i];}

    console.log('Среднее арифметическое = ' + (A / (arr.length - 1)))

    alert(A / (arr.length - 1));
    console.log('_____________________________________')
}

// 4
function ex4() {
    console.log('4 задание')
    console.log('_____________________________________')

    A = +prompt('Введите возраст', "");

    if ((A >= 1) && (A <= 13)) {
        console.log('Возрастня категория = детство');
        alert('Возрастня категория = детство');
    }
    if ((A >= 14) && (A <= 25)) {
        console.log('Возрастня категория = юность');
        alert('Возрастня категория = юность');
    }
    if ((A >= 26) && (A <= 69)) {
        console.log('Возрастня категория = зрелость');
        alert('Возрастня категория = зрелость');
    }
    if ((A >= 70)) {
        console.log('Возрастня категория = старость');
        alert('Возрастня категория = старость');
    }

    console.log('_____________________________________')
}

// 5 
function maxArr() {
    console.log('5 задание')
    console.log('_____________________________________')

    var arr = [-2, 4, 216, -8, 10, -114, 14, 1], max = -Infinity;
    console.log(arr);
    for (var i = 0; i < arr.length - 1; i++)
    {
        if ((arr[i] >= -10) && (arr[i] <= 10) && (arr[i] > max)) { max = arr[i];}
    }

    console.log('Максимальное значение массива (от -10 до 10) = ' + max);
    alert('Максимальное значение массива (от -10 до 10) = ' + max);

    console.log('_____________________________________')
}
