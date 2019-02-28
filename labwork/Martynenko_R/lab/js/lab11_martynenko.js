
//// 1 ########################
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
console.log(Sum)
//// 2 ########################
//function twoPow() {
//    console.log('2 задание')
//    console.log('_____________________________________')
//    var A = 0, B = 0;

//    A = +prompt('Введите число', "");

//    console.log(A + '^2 ' + ' = ' + (A*A))
//    alert(A*A)
//    console.log('_____________________________________')
//}

function ex2(A)
{
    A = +prompt('Введите число', "");
    twoPow(A);
}

// var exe2 = ex2;
// exe2(); вызволи через другую переменную

// console.log(ex2)

function twoPow(A) {
    console.log('2 задание')
    console.log('_____________________________________')
   
    console.log(A + '^2 ' + ' = ' + (A * A))
    alert(A * A)
    console.log('_____________________________________')
}
console.log(twoPow)

// var f = function(A){
//     console.log('2 задание')
//     console.log('_____________________________________')
   
//     console.log(A + '^2 ' + ' = ' + (A * A))
//     alert(A * A)
//     console.log('_____________________________________')
// }
// f(A)

//// 3 ########################
function averageArr() {
    console.log('3 задание')
    console.log('_____________________________________')
    var arr = [2, 4, 6, 8, 10];
    var A = 0;

    for (var i = 0; i < arr.length; i++) { A += arr[i];}

    console.log('Среднее арифметическое = ' + (A / (arr.length)))

    alert(A / (arr.length));
    console.log('_____________________________________')
}
console.log(averageArr)

//// 4 ########################
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
console.log(ex4)

//// 5 ########################
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


// maxArr = function(){return 0;}

// maxArr();


console.log(maxArr)


function Sum2(a,b) {
    
    alert(a + b)
}
console.log(Sum2)


function time(s_time,l_time,p_time)
{
    var s_hm = s_time.split(':'); //массив часов и минут
    var l_hm = l_time.split(':'); //массив часов и минут
    var p_hm = p_time.split(':'); //массив часов и минут

    var T = [];

    T[0] = +s_hm[0]
    T[1] = +s_hm[1]

    console.log(T[0] + ' : ' + T[1])

    while(1)
    {   
        //console.log(T[0])
        T[0] += +l_hm [0];
        //console.log(T[0])
        T[1] += +l_hm [1];

        if(T[1] >= 60){T[0]++; T[1] -= 60}
        //console.log(T[0])

        console.log(T[0] + ' : ' + T[1])

        T[0] += +p_hm[0];
        //console.log(T[0])
        T[1] += +p_hm[1];

        //console.log(T[0])

        if(T[1] >= 60){T[0]++; T[1] -= 60}


    //console.log(T[0])
        if(+T[0] >= 16){break;}

    }

}

time("8:00","1:30","0:10")