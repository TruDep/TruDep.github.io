
//function prost(x)
//{
//    var y = 0;
//    var N = 2;
//    var d = 2, flag = 0;

//    while (y < x) {
        

//        while (d<=N) {

//            if(N == 1 || N == 2) { flag = 2; break; }

//            if (N % d == 0) { flag = 1; break; }
//            d++;

//            if (N == d) { flag = 2; break; }
//        }
//        if (flag == 2) { y++; flag = 0; d = 2;}
//        N++;
//    }
    
//    return N-1;
//}


//// 1 ########################

//console.log('1 задание');
//console.log('_____________________________________');

//var N = +prompt('Введите число:', '')
//var d = 2, flag = 0;

//while (true)
//{   
//    if (N == 1 || N == 2) { flag = 2; break; }

//    if (N % d == 0) { flag = 1; break; }
//    d++;

//    if (N == d) { flag = 2; break; }
//}


//if (flag == 1) {alert('Число не простое')}
//if (flag == 2) {alert('Число простое')}

//console.log('2 задание');
//console.log('_____________________________________');

//var A = [];
//var B = [];
//var C = [];
//var D = [];


//for (var i = 0; i < 5; i++)
//{
//    if (i == 0) {
//        A[i] = prost(i) / (2 ** (i + 1));
//    }
//    else {
//        A[i] = prost(i) / (2 ** (i + 1)) + A[i - 1];
//    }

    
//    B[i] = prost(i);
//    C[i] = 2 ** (i + 1);
//    D[i] = prost(i) / (2 ** (i + 1));
    
//}
//console.log(B)
//console.log(C)
//console.log(D)
//console.log(A)


function isPrime(num) {
    if (num < 2) { return 0; }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) { return 0; }
    }
    return 1;
}

function getPrime(num) {
    var i = 0, n = ;
    while (i <= num) {
        if (isPrime(n) == 1) { i++; }
        n++;
    }
    return n-1;
}

var a = +prompt('Введите число:', '')
if (isPrime(a) == 1) { alert('Число простое!'); }
else { alert('Число не простое!') }

for (var i = 0; i < 40; i++) {
    console.log(getPrime(i));
}

