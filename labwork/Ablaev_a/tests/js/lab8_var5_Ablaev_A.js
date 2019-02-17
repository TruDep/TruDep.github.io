
function func() {


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

    function myrandString(length) {
        var A = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var B = [], t = '';
        for (var i = 0; i < length; i++) {
            t = Math.floor(Math.random() * (A.length));
            B.push(A[t]);
        }
        return B.join('');
    }

    function myrandmassString(masleng,length) {
        var A = [];
        for (var i = 0; i < masleng; i++) {
            A[i] = myrandString(length);
        }
        return A;
    }



    var letters = [];
    var B = [];

    A = myrandmass(myrandom(2,7), -5, 5);
    B = myrandmass(myrandom(2,7), -5, 5);

    console.log('Случайные массивы:');
    console.log(myrandString(15));
    console.log(myrandString(20));

    if (0 != Math.min.apply(null, A)) {
        console.log('Последний массива A[A.length - 1] = ' + A[A.length - 1]);
    }

    if (B.length > 3) {
        console.log('Длинна массива (B) = ' + B.length);
        console.log('Первый элемент массива B[0] = ' + B[0]);
    }
    
    
    
}

setTimeout(func, 4000);