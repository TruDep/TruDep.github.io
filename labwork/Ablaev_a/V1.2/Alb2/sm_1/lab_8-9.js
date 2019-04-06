function upd_lab_8_9_code(Lab_ex_N){
    
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: Язык JavaScript: условный оператор и операторы цикла</b2>';
    var str5='<b2>Цель занятия: повторить оператор ветвления и изучить операторы цикла JavaScript</b2>';
    
    var str='';
    var str2= strd;


    if (Lab_ex_N == 1)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#339933">;</font>&nbsp;<font color="#339933">;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;&nbsp;<font color="#006600">//for&nbsp;без&nbsp;условий&nbsp;выполняет&nbsp;роль&nbsp;бесконечного&nbsp;цикла</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#006600">//Чаще&nbsp;всего&nbsp;такой&nbsp;код&nbsp;может&nbsp;положить&nbsp;браузер</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Yes&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">break</font><font color="#339933">;</font>&nbsp;<font color="#006600">//команда&nbsp;break&nbsp;прекращает&nbsp;выполнение&nbsp;цикла</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Yes</li></ol></blockquote>'

    }

    
    if (Lab_ex_N == 2)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">100</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&gt;=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i<font color="#339933">-=</font><font color="#CC0000">20</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Число:&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;i<font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Число:100</li><li>Число:80</li><li>Число:60</li><li>Число:40</li><li>Число:20</li><li>Число:0</li></ol></blockquote>';
        
    }

    if (Lab_ex_N == 3)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">12</font><font color="#339933">,</font>&nbsp;<font color="#339933">-</font><font color="#CC0000">45</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">67</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">90</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">666</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font>i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">%</font>&nbsp;<font color="#CC0000">2</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>console.<font color="#660066">log</font><font color="#009900">&#40;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font><font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>12</li><li>90</li><li>666</li></ol></blockquote>';
        
        document.getElementById("id_labs_out").innerHTML = strd;
        
    }

    if (Lab_ex_N == 4)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//&nbsp;Мои&nbsp;функции</font></li><li><font color="#000066">function</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;x&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;RandMass<font color="#009900">&#40;</font>length<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;length<font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;A<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_4_MinValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_4_MaxValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>A&nbsp;<font color="#339933">=</font>&nbsp;RandMass<font color="#009900">&#40;</font><font color="#CC0000">5</font><font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Прямой&nbsp;порядок:&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Обратный&nbsp;порядок:&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">-</font><font color="#CC0000">1</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&gt;</font>&nbsp;<font color="#339933">-</font><font color="#CC0000">1</font><font color="#339933">;</font>&nbsp;i<font color="#339933">--</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>Min</b2></h4></td>\
                            <td><input type="number" value="-10" class="input_vvod" id="id_lab_8_9_ex_4_MinValue"></td></tr>\
                        <tr><td><h4><b2>Max</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod" id="id_lab_8_9_ex_4_MaxValue"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_8_9_ex_4()">'
        
    }

    if (Lab_ex_N == 5)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;n&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">5</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_5_N&quot;</font><font color="#339933">+</font>&nbsp;i&nbsp;<font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;n&nbsp;<font color="#339933">+=</font>&nbsp;arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;arr[&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;i&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;]&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Сумма&nbsp;чисел:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;n<font color="#009900">&#41;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>arr[0]</b2></h4></td>\
                            <td><input type="number" value="1" class="input_vvod" id="id_lab_8_9_ex_5_N0"></td></tr>\
                        <tr><td><h4><b2>arr[1]</b2></h4></td>\
                            <td><input type="number" value="2" class="input_vvod" id="id_lab_8_9_ex_5_N1"></td></tr>\
                        <tr><td><h4><b2>arr[2]</b2></h4></td>\
                            <td><input type="number" value="5" class="input_vvod" id="id_lab_8_9_ex_5_N2"></td></tr>\
                        <tr><td><h4><b2>arr[3]</b2></h4></td>\
                            <td><input type="number" value="7" class="input_vvod" id="id_lab_8_9_ex_5_N3"></td></tr>\
                        <tr><td><h4><b2>arr[4]</b2></h4></td>\
                            <td><input type="number" value="11" class="input_vvod" id="id_lab_8_9_ex_5_N4"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_8_9_ex_5()">'
    }

    if (Lab_ex_N == 6)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;P&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;L<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_6_L&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;L<font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;+prompt<font color="#009900">&#40;</font><font color="#3366CC">&quot;Введите&nbsp;arr[&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;i&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;]:&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;P&nbsp;<font color="#339933">*=</font>&nbsp;arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;arr[&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;i&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;]&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Произведение&nbsp;чисел:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;P<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>Размер массива</b2></h4></td>\
                            <td><input type="number" value="5" class="input_vvod" id="id_lab_8_9_ex_6_L"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_8_9_ex_6()">'
        
    }

    if (Lab_ex_N == 7)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//&nbsp;Мои&nbsp;функции</font></li><li><font color="#000066">function</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;x&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;RandMass<font color="#009900">&#40;</font>length<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;length<font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;A<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_7_MinValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_7_MaxValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;L<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_7_L&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;RandMass<font color="#009900">&#40;</font>L<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;n&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;x&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>A<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;Вывод&nbsp;сгенерированного&nbsp;массива</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n&nbsp;<font color="#339933">+=</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<font color="#339933">++;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li>n&nbsp;<font color="#339933">=</font>&nbsp;n&nbsp;<font color="#339933">/</font>&nbsp;x<font color="#339933">;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Среднее&nbsp;арифметическое&nbsp;отрицательных&nbsp;элементов&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;n.<font color="#660066">toFixed</font><font color="#009900">&#40;</font><font color="#CC0000">2</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>Размер массива</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod2" id="id_lab_8_9_ex_7_L"></td></tr>\
                        <tr><td><h4><b2>Min</b2></h4></td>\
                            <td><input type="number" value="-10" class="input_vvod2" id="id_lab_8_9_ex_7_MinValue"></td></tr>\
                        <tr><td><h4><b2>Max</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod2" id="id_lab_8_9_ex_7_MaxValue"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_8_9_ex_7()">'
        
    }

    if (Lab_ex_N == 8)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//&nbsp;Мои&nbsp;функции</font></li><li><font color="#000066">function</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;x&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;RandMass<font color="#009900">&#40;</font>length<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;length<font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;A<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_8_MinValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_8_MaxValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;L<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_8_L&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;key<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_8_key&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;y&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;n&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>arr&nbsp;<font color="#339933">=</font>&nbsp;RandMass<font color="#009900">&#40;</font>L<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;L<font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;key<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y<font color="#009900">&#91;</font>n<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;i<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n<font color="#339933">++;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;arr[&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;i&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;]&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Индексы&nbsp;в&nbsp;которых&nbsp;находятся&nbsp;слово&nbsp;&quot;</font>key<font color="#3366CC">&quot;:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;y<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>Размер массива</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod2" id="id_lab_8_9_ex_8_L"></td></tr>\
                        <tr><td><h4><b2>Min</b2></h4></td>\
                            <td><input type="number" value="-10" class="input_vvod2" id="id_lab_8_9_ex_8_MinValue"></td></tr>\
                        <tr><td><h4><b2>Max</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod2" id="id_lab_8_9_ex_8_MaxValue"></td></tr>\
                        <tr><td><h4><b2>Искоме число</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod2" id="id_lab_8_9_ex_8_key"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_8_9_ex_8()">'
        
    }

    if (Lab_ex_N == 9)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//&nbsp;Мои&nbsp;функции</font></li><li><font color="#000066">function</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;x&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;RandMass<font color="#009900">&#40;</font>length<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;length<font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;A<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_9_MinValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_9_MaxValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;L<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_9_L&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;RandMass<font color="#009900">&#40;</font>L<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font></li><li><font color="#000066">var</font>&nbsp;i1&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i2&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;X&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;Y&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>A<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">&gt;</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;X<font color="#009900">&#91;</font>i1<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font>&nbsp;i1<font color="#339933">++;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;Y<font color="#009900">&#91;</font>i2<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font>&nbsp;i2<font color="#339933">++;</font>&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Положительный&nbsp;массив:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;X<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Отрицательный&nbsp;массив:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;Y<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>Размер массива</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod2" id="id_lab_8_9_ex_9_L"></td></tr>\
                        <tr><td><h4><b2>Min</b2></h4></td>\
                            <td><input type="number" value="-10" class="input_vvod2" id="id_lab_8_9_ex_9_MinValue"></td></tr>\
                        <tr><td><h4><b2>Max</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod2" id="id_lab_8_9_ex_9_MaxValue"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_8_9_ex_9()">'
        
    }

    if (Lab_ex_N == 10)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//&nbsp;Мои&nbsp;функции</font></li><li><font color="#000066">function</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;x&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;RandMass<font color="#009900">&#40;</font>length<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;length<font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;A<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_10_MinValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_10_MaxValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;L<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_10_L&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;B&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;C&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;RandMass<font color="#009900">&#40;</font>L<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;L<font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;B<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>prompt<font color="#009900">&#40;</font><font color="#3366CC">&quot;Введите&nbsp;arr[&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;i&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;]:&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;C<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">+</font>&nbsp;B<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Рандомный&nbsp;массив:&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>A<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Пользовательский&nbsp;массив:&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>B<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Итоговый&nbsp;массив:&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>C<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>Размер массива</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod2" id="id_lab_8_9_ex_10_L"></td></tr>\
                        <tr><td><h4><b2>Min</b2></h4></td>\
                            <td><input type="number" value="-10" class="input_vvod2" id="id_lab_8_9_ex_10_MinValue"></td></tr>\
                        <tr><td><h4><b2>Max</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod2" id="id_lab_8_9_ex_10_MaxValue"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_8_9_ex_10()">'
        
    }


    if (Lab_ex_N == 11)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//&nbsp;Мои&nbsp;функции</font></li><li><font color="#000066">function</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;x&nbsp;<font color="#339933">=</font>&nbsp;<font>Math</font>.<font color="#660066">floor</font><font color="#009900">&#40;</font><font>Math</font>.<font color="#660066">random</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">-</font>&nbsp;min&nbsp;<font color="#339933">+</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;min<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;RandMass<font color="#009900">&#40;</font>length<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;length<font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;Random<font color="#009900">&#40;</font>min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;A<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_11_MinValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_11_MaxValue&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;L<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_8_9_ex_11_L&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">/*&nbsp;Самый&nbsp;простои&nbsp;и&nbsp;короткий)</font></li><li><font color="#006600">var&nbsp;A&nbsp;=&nbsp;&nbsp;RandMass(L,&nbsp;min,&nbsp;max);</font></li><li><font color="#006600">console.log(A);</font></li><li><font color="#006600">&nbsp;</font></li><li><font color="#006600">console.log(&quot;Максимальное&nbsp;число&nbsp;массива:&nbsp;&quot;);</font></li><li><font color="#006600">console.log(Math.max.apply(null,&nbsp;A));</font></li><li><font color="#006600">console.log(&quot;Минимальное&nbsp;число&nbsp;массива:&nbsp;&quot;);</font></li><li><font color="#006600">console.log(Math.min.apply(null,&nbsp;A));</font></li><li><font color="#006600">*/</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;RandMass<font color="#009900">&#40;</font>L<font color="#339933">,</font>&nbsp;min<font color="#339933">,</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">-</font><font color="#003366">Infinity</font><font color="#339933">,</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;<font color="#003366">Infinity</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>A<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>min&nbsp;<font color="#339933">&gt;</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">&amp;&amp;</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;min&nbsp;<font color="#339933">=</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>max&nbsp;<font color="#339933">&lt;</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">&amp;&amp;</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">&gt;</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Минимальное&nbsp;число&nbsp;массива:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;min<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Максимальное&nbsp;число&nbsp;массива:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td><h4><b2>Размер массива</b2></h4></td>\
                            <td><input type="number" value="10" class="input_vvod2" id="id_lab_8_9_ex_11_L"></td></tr>\
                        <tr><td><h4><b2>Min</b2></h4></td>\
                            <td><input type="number" value="-100" class="input_vvod2" id="id_lab_8_9_ex_11_MinValue"></td></tr>\
                        <tr><td><h4><b2>Max</b2></h4></td>\
                            <td><input type="number" value="100" class="input_vvod2" id="id_lab_8_9_ex_11_MaxValue"></td></tr>\
                    </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_8_9_ex_11()">'
        
    }

    
    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}

