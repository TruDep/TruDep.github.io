// Мои функции
function Random(min, max) {
    return x = Math.floor(Math.random() * (max - min + 1)) + min;
}
 
function RandMass(length, min, max) {
    var A = [];
    for (var i = 0; i < length; i++) {A[i] = Random(min, max); }
    return A;
}
//////////////////////////////