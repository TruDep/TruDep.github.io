function upd_lab_17_1_code(Lab_ex_N){
    
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: замыкания и прототип объекта</b2>';
    var str5='<b2>Цель занятия: изучить понятие замыкания переменной</b2>';
    
    var str='';
    var str2= strd;


    if (Lab_ex_N == 1)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//&nbsp;Мои&nbsp;функции</font></li><li><font color="#000066">function</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;x&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;RandMass<font color="#009900">&#40;</font>length<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;length<font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;A<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_17_1_ex_1_MinValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_17_1_ex_1_MaxValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;L&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_17_1_ex_1_L&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;cube<font color="#009900">&#40;</font>f<font color="#339933">,</font>&nbsp;a<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;result&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">!=</font>&nbsp;a.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;f<font color="#009900">&#40;</font>a<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;result<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">var</font>&nbsp;f&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font>x<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;x&nbsp;<font color="#339933">*</font>&nbsp;x&nbsp;<font color="#339933">*</font>&nbsp;x<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#006600">//Вызов&nbsp;из&nbsp;примера:</font></li><li><font color="#006600">//cube(f,[1,2,3])&nbsp;//[1,&nbsp;8,&nbsp;27]</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>cube<font color="#009900">&#40;</font>f<font color="#339933">,</font>RandMass<font color="#009900">&#40;</font>L<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>Длинна массива</b2></h4></td>\
                        <td><input type="number" value="3" class="input_vvod" id="id_lab_17_1_ex_1_L"></td></tr>\
                    <tr><td><h4><b2>Min</b2></h4></td>\
                        <td><input type="number" value="1" class="input_vvod" id="id_lab_17_1_ex_1_MinValue"></td></tr>\
                    <tr><td><h4><b2>Max</b2></h4></td>\
                        <td><input type="number" value="3" class="input_vvod" id="id_lab_17_1_ex_1_MaxValue"></td></tr>\
                    </tbody>\
                 </table>\
							<input type="button" value="Запустить код!" onclick="lab_17_1_ex_1()">'
    }

    
    if (Lab_ex_N == 2)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//&nbsp;Через&nbsp;доп&nbsp;переменную&nbsp;(Глобальную)</font></li><li><font color="#000066">var</font>&nbsp;num&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;fn&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font><font color="#000066">return</font>&nbsp;<font color="#339933">++</font>num<font color="#339933">;</font><font color="#009900">&#125;</font><font color="#339933">;</font></li><li>alert<font color="#009900">&#40;</font>fn<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//1</font></li><li>alert<font color="#009900">&#40;</font>fn<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//2</font></li><li>alert<font color="#009900">&#40;</font>fn<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//3</font></li><li>&nbsp;</li><li>&nbsp;</li><li><font color="#006600">//Полностью&nbsp;анонимная&nbsp;функция&nbsp;с&nbsp;замыканием&nbsp;переменной&nbsp;&nbsp;&nbsp;&nbsp;</font></li><li><font color="#000066">var</font>&nbsp;fn&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;num&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font><font color="#000066">return</font>&nbsp;<font color="#339933">++</font>num<font color="#339933">;</font><font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font><font color="#339933">;</font></li><li>fn&nbsp;<font color="#339933">=</font>&nbsp;fn<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>alert<font color="#009900">&#40;</font>fn<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//1</font></li><li>alert<font color="#009900">&#40;</font>fn<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//2</font></li><li>alert<font color="#009900">&#40;</font>fn<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//3</font></li></ol></blockquote>'
    }

    if (Lab_ex_N == 3)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_17_1_ex_3_A&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;B&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_17_1_ex_3_B&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;sum<font color="#009900">&#40;</font>a<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font>b<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;a&nbsp;<font color="#339933">+</font>&nbsp;b<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>sum<font color="#009900">&#40;</font>A<font color="#009900">&#41;</font><font color="#009900">&#40;</font>B<font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>A</b2></h4></td>\
                        <td><input type="number" value="15" class="input_vvod" id="id_lab_17_1_ex_3_A"></td></tr>\
                    <tr><td><h4><b2>B</b2></h4></td>\
                        <td><input type="number" value="23" class="input_vvod" id="id_lab_17_1_ex_3_B"></td></tr>\
                    </tbody>\
                 </table>\
                            <input type="button" value="Запустить код!" onclick="lab_17_1_ex_3()">'
    }

    if (Lab_ex_N == 4)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;X&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_17_1_ex_4_X&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;Y&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_17_1_ex_4_Y&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;square<font color="#009900">&#40;</font>x<font color="#339933">,</font>y<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">function</font>&nbsp;sq<font color="#009900">&#40;</font>x<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font><font color="#000066">return</font>&nbsp;x<font color="#339933">*</font>x<font color="#009900">&#125;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;sq<font color="#009900">&#40;</font>x<font color="#009900">&#41;</font><font color="#339933">+</font>sq<font color="#009900">&#40;</font>y<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">//Вызов&nbsp;из&nbsp;примера:</font></li><li><font color="#006600">//square(2,&nbsp;3)&nbsp;//13</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>square<font color="#009900">&#40;</font>X<font color="#339933">,</font>&nbsp;Y<font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>X</b2></h4></td>\
                        <td><input type="number" value="2" class="input_vvod" id="id_lab_17_1_ex_4_X"></td></tr>\
                    <tr><td><h4><b2>Y</b2></h4></td>\
                        <td><input type="number" value="3" class="input_vvod" id="id_lab_17_1_ex_4_Y"></td></tr>\
                    </tbody>\
                 </table>\
                            <input type="button" value="Запустить код!" onclick="lab_17_1_ex_4()">'
    }

    if (Lab_ex_N == 5)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;f<font color="#009900">&#40;</font>a<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font>b<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font>a&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;,&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;b<font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">var</font>&nbsp;TuzikFunction&nbsp;<font color="#339933">=</font>&nbsp;f<font color="#009900">&#40;</font><font color="#3366CC">&quot;Тузик&quot;</font><font color="#009900">&#41;</font></li><li>TuzikFunction<font color="#009900">&#40;</font><font color="#3366CC">&quot;фууууу&quot;</font><font color="#009900">&#41;</font></li><li>TuzikFunction<font color="#009900">&#40;</font><font color="#3366CC">&quot;фас&quot;</font><font color="#009900">&#41;</font></li><li>TuzikFunction<font color="#009900">&#40;</font><font color="#3366CC">&quot;дай&nbsp;лапу&quot;</font><font color="#009900">&#41;</font></li><li>TuzikFunction<font color="#009900">&#40;</font><font color="#3366CC">&quot;лежать&quot;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Тузик,&nbsp;фууууу</li><li>Тузик,&nbsp;фас</li><li>Тузик,&nbsp;дай&nbsp;лапу</li><li>Тузик,&nbsp;лежать</li></ol></blockquote>'
    }

    
    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}



