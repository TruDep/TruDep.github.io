
////��� �������

//// ��������, �������� �� ����� �������
function isPrime(num) {
    if (num < 2) { return 0; }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) { return 0; }
    }
    return 1;
}
////###########################


//// ����� ������� ����� �������� �� ������
function getPrime(num) {
    var i = 0, n = ;
    while (i <= num) {
        if (isPrime(n) == 1) { i++; }
        n++;
    }
    return n - 1;
}
////###########################


//// ����� ��������� ����� ����� min � max
function Random(min, max) {
    var x = Math.floor(Math.random() * (max - min + 1)) + min;
    return x;
}
////###########################


//// ����� ������ ������� length, ����������� ������� ����� min � max
function RandMass(length, min, max) {
    var A = [];
    for (var i = 0; i < length; i++) {
        A[i] = Random(min, max);
    }
    return A;
}
////###########################


//// ����� ��������� ������ ������� length
function randString(length) {
    var A = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var B = [], t = 0;
    for (var i = 0; i < length; i++) {
        t = Math.floor(Math.random() * (A.length));
        B.push(A[t]);
    }
    return B.join('');
}
////###########################


//// ����� ������ ������� masleng, ����������� ���������� �������� ������� length
function randmassString(masleng, length) {
    var A = [];
    for (var i = 0; i < masleng; i++) {
        A[i] = randString(length);
    }
    return A;
}
////###########################

////###########################