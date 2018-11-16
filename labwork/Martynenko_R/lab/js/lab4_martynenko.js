//1-е ###########################
console.log('1 задание')
console.log('_____________________________________')
var Numbers = [0, 1, 2, 3, 4]
console.log("var Numbers = [0, 1, 2, 3, 4]")
console.log("Значение 2 элемента = " + Numbers[1])
console.log("Значение предпоследнего элемента = " + Numbers[Numbers.length-1])
console.log("Размер массива = " + Numbers.length)
console.log('_____________________________________')
//2-е ###########################
console.log('2 задание')
console.log('_____________________________________')
var Letters = ["Samsung", "Xiaomi", "MiBand", "Asus", "Redmi_4X"];
console.log("var Letters = ['Samsung', 'Xiaomi', 'MiBand', 'Asus', 'Redmi_4X']");
//var tmp;

[Letters[0], Letters[2]] = [Letters[2], Letters[0]];

console.log(Letters);
console.log('_____________________________________')
//3-е ###########################
console.log('3 задание')
console.log('_____________________________________')
x1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
x2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
x3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
var A = [x1, x2, x3]

console.log(A);

console.log('_____________________________________')
//4-е ###########################
console.log('4 задание')
console.log('_____________________________________')
x1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
x2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
x3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
var A = [x1, x2, x3]
for (var i = 0; i < A.length; i++)
{
    console.log("Значение " + i + " элемента = " + A[i])
}
A.unshift(100);
A.push(100);
console.log('_____________________________________')
for (var i = 0; i < A.length; i++)
{
    console.log("Значение " + i + " элемента = " + A[i])
}
console.log('_____________________________________')
A.pop()
A.shift()
for (var i = 0; i < A.length; i++)
{
    console.log("Значение " + i + " элемента = " + A[i])
}
A.length = 0
console.log('_____________________________________')
console.log(A)
console.log('_____________________________________')
//5-е ###########################
console.log('5 задание')
console.log('_____________________________________')
var colors = ["white", "blue", "yellow"]
console.log(colors.join(' или '))
console.log(colors.join(','))
console.log(colors.join(':'))
console.log('_____________________________________')
//6-e ###########################
console.log('6 задание')
console.log('_____________________________________')
var colors = ["white", "blue", "yellow"]
var numbers = [1, 2, 3]
var colorNumber = colors.concat(numbers)
colors.length = 0;
console.log(colors)
console.log('_____________________________________')
console.log(colorNumber)

console.log('_____________________________________')
//7-e ###########################
console.log('7 задание')
console.log('_____________________________________')
var arr = [1, 2, 3, 4, 5, 6] 
console.log("var arr = [1, 2, 3, 4, 5, 6]")
console.log("arr.slice(1)   ////: " + arr.slice(1))
console.log("arr.slice(1,4)   ////: " + arr.slice(1,4))
console.log("arr.slice(3,4)   ////: " + arr.slice(3,4))
console.log("arr.slice(-2)   ////: " + arr.slice(-2))
console.log("arr.slice(arr.length - 2)   ////: " + arr.slice(arr.length - 2))
console.log("arr.slice(-3,-1)   ////: " + arr.slice(-3,-1))
console.log("arr.slice(arr.length - 3, arr.length - 1)   ////: " + arr.slice(arr.length - 3, arr.length - 1))
console.log('_____________________________________')
//8-e ###########################
console.log('8 задание')
console.log('_____________________________________')
var colors = ["white", "yellow", "blue"]
console.log(colors.reverse())
console.log(colors.sort())
console.log('_____________________________________')
//9-e ###########################
console.log('9 задание')
console.log('_____________________________________')
var arr = [1, 2, 3, 4, 5, 6]
console.log("var arr = [1, 2, 3, 4, 5, 6] ")
console.log("Удаленные элементы: " + arr.splice(3, 2))
console.log("Оставшиеся элементы: " + arr)
console.log("Удаленные элементы: " + arr.splice(-5, 2))
console.log("Оставшиеся элементы: " + arr)
console.log("Удаленные элементы: " + arr.splice(2, 0, 7))
console.log("Оставшиеся элементы: " + arr)
console.log('_____________________________________')