
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
   

    var numbers = [];
    numbers = myrandmass(5, -5, 5);

    console.log('Случайный массив:');
    console.log(numbers);

    if (numbers[1] != numbers[numbers.length - 1]) {
        console.log(numbers[1]);
        console.log(numbers[numbers.length - 1]);
    }

    console.log('Max число если (если оно больше 0) = ');
    if (0 < Math.max.apply(null, numbers)) {
        console.log(Math.max.apply(null, numbers));
    }

    Math.max.apply(null, numbers)
    
}

setTimeout(func, 4000);