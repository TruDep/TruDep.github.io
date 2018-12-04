
// 1

console.log('1 задание')
console.log('_____________________________________')

for (var i = 0; i < 3; i++) {
    console.log("число i = " + i);
}
i = 0;
while (i<3) {
    console.log("число i = " + i);
    i++;
}

console.log('_____________________________________')
//2
console.log('2 задание')
console.log('_____________________________________')

a = 100;
while (a>=0) {
    console.log('Число:' + a);
    a -= 20;
}

console.log('_____________________________________')
//3
console.log('3 задание')
console.log('_____________________________________')

alert('Введите последовательность чисел, заканчивающиеся нулем');

while (true) {
    a = +prompt('a');
    sum += a;
    if (a == 0) { break;}
}
console.log('Сумма элементов' + sum);

console.log('_____________________________________')
//4
console.log('4 задание')
console.log('_____________________________________')

var i = 10;
while (i!==15) {
    console.log(i);
    i++;
}
console.log('Сумма элементов' + sum);

console.log('_____________________________________')

//5
console.log('5 задание')
console.log('_____________________________________')
for (var i = 10; i < 15; i++) {
    console.log(i);
}

console.log('_____________________________________')



//6
console.log('6 задание')
console.log('_____________________________________')

var val=0, s=0;
do {
    val = +prompt('a');
    s += val * val;
}
while (s < 100)
console.log("s = " + s)


console.log('_____________________________________')



//7
console.log('7 задание')
console.log('_____________________________________')

var val = 0, s = 0;
do {
    val = +prompt('a');
    if (val > 0) {
        s += val + val;
    }
    if (val < 0) {
        s += val * val;
    }
}
while (s < 100)
console.log("s = " + s)

console.log('_____________________________________')
