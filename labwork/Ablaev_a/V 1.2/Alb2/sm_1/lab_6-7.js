function upd_lab_6_7_code(Lab_ex_N){
    var str='';
    var str2='';
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: Методы и свойства объекта Array (массив)</b2>';
    var str5='<b2>Цель занятия: изучить основные приемы работы с массивами в JavaScript</b2>';
    
    if (Lab_ex_N == 33)
    {
        str =  ''
        str2 = ''
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 1)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_1_A&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;B&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_1_B&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>A&nbsp;<font color="#339933">&gt;</font>&nbsp;B<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Наибольшее&nbsp;число=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;A<font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">else</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Наибольшее&nbsp;число=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;B<font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                 <tbody><tr><td><h4><b2>A =</b2></h4></td>\
                        <td><input type="number" value="50" class="input_vvod" id="id_lab_6_7_ex_1_A"></td></tr>\
                        <tr><td><h4><b2>B =</b2></h4></td>\
                        <td><input type="number" value="100" class="input_vvod" id="id_lab_6_7_ex_1_B"></td></tr></tbody>\
                 </table>\
                 <input type="button" value="Запустить код!" onclick="lab_6_7_ex_1()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    
    if (Lab_ex_N == 2)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;X&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_2_X&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;Y&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_2_Y&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>X&nbsp;<font color="#339933">&gt;</font>&nbsp;Y<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Возрастающая&nbsp;последовательность=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;Y&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;X<font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">else</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Возрастающая&nbsp;последовательность=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;X&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;Y<font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                <tbody><tr><td><h4><b2>X =</b2></h4></td>\
                        <td><input type="number" value="50" class="input_vvod" id="id_lab_6_7_ex_2_X"></td></tr>\
                        <tr><td><h4><b2>Y =</b2></h4></td>\
                        <td><input type="number" value="100" class="input_vvod" id="id_lab_6_7_ex_2_Y"></td></tr></tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_6_7_ex_2()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 3)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font><font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;console.<font color="#660066">log</font>&nbsp;<font color="#009900">&#40;</font>&nbsp;<font color="#3366CC">&quot;Привет&quot;</font>&nbsp;<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2='<blockquote align="left" class="prer unselectable"><ol><li>Ничего&nbsp;не&nbsp;выведет!</li><li>Т.к.&nbsp;условие&nbsp;тождественно&nbsp;ложно&nbsp;и&nbsp;никогда&nbsp;не&nbsp;выполниться.</li></ol></blockquote>';
        
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 4)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_4_A&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;B&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_4_B&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;C&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_4_C&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>A&nbsp;<font color="#339933">&gt;</font>&nbsp;B<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;D&nbsp;<font color="#339933">=</font>&nbsp;A<font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font>&nbsp;<font color="#000066">else</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;D&nbsp;<font color="#339933">=</font>&nbsp;B<font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>C&nbsp;<font color="#339933">&gt;</font>&nbsp;D<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;D&nbsp;<font color="#339933">=</font>&nbsp;C<font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#006600">/*&nbsp;//Почему&nbsp;нельзя&nbsp;было&nbsp;сделать&nbsp;проще</font></li><li><font color="#006600">var&nbsp;num&nbsp;=&nbsp;[A,&nbsp;B,&nbsp;C];</font></li><li><font color="#006600">console.log(Math.max(num[0,1,2]));</font></li><li><font color="#006600">*/</font>&nbsp;<font color="#006600">//Почему&nbsp;нельзя&nbsp;было&nbsp;сделать&nbsp;проще</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Наибольшее&nbsp;число:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;D<font color="#009900">&#41;</font></li><li>&nbsp;</li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>A =</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod" id="id_lab_6_7_ex_4_A"></td></tr>\
                        <tr><td><h4><b2>B =</b2></h4></td>\
                            <td><input type="number" value="18" class="input_vvod" id="id_lab_6_7_ex_4_B"></td></tr>\
                        <tr><td><h4><b2>C =</b2></h4></td>\
                            <td><input type="number" value="64" class="input_vvod" id="id_lab_6_7_ex_4_C"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_6_7_ex_4()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 5)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;ageMa&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_5_ageMa&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;ageFa&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_5_ageFa&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>ageFa&nbsp;<font color="#339933">&lt;</font>&nbsp;ageMa<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Папа&nbsp;старше&nbsp;мамы&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>ageFa&nbsp;<font color="#339933">&gt;</font>&nbsp;ageMa<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Мама&nbsp;старше&nbsp;папы&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>Возраст папы:</b2></h4></td>\
                            <td><input type="number" value="27" class="input_vvod" id="id_lab_6_7_ex_5_ageMa"></td></tr>\
                        <tr><td><h4><b2>Возраст мамы:</b2></h4></td>\
                            <td><input type="number" value="28" class="input_vvod" id="id_lab_6_7_ex_5_ageFa"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_6_7_ex_5()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 6)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;ageMa&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_6_ageMa&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;ageFa&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_6_ageFa&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>ageFa&nbsp;<font color="#339933">&lt;</font>&nbsp;ageMa<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Папа&nbsp;старше&nbsp;мамы&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>ageFa&nbsp;<font color="#339933">&gt;</font>&nbsp;ageMa<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Мама&nbsp;старше&nbsp;папы&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>ageFa&nbsp;<font color="#339933">==</font>&nbsp;ageMa<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Мои&nbsp;родители&nbsp;-&nbsp;ровесники&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>Возраст папы:</b2></h4></td>\
                            <td><input type="number" value="27" class="input_vvod" id="id_lab_6_7_ex_6_ageMa"></td></tr>\
                        <tr><td><h4><b2>Возраст мамы:</b2></h4></td>\
                            <td><input type="number" value="28" class="input_vvod" id="id_lab_6_7_ex_6_ageFa"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_6_7_ex_6()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 7)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;calc&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>calc<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_7_N1&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_7_N2&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_7_+&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#339933">=</font><font color="#3366CC">&quot;+&quot;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_7_-&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#339933">=</font><font color="#3366CC">&quot;-&quot;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_7_*&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#339933">=</font><font color="#3366CC">&quot;*&quot;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_7_/&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#339933">=</font><font color="#3366CC">&quot;/&quot;</font><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;+&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">+</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;-&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">-</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;*&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">*</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;/&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;error:&nbsp;division&nbsp;by&nbsp;zero&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">else</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">/</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;result=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">else</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;result=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>N_1 =</b2></h4></td>\
                            <td><input type="text" value="0" class="input_vvod" id="id_lab_6_7_ex_7_N1"></td></tr>\
                        <tr><td><h4><b2>N_2 =</b2></h4></td>\
                            <td><input type="text" value="0" class="input_vvod" id="id_lab_6_7_ex_7_N2"></td></tr>\
                    </tbody>\
                </table>\
                <h4><b2>Sign</b2></h4>\
                <div class="row gtr-uniform gtr-50">\
                    <div class=" col-12-narrower">\
                        <input type="radio" id="id_lab_6_7_ex_7_+" name="priority" checked>\
                        <label for="id_lab_6_7_ex_7_+"><h3><b2>+</b2></h3></label>\
                    </div>\
                    <div class=" col-12-narrower">\
                        <input type="radio" id="id_lab_6_7_ex_7_-" name="priority">\
                        <label for="id_lab_6_7_ex_7_-"><h3><b2>-</b2></h3></label>\
                    </div>\
                    <div class=" col-12-narrower">\
                        <input type="radio" id="id_lab_6_7_ex_7_*" name="priority">\
                        <label for="id_lab_6_7_ex_7_*"><h3><b2>*</b2></h3></label>\
                    </div>\
                    <div class=" col-12-narrower">\
                        <input type="radio" id="id_lab_6_7_ex_7_/" name="priority">\
                        <label for="id_lab_6_7_ex_7_/"><h3><b2>/</b2></h3></label>\
                    </div>\
                </div>\
                <input type="button" value="Запустить код!" onclick="lab_6_7_ex_7()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 8)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;value&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_8_X&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#009900">&#40;</font>value&nbsp;<font color="#339933">==</font>&nbsp;<font color="#CC0000">1000</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">?</font>&nbsp;<font color="#3366CC">&quot;Верно&quot;</font>&nbsp;<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Неверно&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>Число</b2></h4></td>\
                            <td><input type="number" value="0" class="input_vvod" id="id_lab_6_7_ex_8_X"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_6_7_ex_8()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 9)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;week&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;lang&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_9_lang&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">//Через&nbsp;if</font></li><li>&nbsp;</li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>lang&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;ru&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;week&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#3366CC">&quot;Понедельник&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Вторник&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Среда&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Четверг&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Пятница&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Суббота&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Воскресенье&quot;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Название&nbsp;недель&nbsp;на&nbsp;Русском:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;week<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>lang&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;en&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;week&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#3366CC">&quot;Monday&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Tuesday&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Wednesday&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Thursday&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Friday&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Saturday&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Sunday&quot;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Название&nbsp;недель&nbsp;на&nbsp;Английском:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;week<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<h4><b2>Введите язык (ru или en)</b2></h4>\
                 <table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>lang =</b2></h4></td>\
                            <td><input type="text" value="ru" class="input_vvod" id="id_lab_6_7_ex_9_lang"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_6_7_ex_9()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 10)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;calc&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>calc<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_10_N1&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_10_N2&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_10_+&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#339933">=</font><font color="#3366CC">&quot;+&quot;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_10_-&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#339933">=</font><font color="#3366CC">&quot;-&quot;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_10_*&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#339933">=</font><font color="#3366CC">&quot;*&quot;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_10_/&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#339933">=</font><font color="#3366CC">&quot;/&quot;</font><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">switch</font>&nbsp;<font color="#009900">&#40;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">case</font>&nbsp;<font color="#3366CC">&quot;+&quot;</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">+</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">break</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">case</font>&nbsp;<font color="#3366CC">&quot;-&quot;</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">-</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">break</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">case</font>&nbsp;<font color="#3366CC">&quot;*&quot;</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">*</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">break</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">case</font>&nbsp;<font color="#3366CC">&quot;/&quot;</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">switch</font>&nbsp;<font color="#009900">&#40;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">case</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;На&nbsp;ноль&nbsp;делить&nbsp;нельзя&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">break</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">default</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;result=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">break</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">switch</font>&nbsp;<font color="#009900">&#40;</font>calc<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">case</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;На&nbsp;ноль&nbsp;делить&nbsp;нельзя&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">break</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">default</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;result=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;calc<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>N_1 =</b2></h4></td>\
                            <td><input type="text" value="0" class="input_vvod" id="id_lab_6_7_ex_7_N1"></td></tr>\
                        <tr><td><h4><b2>N_2 =</b2></h4></td>\
                            <td><input type="text" value="0" class="input_vvod" id="id_lab_6_7_ex_7_N2"></td></tr>\
                    </tbody>\
                </table>\
                <h4><b2>Sign</b2></h4>\
                <div class="row gtr-uniform gtr-50">\
                    <div class=" col-12-narrower">\
                        <input type="radio" id="id_lab_6_7_ex_7_+" name="priority" checked>\
                        <label for="id_lab_6_7_ex_7_+"><h3><b2>+</b2></h3></label>\
                    </div>\
                    <div class=" col-12-narrower">\
                        <input type="radio" id="id_lab_6_7_ex_7_-" name="priority">\
                        <label for="id_lab_6_7_ex_7_-"><h3><b2>-</b2></h3></label>\
                    </div>\
                    <div class=" col-12-narrower">\
                        <input type="radio" id="id_lab_6_7_ex_7_*" name="priority">\
                        <label for="id_lab_6_7_ex_7_*"><h3><b2>*</b2></h3></label>\
                    </div>\
                    <div class=" col-12-narrower">\
                        <input type="radio" id="id_lab_6_7_ex_7_/" name="priority">\
                        <label for="id_lab_6_7_ex_7_/"><h3><b2>/</b2></h3></label>\
                    </div>\
                </div>\
                <input type="button" value="Запустить код!" onclick="lab_6_7_ex_7()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }


    if (Lab_ex_N == 11)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;slovo&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_6_7_ex_11_slovo&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">//Через&nbsp;if</font></li><li><font color="#000066">var</font>&nbsp;aa&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;ee&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;ii&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;oo&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;slovo.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>slovo<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;a&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;aa<font color="#339933">++</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>slovo<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;e&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;ee<font color="#339933">++</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>slovo<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;i&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;ii<font color="#339933">++</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>slovo<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;o&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;oo<font color="#339933">++</font>&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;</font>a<font color="#3366CC">&quot;:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;aa<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;</font>e<font color="#3366CC">&quot;:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;ee<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;</font>i<font color="#3366CC">&quot;:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;ii<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;</font>o<font color="#3366CC">&quot;:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;oo<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;</li><li><font color="#006600">//Через&nbsp;switch</font></li><li><font color="#000066">var</font>&nbsp;aa&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;ee&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;ii&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;oo&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;slovo.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">switch</font>&nbsp;<font color="#009900">&#40;</font>slovo<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">case</font>&nbsp;<font color="#3366CC">&quot;a&quot;</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aa<font color="#339933">++</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">break</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">case</font>&nbsp;<font color="#3366CC">&quot;e&quot;</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ee<font color="#339933">++</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">break</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">case</font>&nbsp;<font color="#3366CC">&quot;i&quot;</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii<font color="#339933">++</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">break</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">case</font>&nbsp;<font color="#3366CC">&quot;o&quot;</font><font color="#339933">:</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oo<font color="#339933">++</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">break</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#006600">/*</font></li><li><font color="#006600">console.log(&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;a&quot;:&nbsp;&quot;&nbsp;+&nbsp;aa);</font></li><li><font color="#006600">console.log(&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;e&quot;:&nbsp;&quot;&nbsp;+&nbsp;ee);</font></li><li><font color="#006600">console.log(&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;i&quot;:&nbsp;&quot;&nbsp;+&nbsp;ii);</font></li><li><font color="#006600">console.log(&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;o&quot;:&nbsp;&quot;&nbsp;+&nbsp;oo);</font></li><li><font color="#006600">*/</font></li><li>&nbsp;</li><li><font color="#006600">//Через&nbsp;split</font></li><li><font color="#006600">//Зачем&nbsp;мучитсья,&nbsp;если&nbsp;можно&nbsp;использовать&nbsp;split</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;a&nbsp;<font color="#339933">=</font>&nbsp;slovo.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;a&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">length</font>&nbsp;<font color="#339933">-</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;e&nbsp;<font color="#339933">=</font>&nbsp;slovo.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;e&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">length</font>&nbsp;<font color="#339933">-</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;slovo.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;i&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">length</font>&nbsp;<font color="#339933">-</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;o&nbsp;<font color="#339933">=</font>&nbsp;slovo.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;o&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">length</font>&nbsp;<font color="#339933">-</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font></li><li><font color="#006600">/*</font></li><li><font color="#006600">console.log(&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;a&quot;:&nbsp;&quot;&nbsp;+&nbsp;a);</font></li><li><font color="#006600">console.log(&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;e&quot;:&nbsp;&quot;&nbsp;+&nbsp;e);</font></li><li><font color="#006600">console.log(&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;i&quot;:&nbsp;&quot;&nbsp;+&nbsp;i);</font></li><li><font color="#006600">console.log(&quot;Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;o&quot;:&nbsp;&quot;&nbsp;+&nbsp;o);</font></li><li><font color="#006600">*/</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<h4><b2>Введите любое слово</b2></h4>\
                 <table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>slovo =</b2></h4></td>\
                            <td><input type="text" value="abracadabra" class="input_vvod" id="id_lab_6_7_ex_11_slovo"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_6_7_ex_11()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    
    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}

