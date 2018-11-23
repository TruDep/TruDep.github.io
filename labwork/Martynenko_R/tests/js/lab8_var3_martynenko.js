
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

    var A = [];
    var B = [];

    A = myrandmass(myrandom(2,7), -5, 5);
    B = myrandmass(myrandom(2,7), -5, 5);

    console.log('Случайные массивы:');
    console.log(A);
    console.log(B);

    if (0 != Math.min.apply(null, A)) {
        console.log('Последний массива A[A.length - 1] = ' + A[A.length - 1]);
    }

    if (B.length > 3) {
        console.log('Длинна массива (B) = ' + B.length);
        console.log('Первый элемент массива B[0] = ' + B[0]);
    }
    
    
    
}

setTimeout(func, 4000);