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

     var users = ['admin', 'test', 'root', 'user'];
    var login = ['1234', 'asdfgh', 'qwerty', 'toor'];
     console.log(users);
    console.log(login);
     var user = prompt('Введите новое имя пользователя');
     console.log('Введённое имя пользователя: ' + user);
     users.unshift(user);
     if (user.length != users.length) { login.pop(); }
    else
    {
        login.shift();
        login.pop();
    }
    
    console.log(users);
    console.log(login);
    
    console.log('Длинна массива users = ' + users.length);
    console.log('Длинна массива login = ' + login.length);
 }
 setTimeout(func, 4000); 