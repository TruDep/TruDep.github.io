// 1

          console.log('1 задание')
          console.log('_____________________________________')
          var Boolean = true
          var Number = 25
          var String = "abc"

          console.log('Boolean = true')
          console.log('Number = 25')
          console.log('String = "abc"')
          console.log('_____________________________________')

          console.log('Boolean +/- Number')
          console.log(Boolean + Number)
          console.log(Boolean - Number)
          console.log('Boolean +/- Boolean')
          console.log(Boolean + Boolean)
          console.log(Boolean - Boolean)
          console.log('String +/- Boolean')
          console.log(String + Boolean)
          console.log(String - Boolean)
          console.log('String +/- String')
          console.log(String + String)
          console.log(String - String)

          console.log('_____________________________________')

                                      //2


          console.log('2 задание')
          console.log('_____________________________________')
          x1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
          x2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
          x3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
          tmp = 1;
          var A = [x1, x2, x3]
          console.log('Случайный массив чисел ' + A)
          console.log('Умножение')
          for (var i = 0; i < A.length; i++) {
              tmp *= A[i];
          }
          console.log(tmp)

          tmp = 0
          console.log('Сложение')
          for (var i = 0; i < A.length; i++) {
              tmp += A[i];
          }
          console.log(tmp)
          console.log('Остаток от деления последнего числа на инкремент длины массива')
          console.log(A[2] % (A.length + 1))

          console.log('_____________________________________')


                                      //3


          console.log('3 задание')
          console.log('_____________________________________')
          var a = 4, b = 3, c = 5;
          var S = 0, p = 0;
          p = (a + b + c) / 2
          S = p * (p - a) * (p - b) * (p - c)
          console.log('Стораны треугольника ' + a + '  ' + b + '  ' + c + '  ')

          console.log('the result is: ' + Math.sqrt(S))

          console.log('_____________________________________')

                                  //4


          console.log('4 задание')
          console.log('_____________________________________')
          var x = 4, y;
          y = 4 * x++       //4*4=16 затем инкрементировать x

          console.log('Значение y= ' + y)
          console.log('Значение x= ' + x)   //В обоих случаях x=5
          console.log('___Второй случай, когда инкремент перед x___')
          x = 4;    //Возвращаю исходное значение переменной
          y = 4 * ++x
          //Наоборот инкремент выполняется первым действием, а затем умножение (4*5)
          console.log('Значение y= ' + y)
          console.log('Значение x= ' + x) //В обоих случаях x=5
          console.log('_____________________________________')

                                //5


          console.log('5 задание')
          console.log('_____________________________________')
          var a = 2
          a *= 2 + 5  //a=a*(2+7)
          console.log(a)//14
          var a = 3, c = 2 + ++a  //a=4; c=2+4;
          a = a + c   //a=4+6
          console.log(a)//10
          var a = 3, c = 2 + a++  //a=3; c=2+3; a=4;
          a = a + c //a=a+5
          console.log(a)//9

          console.log('_____________________________________')



                                        // 1
          console.log('1 задание')
          console.log('_____________________________________')
          var Boolean = true
          var Number = 25
          var String = "abc"

          console.log('Boolean = true')
          console.log('Number = 25')
          console.log('String = "abc"')
          console.log('_____________________________________')

          console.log('Boolean +/- Number')
          console.log(Boolean + Number)
          console.log(Boolean - Number)
          console.log('Boolean +/- Boolean')
          console.log(Boolean + Boolean)
          console.log(Boolean - Boolean)
          console.log('String +/- Boolean')
          console.log(String + Boolean)
          console.log(String - Boolean)
          console.log('String +/- String')
          console.log(String + String)
          console.log(String - String)

          console.log('_____________________________________')

                                  //2
          console.log('2 задание')
          console.log('_____________________________________')
          x1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
          x2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
          x3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50
          tmp = 1;
          var A = [x1, x2, x3]
          console.log('Случайный массив чисел ' + A)
          console.log('Умножение')
          for (var i = 0; i < A.length; i++) {
              tmp *= A[i];
          }
          console.log(tmp)

          tmp = 0
          console.log('Сложение')
          for (var i = 0; i < A.length; i++) {
              tmp += A[i];
          }
          console.log(tmp)
          console.log('Остаток от деления последнего числа на инкремент длины массива')
          console.log(A[2] % (A.length + 1))

          console.log('_____________________________________')

                                //3

          console.log('3 задание')
          console.log('_____________________________________')
          var a = 4, b = 3, c = 5;
          var S = 0, p = 0;
          p = (a + b + c) / 2
          S = p * (p - a) * (p - b) * (p - c)
          console.log('Стораны треугольника ' + a + '  ' + b + '  ' + c + '  ')

          console.log('the result is: ' + Math.sqrt(S))

          console.log('_____________________________________')
                                              //4
          console.log('4 задание')
          console.log('_____________________________________')
          var x = 4, y;
          y = 4 * x++ //4*4=16 затем инкрементировать x

          console.log('Значение y= ' + y)
          console.log('Значение x= ' + x)//В обоих случаях x=5
          console.log('___Второй случай, когда инкремент перед x___')
          x = 4;//Возвращаю исходное значение переменной
          y = 4 * ++x
          //Наоборот инкремент выполняется первым действием, а затем умножение (4*5)
          console.log('Значение y= ' + y)
          console.log('Значение x= ' + x)//В обоих случаях x=5
          console.log('_____________________________________')
                                          //5
          console.log('5 задание')
          console.log('_____________________________________')
          var a = 2
          a *= 2 + 5  //a=a*(2+7)
          console.log(a)//14
          var a = 3, c = 2 + ++a  //a=4; c=2+4;
          a = a + c   //a=4+6
          console.log(a)//10
          var a = 3, c = 2 + a++  //a=3; c=2+3; a=4;
          a = a + c //a=a+5
          console.log(a)//9

          console.log('_____________________________________')