function lab_17_1_ex_1()
{
    var min = +document.getElementById("id_lab_17_1_ex_1_MinValue").value;
    var max = +document.getElementById("id_lab_17_1_ex_1_MaxValue").value;
    var L = +document.getElementById("id_lab_17_1_ex_1_L").value;
 
    function cube(f, a) {
        var result = [];
        for (var i = 0; i != a.length; i++)
            result[i] = f(a[i]);
        return result;
    }
    var f = function (x) {
        return x * x * x;
    }
    //cube(f,RandMass(L, min, max))

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>['+ cube(f,RandMass(L, min, max)) +']</li></ol></blockquote>'
        
    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_17_1_ex_3()
{
    var A = +document.getElementById("id_lab_17_1_ex_3_A").value;
    var B = +document.getElementById("id_lab_17_1_ex_3_B").value;
    
    function sum(a) {
        return function (b) {
            return a + b;
        };
    };
    //console.log(sum(A)(B));
    
    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>'+ sum(A)(B) +'</li></ol></blockquote>'  

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_17_1_ex_4()
{
    var X = +document.getElementById("id_lab_17_1_ex_4_X").value;
    var Y = +document.getElementById("id_lab_17_1_ex_4_Y").value;
    
    function square(x,y) {
        function sq(x) {return x*x};
        return sq(x)+sq(y);
    };
   
    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>'+ square(X, Y) +'</li></ol></blockquote>'
        

    document.getElementById("id_labs_out").innerHTML = str2;
}




function upd_lab_17_2_code(Lab_ex_N){
    
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: замыкания и прототип объекта</b2>';
    var str5='<b2>Цель занятия: изучить понятие прототип объекта</b2>';
    
    var str='';
    var str2= strd;


    if (Lab_ex_N == 1)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;animal&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;eats<font color="#339933">:</font>&nbsp;<font color="#003366">true</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;elephant&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;jumps<font color="#339933">:</font>&nbsp;<font color="#003366">false</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;loves<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;bananas&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;trunk<font color="#339933">:</font>&nbsp;<font color="#003366">true</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>elephant.<font color="#000066">__proto__</font>&nbsp;<font color="#339933">=</font>&nbsp;animal</li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;key&nbsp;<font color="#000066">in</font>&nbsp;elephant<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font>key<font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>elephant.<font color="#000066">hasOwnProperty</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;eats&quot;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>elephant.<font color="#000066">hasOwnProperty</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;trunk&quot;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>&nbsp;</li><li><font color="#000066">delete</font>&nbsp;elephant.<font color="#660066">eats</font></li><li><font color="#000066">delete</font>&nbsp;elephant.<font color="#660066">trunk</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;key&nbsp;<font color="#000066">in</font>&nbsp;elephant<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font>key<font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>jumps</li><li>loves</li><li>trunk</li><li>eats</li><li>&nbsp;</li><li>false</li><li>true</li><li>&nbsp;</li><li>jumps</li><li>loves</li><li>eats</li></ol></blockquote>';
    }

    
    if (Lab_ex_N == 2)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;pet&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;eats<font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">full</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#003366">true</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">var</font>&nbsp;kitten&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;say<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;meow&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">__proto__</font><font color="#339933">:</font>&nbsp;pet</li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>kitten.<font color="#660066">eats</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;&nbsp;<font color="#006600">//(full:&nbsp;true)&nbsp;Будет&nbsp;находится&nbsp;в&nbsp;объекте&nbsp;kitten</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>{say:&nbsp;&quot;meow&quot;,&nbsp;full:&nbsp;true}</li></ol></blockquote>';
    }

    if (Lab_ex_N == 3)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;pet&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;eats<font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">full</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#003366">true</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">var</font>&nbsp;kitten&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;say<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;meow&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">__proto__</font><font color="#339933">:</font>&nbsp;pet</li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>kitten.<font color="#660066">eats</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;&nbsp;<font color="#006600">//(full:&nbsp;true)&nbsp;Будет&nbsp;находится&nbsp;в&nbsp;объекте&nbsp;kitten</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>gender</li><li>age</li><li>eats</li><li>legs</li><li>speaks</li><li>learnedEnglish</li><li>&nbsp;</li><li>gender</li><li>loves</li><li>eats</li><li>legs</li><li>speaks</li><li>learnedEnglish</li><li>&nbsp;</li><li>{gender:&nbsp;&quot;m&quot;,&nbsp;loves:&nbsp;Array(2),&nbsp;knowsEnglish:&nbsp;true}</li></ol></blockquote>';
    }

    if (Lab_ex_N == 4)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;car&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;ICE<font color="#339933">:</font>&nbsp;<font color="#003366">true</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Fuel<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;petrol&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;drive<font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font><font color="#009900">&#91;</font><font color="#3366CC">&quot;drive&nbsp;by&nbsp;drive&quot;</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#003366">true</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">var</font>&nbsp;bus&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;type<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;public&nbsp;bus&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;capacity<font color="#339933">:</font>&nbsp;<font color="#CC0000">34</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;wheels<font color="#339933">:</font>&nbsp;<font color="#CC0000">4</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">var</font>&nbsp;autotruck&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;type<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;cargo&nbsp;car&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;capacity<font color="#339933">:</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">50</font><font color="#009900">&#93;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;wheels<font color="#339933">:</font>&nbsp;<font color="#CC0000">6</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>bus.<font color="#000066">__proto__</font>&nbsp;<font color="#339933">=</font>&nbsp;car</li><li>autotruck.<font color="#000066">__proto__</font>&nbsp;<font color="#339933">=</font>&nbsp;car</li><li>&nbsp;</li><li>autotruck.<font color="#660066">drive</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>autotruck<font color="#009900">&#41;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>{type:&nbsp;&quot;cargo&nbsp;car&quot;,&nbsp;capacity:&nbsp;Array(2),&nbsp;wheels:&nbsp;6,&nbsp;drive&nbsp;by&nbsp;drive:&nbsp;true}</li></ol></blockquote>';
    }

    
    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}