function lab_8_9_ex_4()
{
    var min = +document.getElementById("id_lab_8_9_ex_4_MinValue").value;
    var max = +document.getElementById("id_lab_8_9_ex_4_MaxValue").value;

    var A = RandMass(5, min, max)

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Прямой&nbsp;порядок:</li><li>'+ A[0] +'</li><li>'+ A[1] +'</li><li>'+ A[2] +'</li><li>'+ A[3] +'</li><li>'+ A[4] +'</li><li>&nbsp;</li><li>Обратный&nbsp;порядок:</li><li>'+ A[4] +'</li><li>'+ A[3] +'</li><li>'+ A[2] +'</li><li>'+ A[1] +'</li><li>'+ A[0] +'</li></ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_8_9_ex_5()
{
    var N0 = +document.getElementById("id_lab_8_9_ex_5_N0").value;
    var N1 = +document.getElementById("id_lab_8_9_ex_5_N1").value;
    var N2 = +document.getElementById("id_lab_8_9_ex_5_N2").value;
    var N3 = +document.getElementById("id_lab_8_9_ex_5_N3").value;
    var N4 = +document.getElementById("id_lab_8_9_ex_5_N4").value;

    var n = N0 + N1 + N2 + N3 + N4;

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>arr[0]&nbsp;=&nbsp;'+ N0 +'</li><li>arr[1]&nbsp;=&nbsp;'+ N1 +'</li><li>arr[2]&nbsp;=&nbsp;'+ N2 +'</li><li>arr[3]&nbsp;=&nbsp;'+ N3 +'</li><li>arr[4]&nbsp;=&nbsp;'+ N4 +'</li><li>&nbsp;</li><li>Сумма&nbsp;чисел:&nbsp;'+ n +'</li></ol></blockquote>'

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_8_9_ex_6()
{
    var arr = [];
    var P = 1;
    var L= +document.getElementById("id_lab_8_9_ex_6_L").value;
    var strr = ''
    
    for (var i = 0; i < L; i++) {
        arr[i] = +prompt("Введите arr[" + i + "]: ");
        P *= arr[i];
        strr += '<li>arr['+ i +']&nbsp;=&nbsp;'+ arr[i] +'</li>'
    }

    str2 = '<blockquote align="left" class="prer unselectable"><ol>'+ strr +'<li>&nbsp;</li><li>Произведение&nbsp;чисел:&nbsp;'+ P +'</li></ol></blockquote>'
    

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_8_9_ex_7()
{
    var min = +document.getElementById("id_lab_8_9_ex_7_MinValue").value;
    var max = +document.getElementById("id_lab_8_9_ex_7_MaxValue").value;
    var L= +document.getElementById("id_lab_8_9_ex_7_L").value;

    var A = RandMass(L, min, max);
    var n = 0, x = 0;

    for (var i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            n += A[i];
            x++;
        }
    }
    n = n / x;
    n = n.toFixed(2)
   

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>['+ A +']</li><li>&nbsp;</li><li>Среднее&nbsp;арифметическое&nbsp;отрицательных&nbsp;элементов&nbsp;</li><li>'+ n +'</li></ol></blockquote>'

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_8_9_ex_8()
{
    var min = +document.getElementById("id_lab_8_9_ex_8_MinValue").value;
    var max = +document.getElementById("id_lab_8_9_ex_8_MaxValue").value;
    var L= +document.getElementById("id_lab_8_9_ex_8_L").value;
    var key= +document.getElementById("id_lab_8_9_ex_8_key").value;

    var strr = '';
    var arr = [], y = [], n = 0;
    arr = RandMass(L, min, max);

    for (var i = 0; i < L; i++) {
        if (arr[i] == key) {
            y[n] = i;
            n++;
        }
        strr += '<li>arr['+ i +']&nbsp;=&nbsp;'+ arr[i] +'</li>'
    }

    str2 = '<blockquote align="left" class="prer unselectable"><ol>'+ strr +'<li>&nbsp;</li><li>Индексы&nbsp;в&nbsp;которых&nbsp;находятся&nbsp;искомое&nbsp;&quot;число&quot;</li><li>'+ y +'</li></ol></blockquote>'

    console.log('Индексы в которых находятся слово "key": ' + y);

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_8_9_ex_9()
{
    var min = +document.getElementById("id_lab_8_9_ex_9_MinValue").value;
    var max = +document.getElementById("id_lab_8_9_ex_9_MaxValue").value;
    var L= +document.getElementById("id_lab_8_9_ex_9_L").value;
    
    var A = RandMass(L, min, max)
    var i1 = 0; i2 = 0, X = [], Y = [];
    console.log(A);
    
    for (var i = 0; i < A.length; i++) {
        if (A[i] > 0) { X[i1] = A[i]; i1++; }
        if (A[i] < 0) { Y[i2] = A[i]; i2++; }
    }

    str2 ='<blockquote align="left" class="prer unselectable"><ol><li>['+ A +']</li><li>&nbsp;</li><li>Положительный&nbsp;массив:</li><li>['+ X +']</li><li>&nbsp;</li><li>Отрицательный&nbsp;массив:</li><li>['+ Y +']</li></ol></blockquote>'
    
    console.log("Положительный массив: " + X);
    console.log("Отрицательный массив: " + Y);

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_8_9_ex_10()
{
    var min = +document.getElementById("id_lab_8_9_ex_10_MinValue").value;
    var max = +document.getElementById("id_lab_8_9_ex_10_MaxValue").value;
    var L= +document.getElementById("id_lab_8_9_ex_10_L").value;

    var B = [], C = [];
    var A = RandMass(L, min, max)

    for (var i = 0; i < L; i++) {
        B[i] = +prompt("Введите arr[" + i + "]: ");
        C[i] = A[i] + B[i];
    }

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Рандомный&nbsp;массив:</li><li>['+ A +']</li><li>&nbsp;</li><li>Пользовательский&nbsp;массив:</li><li>['+ B +']</li><li>&nbsp;</li><li>Итоговый&nbsp;массив:</li><li>['+ C +']</li></ol></blockquote>'

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_8_9_ex_11()
{
    var min = +document.getElementById("id_lab_8_9_ex_11_MinValue").value;
    var max = +document.getElementById("id_lab_8_9_ex_11_MaxValue").value;
    var L= +document.getElementById("id_lab_8_9_ex_11_L").value;
    
    var A = RandMass(L, min, max);
    
    var M0 = Math.max.apply(null, A);
    var M1 = Math.min.apply(null, A);

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>['+ A +']</li><li><li>Максимальное&nbsp;число&nbsp;массива:</li><li>'+ M0 +'</li><li>&nbsp;</li><li>Минимальное&nbsp;число&nbsp;массива:</li><li>'+ M1 +'</li></ol></blockquote>'

    document.getElementById("id_labs_out").innerHTML = str2;
}


