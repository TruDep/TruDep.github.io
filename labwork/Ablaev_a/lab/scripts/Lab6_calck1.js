
function func() {

    //7
    console.log('7 задание (Calc only array)');
    console.log('_____________________________________');
    console.log('_________history');

    calc();

    function calc() {
        var calc = [];

        calc[0] = +prompt('enter number 1');
        calc[2] = prompt('enter sign');
        calc[1] = +prompt('enter number 2');

        if (calc[2] == '+') { calc[3] = calc[0] + calc[1]; }

        if (calc[2] == '-') { calc[3] = calc[0] - calc[1]; }

        if (calc[2] == '*') { calc[3] = calc[0] * calc[1]; }

        if (calc[2] == '/') {
            if (calc[1] == 0) {
                alert('error:division by zero');
                console.log(calc[0] + ' ' + calc[2] + ' ' + calc[1] + ' = ' + 'На ноль делить нельзя');
            }
            else {
                calc[3] = calc[0] / calc[1];
                console.log(calc[0] + ' ' + calc[2] + ' ' + calc[1] + ' = ' + calc[3]);
                alert('result= ' + calc[3]);
            }
        }
        else {
            alert('result= ' + calc[3]);
            console.log(calc[0] + ' ' + calc[2] + ' ' + calc[1] + ' = ' + calc[3]);

        }


    }

    while (1) {
        if ('exit' != prompt('press "exit",')) {
           calc();
         }
		/*(function() {
    ("#dialog-confirm" ).dialog({
      resizable: false,
      height:140,
      modal: true,
      buttons: {
        "Delete all items": function() {
          ( this ).dialog( "exit" );
        },
        Cancel: function() {
          ( this ).dialog( "exit" );
        }
      }
    });
  });
*/
        else {
          break;
         }
    }


    console.log('_____________________________________');

}

setTimeout(func, 4000);
