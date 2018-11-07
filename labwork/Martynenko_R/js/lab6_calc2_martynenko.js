
//10 ########################
console.log('10 задание (Калькулятор)');
console.log('_____________________________________');
console.log('_________История калькулятора________');

calc();

function calc()
{
    var calc = [];

    calc[0] = +prompt('enter number 1'); //Унарный + преоборазует String в Number
    calc[2] = prompt('enter sign');
    calc[1] = +prompt('enter number 2');



    switch (calc[2]) {
        case '+':
            calc[3] = calc[0] + calc[1];
            break;
        case '-':
            calc[3] = calc[0] - calc[1];
            break;
        case '*':
            calc[3] = calc[0] * calc[1];
            break;
        case '/':
            switch (calc[1])
            {
                case 0:
                    alert('error: division by zero');
                    break;
                default:
                    alert('result= ' + calc[3]);
            }
            break;
    }
    switch (calc[1])
    {
        case 0:
            console.log(calc[0] + ' ' + calc[2] + ' ' + calc[1] + ' = ' + 'На ноль делить нельзя');
            break;
        default:
            alert('result= ' + calc[3]);
            console.log(calc[0] + ' ' + calc[2] + ' ' + calc[1] + ' = ' + calc[3]);
    }

   
}

while (1)
{
    if ('exit' != prompt('Напишити "exit", чтобы выйти из калькулятора')) { calc(); }
    else { break;}
}


console.log('_____________________________________');
