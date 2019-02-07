function upd_lab_4_code(Lab_ex_N){
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
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;Numbers&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">2</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">3</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">4</font><font color="#009900">&#93;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Значение&nbsp;2&nbsp;элемента&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;Numbers<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Значение&nbsp;предпоследнего&nbsp;элемента&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;Numbers<font color="#009900">&#91;</font>Numbers.<font color="#660066">length</font><font color="#339933">-</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Размер&nbsp;массива&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;Numbers.<font color="#660066">length</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Значение&nbsp;2&nbsp;элемента&nbsp;=&nbsp;1</li><li>Значение&nbsp;предпоследнего&nbsp;элемента&nbsp;=&nbsp;4</li><li>Размер&nbsp;массива&nbsp;=&nbsp;5</li></ol></blockquote>';
       
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 2)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;Letters&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#3366CC">&quot;Samsung&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Xiaomi&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;MiBand&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Asus&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Redmi_4X&quot;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#009900">&#91;</font>Letters<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;Letters<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font>Letters<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;Letters<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>Letters<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>[&quot;MiBand&quot;,&nbsp;&quot;Xiaomi&quot;,&nbsp;&quot;Samsung&quot;,&nbsp;&quot;Asus&quot;,&nbsp;&quot;Redmi_4X&quot;]</li></ol></blockquote>'
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 3)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;x&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_4_ex_3_MinValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_4_ex_3_MaxValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;x1&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font></li><li><font color="#000066">var</font>&nbsp;x2&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font></li><li><font color="#000066">var</font>&nbsp;x3&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font>x1<font color="#339933">,</font>&nbsp;x2<font color="#339933">,</font>&nbsp;x3<font color="#009900">&#93;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>A<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                 <tbody><tr><td><h4><b2>Min</b2></h4></td>\
                        <td><input type="number" value="50" class="input_vvod" id="id_lab_4_ex_3_MinValue"></td></tr>\
                        <tr><td><h4><b2>Max</b2></h4></td>\
                        <td><input type="number" value="100" class="input_vvod" id="id_lab_4_ex_3_MaxValue"></td></tr></tbody>\
                 </table>\
                 <input type="button" value="Запустить код!" onclick="lab_4_ex_3()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 4)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;x&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_4_ex_3_MinValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_4_ex_3_MaxValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;x1&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font></li><li><font color="#000066">var</font>&nbsp;x2&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font></li><li><font color="#000066">var</font>&nbsp;x3&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font>x1<font color="#339933">,</font>&nbsp;x2<font color="#339933">,</font>&nbsp;x3<font color="#009900">&#93;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Значение&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;i&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;элемента&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li><li>A.<font color="#660066">unshift</font><font color="#009900">&#40;</font><font color="#CC0000">100</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>A.<font color="#660066">push</font><font color="#009900">&#40;</font><font color="#CC0000">100</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Значение&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;i&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;элемента&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>A.<font color="#660066">pop</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font></li><li>A.<font color="#660066">shift</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font></li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Значение&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;i&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;элемента&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li><li>A.<font color="#660066">length</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>A<font color="#009900">&#41;</font></li></ol></blockquote>'
        str2='<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 =  '<table class="table table-bordered table-condensed">\
                 <tbody><tr><td><h4><b2>Min</b2></h4></td>\
                        <td><input type="number" value="50" class="input_vvod" id="id_lab_4_ex_4_MinValue"></td></tr>\
                        <tr><td><h4><b2>Max</b2></h4></td>\
                        <td><input type="number" value="100" class="input_vvod" id="id_lab_4_ex_4_MaxValue"></td></tr></tbody>\
                 </table>\
                 <input type="button" value="Запустить код!" onclick="lab_4_ex_4()">'
        document.getElementById("id_labs_in").innerHTML = str3;
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 5)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;colors&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#3366CC">&quot;white&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;blue&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;yellow&quot;</font><font color="#009900">&#93;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>colors.<font color="#660066">join</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;или&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>colors.<font color="#660066">join</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;,&quot;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>colors.<font color="#660066">join</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;:&quot;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>white&nbsp;или&nbsp;blue&nbsp;или&nbsp;yellow</li><li>white,blue,yellow</li><li>white:blue:yellow</li></ol></blockquote>'
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 6)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;colors&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#3366CC">&quot;white&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;blue&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;yellow&quot;</font><font color="#009900">&#93;</font></li><li><font color="#000066">var</font>&nbsp;numbers&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">2</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">3</font><font color="#009900">&#93;</font></li><li><font color="#000066">var</font>&nbsp;colorNumber&nbsp;<font color="#339933">=</font>&nbsp;colors.<font color="#660066">concat</font><font color="#009900">&#40;</font>numbers<font color="#009900">&#41;</font></li><li>colors.<font color="#660066">length</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>colors<font color="#009900">&#41;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>colorNumber<font color="#009900">&#41;</font></li></ol></blockquote>'
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Array(0)</li><li>&nbsp;</li><li>[&quot;white&quot;,&nbsp;&quot;blue&quot;,&nbsp;&quot;yellow&quot;,&nbsp;1,&nbsp;2,&nbsp;3]</li></ol></blockquote>'
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 7)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">2</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">3</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">4</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">5</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">6</font><font color="#009900">&#93;</font>&nbsp;</li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>arr.<font color="#660066">slice</font><font color="#009900">&#40;</font><font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>arr.<font color="#660066">slice</font><font color="#009900">&#40;</font><font color="#CC0000">1</font><font color="#339933">,</font><font color="#CC0000">4</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>arr.<font color="#660066">slice</font><font color="#009900">&#40;</font><font color="#CC0000">3</font><font color="#339933">,</font><font color="#CC0000">4</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>arr.<font color="#660066">slice</font><font color="#009900">&#40;</font><font color="#339933">-</font><font color="#CC0000">2</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>arr.<font color="#660066">slice</font><font color="#009900">&#40;</font>arr.<font color="#660066">length</font>&nbsp;<font color="#339933">-</font>&nbsp;<font color="#CC0000">2</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>arr.<font color="#660066">slice</font><font color="#009900">&#40;</font><font color="#339933">-</font><font color="#CC0000">3</font><font color="#339933">,-</font><font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>arr.<font color="#660066">slice</font><font color="#009900">&#40;</font>arr.<font color="#660066">length</font>&nbsp;<font color="#339933">-</font>&nbsp;<font color="#CC0000">3</font><font color="#339933">,</font>&nbsp;arr.<font color="#660066">length</font>&nbsp;<font color="#339933">-</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>[2,&nbsp;3,&nbsp;4,&nbsp;5,&nbsp;6]</li><li>&nbsp;</li><li>[2,&nbsp;3,&nbsp;4]</li><li>[4]</li><li>[5,&nbsp;6]</li><li>&nbsp;</li><li>[5,&nbsp;6]</li><li>[4,&nbsp;5]</li><li>[4,&nbsp;5]</li></ol></blockquote>'
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 8)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;colors&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#3366CC">&quot;white&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;yellow&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;blue&quot;</font><font color="#009900">&#93;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>colors.<font color="#660066">reverse</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>colors.<font color="#660066">sort</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>[&quot;blue&quot;,&nbsp;&quot;yellow&quot;,&nbsp;&quot;white&quot;]</li><li>[&quot;blue&quot;,&nbsp;&quot;white&quot;,&nbsp;&quot;yellow&quot;]</li></ol></blockquote>'
        document.getElementById("id_labs_out").innerHTML = strd;
    }

    if (Lab_ex_N == 9)
    {
        str =  '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">2</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">3</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">4</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">5</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">6</font><font color="#009900">&#93;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Удаленные&nbsp;элементы:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;arr.<font color="#660066">splice</font><font color="#009900">&#40;</font><font color="#CC0000">3</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">2</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Оставшиеся&nbsp;элементы:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;arr<font color="#009900">&#41;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Удаленные&nbsp;элементы:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;arr.<font color="#660066">splice</font><font color="#009900">&#40;</font><font color="#339933">-</font><font color="#CC0000">5</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">2</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Оставшиеся&nbsp;элементы:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;arr<font color="#009900">&#41;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Удаленные&nbsp;элементы:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;arr.<font color="#660066">splice</font><font color="#009900">&#40;</font><font color="#CC0000">2</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">7</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Оставшиеся&nbsp;элементы:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;arr<font color="#009900">&#41;</font></li></ol></blockquote>'
        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Удаленные&nbsp;элементы:&nbsp;4,5</li><li>Оставшиеся&nbsp;элементы:&nbsp;1,2,3,6</li><li>&nbsp;</li><li>Удаленные&nbsp;элементы:&nbsp;1,2</li><li>Оставшиеся&nbsp;элементы:&nbsp;3,6</li><li>&nbsp;</li><li>Удаленные&nbsp;элементы:&nbsp;</li><li>Оставшиеся&nbsp;элементы:&nbsp;3,6,7</li></ol></blockquote>'
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

function lab_4_ex_3()
{
    var min = +document.getElementById("id_lab_4_ex_3_MinValue").value;
    var max = +document.getElementById("id_lab_4_ex_3_MaxValue").value;

    function Random(min, max) {
        return x = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var x1 = Random(min, max)
    var x2 = Random(min, max)
    var x3 = Random(min, max)

    var A = [x1, x2, x3]
    
    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>['+ x1 +',&nbsp;'+ x2 +',&nbsp;'+ x3 +']</li></ol></blockquote>'

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_4_ex_4()
{
    var min = +document.getElementById("id_lab_4_ex_4_MinValue").value;
    var max = +document.getElementById("id_lab_4_ex_4_MaxValue").value;

    function Random(min, max) {
        return x = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var x1 = Random(min, max)
    var x2 = Random(min, max)
    var x3 = Random(min, max)
    
    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Значение&nbsp;0&nbsp;элемента&nbsp;=&nbsp;'+ x1 +'</li><li>Значение&nbsp;1&nbsp;элемента&nbsp;=&nbsp;'+ x2 +'</li><li>Значение&nbsp;2&nbsp;элемента&nbsp;=&nbsp;'+ x3 +'</li><li>&nbsp;</li><li>Значение&nbsp;0&nbsp;элемента&nbsp;=&nbsp;100</li><li>Значение&nbsp;1&nbsp;элемента&nbsp;=&nbsp;'+ x1 +'</li><li>Значение&nbsp;2&nbsp;элемента&nbsp;=&nbsp;'+ x2 +'</li><li>Значение&nbsp;3&nbsp;элемента&nbsp;=&nbsp;'+ x3 +'</li><li>Значение&nbsp;4&nbsp;элемента&nbsp;=&nbsp;100</li><li>&nbsp;</li><li>Значение&nbsp;0&nbsp;элемента&nbsp;=&nbsp;'+ x1 +'</li><li>Значение&nbsp;1&nbsp;элемента&nbsp;=&nbsp;'+ x2 +'</li><li>Значение&nbsp;2&nbsp;элемента&nbsp;=&nbsp;'+ x3 +'</li><li>&nbsp;</li><li>Array(0)</li></ol></blockquote>'

    document.getElementById("id_labs_out").innerHTML = str2;
}