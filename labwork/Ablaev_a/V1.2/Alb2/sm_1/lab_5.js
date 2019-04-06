function upd_lab_5_code(Lab_ex_N){
    var str='';
    var str2='';
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: Выражения и операторы</b2>';
    var str5='<b2>Цель занятия: Изучить арифметические операторы в JavaScript</b2>';
    
    if (Lab_ex_N == 33)
    {
        str =  ''
        str2 = ''
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 1)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;<font>Number</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_5_ex_1_N&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;<font>String</font>&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_5_ex_1_S&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;Booleann&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_5_ex_1_B&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">//getElementById&nbsp;возвращает&nbsp;строку,&nbsp;поэтому&nbsp;надо&nbsp;её&nbsp;преобразовать&nbsp;в&nbsp;boolean</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>Booleann&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;1&quot;</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font><font color="#000066">var</font>&nbsp;<font>Boolean</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#003366">true</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>Booleann&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;0&quot;</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font><font color="#000066">var</font>&nbsp;<font>Boolean</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#003366">false</font><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>&nbsp;</li><li><font color="#006600">//Boolean&nbsp;+/-&nbsp;Number</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font>Boolean</font>&nbsp;<font color="#339933">+</font>&nbsp;<font>Number</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font>Boolean</font>&nbsp;<font color="#339933">-</font>&nbsp;<font>Number</font><font color="#009900">&#41;</font></li><li>&nbsp;</li><li><font color="#006600">//Boolean&nbsp;+/-&nbsp;Boolean</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font>Boolean</font>&nbsp;<font color="#339933">+</font>&nbsp;<font>Boolean</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font>Boolean</font>&nbsp;<font color="#339933">-</font>&nbsp;<font>Boolean</font><font color="#009900">&#41;</font></li><li>&nbsp;</li><li><font color="#006600">//String&nbsp;+/-&nbsp;Boolean</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font>String</font>&nbsp;<font color="#339933">+</font>&nbsp;<font>Boolean</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font>String</font>&nbsp;<font color="#339933">-</font>&nbsp;<font>Boolean</font><font color="#009900">&#41;</font></li><li>&nbsp;</li><li><font color="#006600">//String&nbsp;+/-&nbsp;String</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font>String</font>&nbsp;<font color="#339933">+</font>&nbsp;<font>String</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font>String</font>&nbsp;<font color="#339933">-</font>&nbsp;<font>String</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>Nbmber =</b2></h4></td>\
                        <td><input type="number" value="0" class="input_vvod input_vvod2" id="id_lab_5_ex_1_N"></td></tr>\
                    <tr><td><h4><b2>String =</b2></h4></td>\
                        <td><input type="text" value="abc" class="input_vvod" id="id_lab_5_ex_1_S"></td></tr>\
                    <tr><td><h4><b2>Bolean =</b2></h4></td>\
                        <td><select id="id_lab_5_ex_1_B" >\
                                <option value="1">True</option>\
                                <option value="0">False</option>\
                            </select></td></tr>\
                    </tbody>\
            </table>\
            <input type="button" value="Запустить код!" onclick="lab_5_ex_1()">' 
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    
    if (Lab_ex_N == 2)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_5_ex_2_MinValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_5_ex_2_MaxValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;x1&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min</li><li><font color="#000066">var</font>&nbsp;x2&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min</li><li><font color="#000066">var</font>&nbsp;x3&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min</li><li>&nbsp;</li><li>tmp&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font>x1<font color="#339933">,</font>&nbsp;x2<font color="#339933">,</font>&nbsp;x3<font color="#009900">&#93;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Случайный&nbsp;массив&nbsp;чисел&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;A<font color="#009900">&#41;</font></li><li>&nbsp;</li><li><font color="#006600">//Умножение</font></li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;tmp&nbsp;<font color="#339933">*=</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>tmp<font color="#009900">&#41;</font></li><li>&nbsp;</li><li><font color="#006600">//Сложение</font></li><li>tmp&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font></li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;tmp&nbsp;<font color="#339933">+=</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>tmp<font color="#009900">&#41;</font></li><li>&nbsp;</li><li><font color="#006600">//Остаток&nbsp;от&nbsp;деления&nbsp;последнего&nbsp;числа&nbsp;на&nbsp;инкремент&nbsp;длины&nbsp;массива</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>A<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">%</font>&nbsp;<font color="#009900">&#40;</font>A.<font color="#660066">length</font><font color="#339933">++</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                <tbody><tr><td><h4><b2>Min</b2></h4></td>\
                        <td><input type="number" value="50" class="input_vvod" id="id_lab_5_ex_2_MinValue"></td></tr>\
                        <tr><td><h4><b2>Max</b2></h4></td>\
                        <td><input type="number" value="100" class="input_vvod" id="id_lab_5_ex_2_MaxValue"></td></tr></tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_5_ex_2()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 3)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;a&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_5_ex_3_a&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;b&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_5_ex_3_b&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;c&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_5_ex_3_c&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;S&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;p&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>&nbsp;</li><li>p&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#40;</font>a&nbsp;<font color="#339933">+</font>&nbsp;b&nbsp;<font color="#339933">+</font>&nbsp;c<font color="#009900">&#41;</font>&nbsp;<font color="#339933">/</font>&nbsp;<font color="#CC0000">2</font><font color="#339933">;</font></li><li>S&nbsp;<font color="#339933">=</font>&nbsp;p&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>p&nbsp;<font color="#339933">-</font>&nbsp;a<font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>p&nbsp;<font color="#339933">-</font>&nbsp;b<font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>p&nbsp;<font color="#339933">-</font>&nbsp;c<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>S&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">sqrt</font><font color="#009900">&#40;</font>S<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">//Площадь&nbsp;треугольника</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;S&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;<font>Math</font>.<font color="#660066">sqrt</font><font color="#009900">&#40;</font>S<font color="#009900">&#41;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                <tbody><tr><td><h4><b2>A</b2></h4></td>\
                        <td><input type="number" value="3" class="input_vvod" id="id_lab_5_ex_3_a"></td></tr>\
                        <td><h4><b2>B</b2></h4></td>\
                        <td><input type="number" value="4" class="input_vvod" id="id_lab_5_ex_3_b"></td></tr>\
                        <tr><td><h4><b2>C</b2></h4></td>\
                        <td><input type="number" value="5" class="input_vvod" id="id_lab_5_ex_3_c"></td></tr></tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_5_ex_3()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }
    
    if (Lab_ex_N == 4)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;x&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">4</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;y<font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">//Первый&nbsp;случай,&nbsp;когда&nbsp;инкремент&nbsp;после&nbsp;x</font></li><li>y&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">4</font>&nbsp;<font color="#339933">*</font>&nbsp;x<font color="#339933">++</font>&nbsp;<font color="#006600">//4*4=16&nbsp;затем&nbsp;инкрементировать&nbsp;x</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Значение&nbsp;y=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;y<font color="#009900">&#41;</font><font color="#006600">//16</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Значение&nbsp;x=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;x<font color="#009900">&#41;</font><font color="#006600">//В&nbsp;обоих&nbsp;случаях&nbsp;x=5</font></li><li>&nbsp;</li><li><font color="#006600">//Второй&nbsp;случай,&nbsp;когда&nbsp;инкремент&nbsp;перед&nbsp;x</font></li><li>x&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">4</font><font color="#339933">;</font><font color="#006600">//Возвращаю&nbsp;исходное&nbsp;значение&nbsp;переменной</font></li><li>y&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">4</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#339933">++</font>x&nbsp;<font color="#006600">//4*5=20</font></li><li>&nbsp;</li><li><font color="#006600">//Наоборот&nbsp;инкремент&nbsp;выполняется&nbsp;первым&nbsp;действием,&nbsp;а&nbsp;затем&nbsp;умножение&nbsp;(4*5)</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Значение&nbsp;y=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;y<font color="#009900">&#41;</font><font color="#006600">//20</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Значение&nbsp;x=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;x<font color="#009900">&#41;</font><font color="#006600">//В&nbsp;обоих&nbsp;случаях&nbsp;x=5</font></li></ol></blockquote>';

        str2 = '<pre align="left">Warning: "В задание сказано посчитать в уме)"</pre>';
        
    }

    if (Lab_ex_N == 5)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;a&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">2</font></li><li>&nbsp;</li><li>a&nbsp;<font color="#339933">*=</font>&nbsp;<font color="#CC0000">2</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">5</font>&nbsp;&nbsp;<font color="#006600">//a=2*(2+5)</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>a<font color="#009900">&#41;</font><font color="#006600">//14</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;a&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">3</font><font color="#339933">,</font>&nbsp;c&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">2</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#339933">++</font>a&nbsp;&nbsp;<font color="#006600">//a=4;&nbsp;c=2+4;</font></li><li>a&nbsp;<font color="#339933">=</font>&nbsp;a&nbsp;<font color="#339933">+</font>&nbsp;c&nbsp;&nbsp;&nbsp;<font color="#006600">//a=4+6</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>a<font color="#009900">&#41;</font><font color="#006600">//10</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;a&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">3</font><font color="#339933">,</font>&nbsp;c&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">2</font>&nbsp;<font color="#339933">+</font>&nbsp;a<font color="#339933">++</font>&nbsp;&nbsp;<font color="#006600">//a=3;&nbsp;c=2+3;&nbsp;a=4;</font></li><li>a&nbsp;<font color="#339933">=</font>&nbsp;a&nbsp;<font color="#339933">+</font>&nbsp;c&nbsp;<font color="#006600">//a=a+5</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>a<font color="#009900">&#41;</font><font color="#006600">//9</font></li></ol></blockquote>'
        
        str2 = '<pre align="left">Warning: "В задание сказано посчитать в уме)"</pre>';
        
    }

 

    
    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}

