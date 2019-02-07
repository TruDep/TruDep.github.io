function upd_lab_3_2_code(Lab_ex_N){
    var str='';
    var str2='';
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: Язык JavaScript: переменные и примитивные типы данных, ТИП ДАННЫХ STRING</b2>';
    var str5='<b2>Цель занятия: изучить основные типы данных в JavaScript</b2>';
    
    if (Lab_ex_N == 33)
    {
        str =  ''
        str2 = ''
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 1)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;surname&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_3_2_ex_1_surname&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;name&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_3_2_ex_1_name&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;patronymic&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_3_2_ex_1_patronymic&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;out&nbsp;<font color="#339933">=</font>&nbsp;surname&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;name&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;patronymic<font color="#339933">;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Длина&nbsp;фамилии&nbsp;равна:&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;surname.<font color="#660066">length</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Длина&nbsp;имени&nbsp;равна:&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;name.<font color="#660066">length</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Длина&nbsp;отчества&nbsp;равна:&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;patronymic.<font color="#660066">length</font><font color="#009900">&#41;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>out<font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Длина&nbsp;ФИО&nbsp;равна:&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;out.<font color="#660066">length</font><font color="#009900">&#41;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Тип&nbsp;переменной&nbsp;surname&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#000066">typeof</font>&nbsp;surname<font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Тип&nbsp;переменной&nbsp;name&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#000066">typeof</font>&nbsp;name<font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Тип&nbsp;переменной&nbsp;patronymic&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#000066">typeof</font>&nbsp;patronymic<font color="#009900">&#41;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>Фамилия</b2></h4></td>\
                            <td><input type="text" value="Мартыненко" class="input_vvod" id="id_lab_3_2_ex_1_surname"></td></tr>\
                        <tr><td><h4><b2>Имя</b2></h4></td>\
                            <td><input type="text" value="Роман" class="input_vvod" id="id_lab_3_2_ex_1_name"></td></tr>\
                        <tr><td><h4><b2>Отчество</b2></h4></td>\
                            <td><input type="text" value="Сергеевич" class="input_vvod" id="id_lab_3_2_ex_1_patronymic"></td></tr>\
                        </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_3_2_ex_1()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 2)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;skorogovorka&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Шла&nbsp;Саша&nbsp;по&nbsp;шоссе&quot;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Первые&nbsp;2&nbsp;буквы&nbsp;-&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;skorogovorka.<font color="#660066">charAt</font><font color="#009900">&#40;</font><font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;skorogovorka.<font color="#660066">charAt</font><font color="#009900">&#40;</font><font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Последние&nbsp;2&nbsp;буквы&nbsp;-&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;skorogovorka.<font color="#660066">charAt</font><font color="#009900">&#40;</font>skorogovorka.<font color="#660066">length</font>&nbsp;<font color="#339933">-</font>&nbsp;<font color="#CC0000">2</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;skorogovorka.<font color="#660066">charAt</font><font color="#009900">&#40;</font>skorogovorka.<font color="#660066">length</font>&nbsp;<font color="#339933">-</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Первые&nbsp;2&nbsp;буквы&nbsp;-&nbsp;Ш&nbsp;л</li><li>Последние&nbsp;2&nbsp;буквы&nbsp;-&nbsp;с&nbsp;е</li></ol></blockquote>'
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 3)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;skorogovorka&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Шла&nbsp;Саша&nbsp;по&nbsp;шоссе&quot;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Позиция&nbsp;первой&nbsp;пустой&nbsp;подстроки&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;skorogovorka.<font color="#660066">indexOf</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Позиция&nbsp;первой&nbsp;пустой&nbsp;подстроки&nbsp;=&nbsp;3</li></ol></blockquote>'
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 4)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li>Используя&nbsp;учебные&nbsp;ресурсы&nbsp;http://javascript.ru/string&nbsp;и&nbsp;https://learn.javascript.ru/string&nbsp;,&nbsp;привести&nbsp;описание&nbsp;не&nbsp;рассмотренных&nbsp;выше&nbsp;методов&nbsp;для&nbsp;работы&nbsp;со&nbsp;строками.&nbsp;Результаты&nbsp;поместить&nbsp;в&nbsp;таблицу.</li></ol></blockquote>'
        str2 = strd
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 5)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;skorogovorka&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Шла&nbsp;саша&nbsp;по&nbsp;шоссе&quot;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>skorogovorka.<font color="#660066">replace</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;с&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;С&quot;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Шла&nbsp;Саша&nbsp;по&nbsp;шоссе</li></ol></blockquote>'
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 6)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;mistake&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Не&nbsp;хочу&nbsp;учится&nbsp;а&nbsp;хочу&nbsp;женится&quot;</font></li><li>&nbsp;</li><li>mistake&nbsp;<font color="#339933">=</font>&nbsp;mistake.<font color="#660066">replace</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;учится&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;учиться,&quot;</font><font color="#009900">&#41;</font></li><li>mistake&nbsp;<font color="#339933">=</font>&nbsp;mistake.<font color="#660066">replace</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;женится&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;жениться&quot;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>mistake<font color="#009900">&#41;</font></li></ol></blockquote>'
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Не&nbsp;хочу&nbsp;учиться,&nbsp;а&nbsp;хочу&nbsp;жениться</li></ol></blockquote>'
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 7)
    {
        str =  ''
        str2 = ''
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 8)
    {
        str =  ''
        str2 = ''
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 9)
    {
        str =  ''
        str2 = ''
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 10)
    {
        str =  ''
        str2 = ''
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    
    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}

function lab_3_2_ex_1()
{
    var surname = document.getElementById("id_lab_3_2_ex_1_surname").value;
    var name = document.getElementById("id_lab_3_2_ex_1_name").value;
    var patronymic = document.getElementById("id_lab_3_2_ex_1_patronymic").value;

    var out = surname + " " + name + " " + patronymic;

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li><font>Длина&nbsp;фамилии&nbsp;равна</font><font>:&nbsp;</font>'+ surname.length +'</li><li><font>Длина&nbsp;имени&nbsp;равна</font><font>:&nbsp;</font>&nbsp;'+ name.length +'</li><li><font>Длина&nbsp;отчества&nbsp;равна</font><font>:&nbsp;</font>&nbsp;' + patronymic.length + '</li><li>&nbsp;</li><li>' + out + '</li><li><font>Длина&nbsp;ФИО&nbsp;равна</font><font>:&nbsp;</font>' + out.length + '</li><li>&nbsp;</li><li>Тип&nbsp;переменной&nbsp;surname&nbsp;=&nbsp;'+ typeof surname +'</li><li>Тип&nbsp;переменной&nbsp;name&nbsp;=&nbsp;'+ typeof name +'</li><li>Тип&nbsp;переменной&nbsp;patronymic&nbsp;=&nbsp;'+ typeof patronymic +'</li></ol></blockquote>'

    document.getElementById("id_labs_out").innerHTML = str2;
}