function lab_6_7_ex_1()
{
    var A = +document.getElementById("id_lab_6_7_ex_1_A").value;
    var B = +document.getElementById("id_lab_6_7_ex_1_B").value;

    if (A > B) {
        //console.log("Наибольшее число= " + A)
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Наибольшее&nbsp;число=&nbsp;&quot;'+ A +'&quot;</li></ol></blockquote>'
    }
    else {
        //console.log("Наибольшее число= " + B)
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Наибольшее&nbsp;число=&nbsp;&quot;'+ B +'&quot;</li></ol></blockquote>'
    }
    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_6_7_ex_2()
{
    var X = document.getElementById("id_lab_6_7_ex_2_X").value;
    var Y = document.getElementById("id_lab_6_7_ex_2_Y").value;

    if (X > Y) {
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Возрастающая&nbsp;последовательность=&nbsp;'+ Y +'&nbsp;'+ X +'</li></ol></blockquote>'
    }
    else {
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Возрастающая&nbsp;последовательность=&nbsp;'+ X +'&nbsp;'+ Y +'</li></ol></blockquote>'
    }

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_6_7_ex_4()
{
    var A = document.getElementById("id_lab_6_7_ex_4_A").value;
    var B = document.getElementById("id_lab_6_7_ex_4_B").value;
    var C = document.getElementById("id_lab_6_7_ex_4_C").value;

    if (A > B) { D = A; } else { D = B; }
    if (C > D) { D = C; }

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Наибольшее&nbsp;число:&nbsp;'+ D +'</li></ol></blockquote>'
    

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_6_7_ex_5()
{
    var ageMa = document.getElementById("id_lab_6_7_ex_5_ageMa").value;
    var ageFa = document.getElementById("id_lab_6_7_ex_5_ageFa").value;


    if (ageFa < ageMa) { 
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Папа&nbsp;старше&nbsp;мамы</li></ol></blockquote>'; 
    }
    if (ageFa > ageMa) { 
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Мама&nbsp;старше&nbsp;папы</li></ol></blockquote>'; 
    }
    if (ageFa == ageMa) { 
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Ничего&nbsp;не&nbsp;выведет!</li><li>Т.к.&nbsp;в&nbsp;условии&nbsp;задачи&nbsp;не&nbsp;требовалось&nbsp;делать&nbsp;проверку</li><li>на&nbsp;одинаковый&nbsp;возраст&nbsp;родителей.</li></ol></blockquote>'; 
    }

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_6_7_ex_6()
{
    var ageMa = document.getElementById("id_lab_6_7_ex_6_ageMa").value;
    var ageFa = document.getElementById("id_lab_6_7_ex_6_ageFa").value;


    if (ageFa < ageMa) { 
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Папа&nbsp;старше&nbsp;мамы</li></ol></blockquote>'; 
    }
    if (ageFa > ageMa) { 
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Мама&nbsp;старше&nbsp;папы</li></ol></blockquote>'; 
    }
    if (ageFa == ageMa) { 
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Мои&nbsp;родители&nbsp;-&nbsp;ровесники</li></ol></blockquote>'; 
    }

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_6_7_ex_7()
{
    var calc = [];

    calc[0] = +document.getElementById("id_lab_6_7_ex_7_N1").value;
    calc[1] = +document.getElementById("id_lab_6_7_ex_7_N2").value;

    if(document.getElementById("id_lab_6_7_ex_7_+").checked){calc[2]="+"}
    if(document.getElementById("id_lab_6_7_ex_7_-").checked){calc[2]="-"}
    if(document.getElementById("id_lab_6_7_ex_7_*").checked){calc[2]="*"}
    if(document.getElementById("id_lab_6_7_ex_7_/").checked){calc[2]="/"}


    if (calc[2] == '+') { calc[3] = calc[0] + calc[1]; }
    if (calc[2] == '-') { calc[3] = calc[0] - calc[1]; }
    if (calc[2] == '*') { calc[3] = calc[0] * calc[1]; }

    if (calc[2] == '/') {
        if (calc[1] == 0) {
            str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Warning!</li><li>На&nbsp;ноль&nbsp;делить&nbsp;нельзя</li></ol></blockquote>';
        }
        else {
            calc[3] = calc[0] / calc[1];
            str2 = '<blockquote align="left" class="prer unselectable"><ol><li>'+ calc[0] +'&nbsp;'+ calc[2] +'&nbsp;'+ calc[1] +'&nbsp;=&nbsp;'+ calc[3] +'</li></ol></blockquote>';
        }
    }
    else {
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>'+ calc[0] +'&nbsp;'+ calc[2] +'&nbsp;'+ calc[1] +'&nbsp;=&nbsp;'+ calc[3] +'</li></ol></blockquote>';
    }

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_6_7_ex_8()
{
    var value = +document.getElementById("id_lab_6_7_ex_8_X").value;

    if (value == 1000) { 
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Верно</li></ol></blockquote>'; 
    }
    else{
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Неверно</li></ol></blockquote>';
    }

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_6_7_ex_9()
{
    var lang = document.getElementById("id_lab_6_7_ex_9_lang").value;

    var week = [];

    if (lang == "ru") {
        week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Название&nbsp;недель&nbsp;на&nbsp;Русском:</li><li>Понедельник,&nbsp;Вторник,&nbsp;Среда,&nbsp;Четверг,&nbsp;Пятница,&nbsp;Суббота</li></ol></blockquote>'; 
    }
    
    if (lang == "en") {
        week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Название&nbsp;недель&nbsp;на&nbsp;Английском:</li><li>Monday,&nbsp;Tuesday,&nbsp;Wednesday,&nbsp;Thursday,&nbsp;Friday,&nbsp;Saturday,&nbsp;Sunday</li></ol></blockquote>'; 
    }


    document.getElementById("id_labs_out").innerHTML = str2;
}


function lab_6_7_ex_11()
{
    var slovo = document.getElementById("id_lab_6_7_ex_11_slovo").value;

    var a = slovo.split("a").length - 1;
    var e = slovo.split("e").length - 1;
    var i = slovo.split("i").length - 1;
    var o = slovo.split("o").length - 1;

    str2= '<blockquote align="left" class="prer unselectable"><ol><li>Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;a&quot;:&nbsp;'+ a +'</li><li>Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;e&quot;:&nbsp;'+ e +'</li><li>Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;i&quot;:&nbsp;'+ i +'</li><li>Содержание&nbsp;в&nbsp;слове&nbsp;буквы&nbsp;&quot;o&quot;:&nbsp;'+ o +'</li></ol></blockquote>'



    document.getElementById("id_labs_out").innerHTML = str2;
}