function lab_5_ex_1()
{
    var Number = +document.getElementById("id_lab_5_ex_1_N").value;
    var String = document.getElementById("id_lab_5_ex_1_S").value;
    var Booleann = document.getElementById("id_lab_5_ex_1_B").value;

    if(Booleann == "1"){var Boolean = true}
    if(Booleann == "0"){var Boolean = false}

    //console.log('Boolean +/- Number')
    var BN0=Boolean + Number;
    var BN1=Boolean - Number;

    //console.log('Boolean +/- Boolean')
    var BB0=Boolean + Boolean;
    var BB1=Boolean - Boolean;

    //console.log('String +/- Boolean')
    var SB0=String + Boolean;
    var SB1=String - Boolean;

    //console.log('String +/- String')
    var SS0=String + String;
    var SS1=String - String;

    str2= '<blockquote align="left" class="prer unselectable"><ol><li>'+ BN0 +'</li><li>'+ BN1 +'</li><li>&nbsp;</li><li>'+ BB0 +'</li><li>'+ BB1 +'</li><li>&nbsp;</li><li>'+ SB0 +'</li><li>'+ SB1 +'</li><li>&nbsp;</li><li>'+ SS0 +'</li><li>'+ SS1 +'</li></ol></blockquote>'

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_5_ex_2()
{
    var min = +document.getElementById("id_lab_5_ex_2_MinValue").value;
    var max = +document.getElementById("id_lab_5_ex_2_MaxValue").value;

    var x1 = Math.floor(Math.random() * (max - min + 1)) + min
    var x2 = Math.floor(Math.random() * (max - min + 1)) + min
    var x3 = Math.floor(Math.random() * (max - min + 1)) + min
    
    tmp = 1;

    var A = [x1, x2, x3]

    //Случайный массив чисел A
    //Умножение
    for (var i = 0; i < A.length; i++) {
        tmp *= A[i];
    }
    var MN = tmp;

    tmp = 0
    //Сложение
    for (var i = 0; i < A.length; i++) {
        tmp += A[i];
    }
    var SM = tmp;
    //Остаток от деления последнего числа на инкремент длины массива
    var del = A[2] % (A.length++);

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>//Случайный&nbsp;массив&nbsp;чисел</li><li>'+ A +'</li><li>&nbsp;</li><li>//Умножение</li><li>'+ MN +'</li><li>&nbsp;</li><li>//Сложение</li><li>'+ SM +'</li><li>&nbsp;</li><li>//Остаток&nbsp;от&nbsp;деления&nbsp;последнего&nbsp;числа&nbsp;на&nbsp;инкремент&nbsp;длины&nbsp;массива</li><li>'+ del +'</li></ol></blockquote>';

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_5_ex_3()
{
    var a = +document.getElementById("id_lab_5_ex_3_a").value;
    var b = +document.getElementById("id_lab_5_ex_3_b").value;
    var c = +document.getElementById("id_lab_5_ex_3_c").value;

    var S = 0, p = 0;

    p = (a + b + c) / 2;
    S = p * (p - a) * (p - b) * (p - c);
    S = Math.sqrt(S);


    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>//Площадь&nbsp;треугольника</li><li>S&nbsp;=&nbsp;'+ S +'</li></ol></blockquote>'
    

    document.getElementById("id_labs_out").innerHTML = str2;
}
