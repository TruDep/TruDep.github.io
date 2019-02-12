//// 1 ########################
    var a = 77.123456
    var b = 1
    var c = Infinity
    var d = NaN
    console.log('1 задание')
    console.log('_____________________________________')

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    console.log(typeof d)
    console.log('_____________________________________')
//2 #############
    var a = 2e-1
    var b = 3e3
    var c = 7.29e2
    var d = 33e-1
    console.log('2 задание')
    console.log('_____________________________________')

    console.log(a.toFixed());
    console.log(b.toFixed());
    console.log(c.toFixed());
    console.log(d.toFixed());
    console.log('_____________________________________')
////3  #########################################
    var a = 7.1
    var b = 0.000009
    var c = 33.3
    var d = 10.001
    console.log('3 задание')
    console.log('_____________________________________')

    console.log(a.toExponential())
    console.log(b.toExponential())
    console.log(c.toExponential())
    console.log(d.toExponential())
    console.log('_____________________________________')
//4  ###########################
    var num = 1.23456789
    console.log('4 задание')
    console.log('_____________________________________')

    console.log(num.toExponential(5))
    console.log(num.toExponential(1))
    console.log(num.toExponential(4))
    console.log(num.toExponential(2))
    console.log('_____________________________________')
//5 ########################
    var a = 5
    var b = 77.12345
    var c = 0.1
    var d = 1e1
    console.log('5 задание')
    console.log('_____________________________________')

    console.log(a.toString())
    console.log(b.toString())
    console.log(c.toString())
    console.log(d.toString())
    console.log(typeof a.toString())
    console.log(typeof b.toString())
    console.log(typeof c.toString())
    console.log(typeof d.toString())
    console.log('_____________________________________')
//6 ###########################
    var a = 12345.6789
    var b = 1.23e+10
    var c = 1.23e-10
    console.log('6 задание')
    console.log('_____________________________________')

    console.log(a.toFixed())
    console.log(b.toFixed())
    console.log(c.toFixed())
    console.log('_____________________________________')

    console.log(a.toFixed(1))
    console.log(b.toFixed(2))
    console.log(c.toFixed(6))
    console.log('_____________________________________')

    console.log(a.toPrecision())
    console.log(b.toPrecision())
    console.log(c.toPrecision())
    console.log('_____________________________________')

    console.log(a.toPrecision(1))
    console.log(b.toPrecision(2))
    console.log(c.toPrecision(6))
    console.log('_____________________________________')
//7 ###########################
    console.log('7 задание')
    console.log('_____________________________________')
    console.log(Number.MIN_VALUE)
    console.log(Number.MAX_VALUE)
    console.log(Number.NaN)
    console.log(Number.POSITIVE_INFINITY)
    console.log(Number.NEGATIVE_INFINITY)
    console.log('_____________________________________')
//8 ############################
    var a = 1.7
    var b = 25.1
    var c = 0.1
    console.log('8 задание')
console.log('_____________Math.ceil(a)________________')
    console.log(Math.ceil(a))
    console.log(Math.ceil(b))
    console.log(Math.ceil(c))
console.log('_____________Math.floor(a)_______________')
    console.log(Math.floor(a))
    console.log(Math.floor(b))
    console.log(Math.floor(c))
console.log('_____________Math.round(a)_______________')
    console.log(Math.round(a))
    console.log(Math.round(b))
    console.log(Math.round(c))
    console.log('_____________________________________')
//9 ############################
    var a = 9
    var b = 2
    var c = -4
    var d = 1e2
    console.log('9 задание')
    console.log('_____________________________________')

    console.log(Math.sqrt(a));
    console.log(Math.sqrt(b));
    console.log(Math.sqrt(c));
    console.log(Math.sqrt(d));
    console.log('_____________________________________')
//10 ##########################
    console.log('10 задание')
    console.log('_____________________________________')
    console.log(Math.min(0.1, 3e-4, 9.9e-2))
    console.log(Math.min(Infinity, 0, -Infinity))
    console.log('_____________________________________')
    console.log(Math.abs(-1.1))
    console.log(Math.abs(2))
    console.log(Math.abs(-3.2))
    console.log('_____________________________________')
//11 #############################
    console.log('11 задание')
    console.log('_____________________________________')
    console.log(Math.random())
    console.log(Math.random() * (100 - 50) + 50)
    console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50)