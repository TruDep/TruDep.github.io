
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

    function myrandString(length) {
        var A = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var str = [], t = '';
        //var t = Math.floor(Math.random() * (max - min + 1)) + min;
        for (var i = 0; i < length; i++) {
            t = A[Math.floor(Math.random() * (A.length + 1))];
            str.push(t);
        }
        str2 = str.join('');
        
        return str2;
    }
    ////###########################

    var letters = [];
    var B = [];

    console.log(myrandString(10));
    console.log(myrandString(5));
    console.log(myrandString(4));
    console.log(myrandString(20));
    
    
    
}

setTimeout(func, 4000);