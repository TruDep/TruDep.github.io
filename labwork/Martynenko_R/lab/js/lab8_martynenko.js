
function func() {
    ////Мои функции

    function myrandom(min, max) {
        var x = Math.floor(Math.random() * (max - min + 1)) + min;
        return x;
    }

    function myrandmass(length, min, max) {
        var A = [];
        for (var i = 0; i < length; i++) {
            A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return A;
    }
    ////###########################

    //// 1 ########################

    console.log('1 задание')
    console.log('_____________________________________')

    for (; ;) {
        console.log("Yes ");
        break;
    }

    console.log('_____________________________________')
    //2 #########################
    console.log('2 задание')
    console.log('_____________________________________')

    for (var i = 0; i < 6; i++) {
        a = 100 - i * 20;
        console.log('Число:' + a)
    }

    //for (var i = 100; i > 0; i-=20) {
    //    console.log('Число:' + a)
    //}

    console.log('_____________________________________')
    ////3  #######################
    console.log('3 задание')
    console.log('_____________________________________')

    var A = [12, -45, 67, 1, 90, 666];
    for (i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0) {
            console.log(A[i]);
        }

    }

    console.log('_____________________________________')
    //4  ###########################
    console.log('4 задание')
    console.log('_____________________________________')

    var A = [];
    A = myrandmass(5, -10, 10)
    console.log('Прямой порядок:');
    for (var i = 0; i < A.length; i++) {
        console.log(A[i]);
    }
    console.log('Обратный порядок:');
    for (var i = A.length-1; i > -1; i--) {
        console.log(A[i]);
    }

    console.log('_____________________________________')

    //5  ###########################
    console.log('5 задание')
    console.log('_____________________________________')
    alert('Задание 5 (Сумма 5 элементов массива)');

    var arr = [];
    var n = 0;

    for (var i = 0; i < 5; i++) {
        arr[i] = +prompt('Введите arr[' + i + ']: ')
        n += arr[i];
        console.log('arr[' + i + '] = ' + arr[i])
    }
    console.log('Сумма чисел: ' + n)



    console.log('_____________________________________')



    //6  ###########################
    console.log('6 задание')
    console.log('_____________________________________')

    alert('Задание 6 (Произведение элементов массива)');

    var arr = [];
    var P = 1;
    var L = prompt('Введите размер массива: ');

    for (var i = 0; i < L; i++) {
        arr[i] = prompt('Введите arr[' + i + ']: ');
        P *= arr[i];
        console.log('arr[' + i + '] = ' + arr[i]);
    }
    console.log('Произведение чисел: ' + P);

    console.log('_____________________________________')



    //7  ###########################
    console.log('7 задание')
    console.log('_____________________________________')

    var A = myrandmass(10, -100, 100);
    var n = 0, x = 0;

    console.log(A);

    for (var i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            n += A[i];
            x++;
        }
    }
    n = n / x;

    console.log('Среднее арифметическое отрицательных элементов = ' + n.toFixed(2))

    console.log('_____________________________________')



    //8  ###########################
    console.log('8 задание')
    console.log('_____________________________________')

    alert('Задание 8 (Поиск по массиву)');

    var arr = [], y = [], n = 0;
    var L = +prompt('Введите размер массива: ');

    for (var i = 0; i < L; i++) {
        arr[i] = prompt('Введите arr[' + i + ']: ');
        if (arr[i] == "key") {
            y[n] = i;
            n++;
        }
        console.log('arr[' + i + '] = ' + arr[i]);
    }
    console.log('Индексы в которых находятся слово "key": ' + y);


    console.log('_____________________________________')



    //9  ###########################
    console.log('9 задание')
    console.log('_____________________________________')

    var A = myrandmass(10, -100, 100);
    var i1 = 0; i2 = 0, X = [], Y = [];
    console.log(A);

    for (var i = 0; i < A.length; i++) {
        if (A[i] > 0) { X[i1] = A[i]; i1++; }
        if (A[i] < 0) { Y[i2] = A[i]; i2++; }
    }


    console.log('Положительный массив: ' + X);
    console.log('Отрицательный массив: ' + Y);
    

    console.log('_____________________________________')


    //10  ###########################
    console.log('10 задание')
    console.log('_____________________________________')
    alert('Задание 10 (Сумма одинаковых по индексу элементов массива)');

    var B = [], C = [];
    var L = +prompt('Введите размер массива: ');
    var A = myrandmass(L, -100, 100);

    for (var i = 0; i < L; i++) {
        B[i] = +prompt('Введите arr[' + i + ']: ');
        C[i] = A[i] + B[i];
    }
    console.log('Рандомный массив: ');
    console.log(A);
    console.log('Пользовательский массив: ');
    console.log(B);
    console.log('Итоговый массив: ');
    console.log(C);

    console.log('_____________________________________')


    //11  ###########################
    console.log('11 задание')
    console.log('_____________________________________')
    var L = +prompt('Введите размер массива: ');
    var A = myrandmass(L, -100, 100);
    console.log(A);


    console.log('Максимальное число массива: ');
    console.log(Math.max.apply(null, A));
    console.log('Минимальное число массива: ');
    console.log(Math.min.apply(null, A));


    /////////////
    var A = myrandmass(L, -100, 100);
    var max = -Infinity, min = Infinity
    console.log(A);

    for (var i = 0; i < A.length; i++) {
        if (min > A[i] && A[i] < 0) { min = A[i]; }
    }
    console.log('Минимальное число массива: ' + min);
    for (var i = 0; i < A.length; i++) {
        if (max < A[i] && A[i] > 0) { max = A[i]; }

        if (max < A[i]) {
            if (A[i] > 0) {
                max = A[i];
            }
        }
    }
    console.log('Максимальное число массива: ' + max);
    ////////////////



    console.log('_____________________________________')

}

setTimeout(func, 4000);