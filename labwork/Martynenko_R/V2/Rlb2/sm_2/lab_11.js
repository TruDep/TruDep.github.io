function upd_lab_11_code(Lab_ex_N){
    
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: Функции JavaScript. Логические операторы</b2>';
    var str5='<b2>Цель занятия: закрепить написание скриптов с функциями</b2>';
    
    var str='';
    var str2= strd;


    if (Lab_ex_N == 1)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;Sum<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>prompt<font color="#009900">&#40;</font><font color="#3366CC">&quot;Введите&nbsp;1&nbsp;число&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;B&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>prompt<font color="#009900">&#40;</font><font color="#3366CC">&quot;Введите&nbsp;2&nbsp;число&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;alert<font color="#009900">&#40;</font>A&nbsp;<font color="#339933">+</font>&nbsp;B<font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<input type="button" value="Запустить код!" onclick="lab_11_ex_1()">'
    }

    
    if (Lab_ex_N == 2)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;twoPow<font color="#009900">&#40;</font>A<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;alert<font color="#009900">&#40;</font>A<font color="#339933">**</font><font color="#CC0000">2</font><font color="#009900">&#41;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<input type="button" value="Запустить код!" onclick="lab_11_ex_2()">'
    }

    if (Lab_ex_N == 3)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;averageArr<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">4</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">6</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">8</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">10</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;arr.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;A&nbsp;<font color="#339933">+=</font>&nbsp;arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;alert<font color="#009900">&#40;</font>A&nbsp;<font color="#339933">/</font>&nbsp;<font color="#009900">&#40;</font>arr.<font color="#660066">length</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<input type="button" value="Запустить код!" onclick="lab_11_ex_3()">'
   
    }

    if (Lab_ex_N == 4)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;ex4<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>prompt<font color="#009900">&#40;</font><font color="#3366CC">&quot;Введите&nbsp;возраст&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#40;</font>A&nbsp;<font color="#339933">&gt;=</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">&amp;&amp;</font>&nbsp;<font color="#009900">&#40;</font>A&nbsp;<font color="#339933">&lt;=</font>&nbsp;<font color="#CC0000">13</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert<font color="#009900">&#40;</font><font color="#3366CC">&quot;Возрастная&nbsp;категория&nbsp;=&nbsp;детство&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#40;</font>A&nbsp;<font color="#339933">&gt;=</font>&nbsp;<font color="#CC0000">14</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">&amp;&amp;</font>&nbsp;<font color="#009900">&#40;</font>A&nbsp;<font color="#339933">&lt;=</font>&nbsp;<font color="#CC0000">25</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert<font color="#009900">&#40;</font><font color="#3366CC">&quot;Возрастная&nbsp;категория&nbsp;=&nbsp;юность&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#40;</font>A&nbsp;<font color="#339933">&gt;=</font>&nbsp;<font color="#CC0000">26</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">&amp;&amp;</font>&nbsp;<font color="#009900">&#40;</font>A&nbsp;<font color="#339933">&lt;=</font>&nbsp;<font color="#CC0000">69</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert<font color="#009900">&#40;</font><font color="#3366CC">&quot;Возрастная&nbsp;категория&nbsp;=&nbsp;зрелость&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#40;</font>A&nbsp;<font color="#339933">&gt;=</font>&nbsp;<font color="#CC0000">70</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert<font color="#009900">&#40;</font><font color="#3366CC">&quot;Возрастная&nbsp;категория&nbsp;=&nbsp;старость&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<input type="button" value="Запустить код!" onclick="lab_11_ex_4()">'
    }

    if (Lab_ex_N == 5)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;maxArr<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#339933">-</font><font color="#CC0000">2</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">4</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">216</font><font color="#339933">,</font>&nbsp;<font color="#339933">-</font><font color="#CC0000">8</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">10</font><font color="#339933">,</font>&nbsp;<font color="#339933">-</font><font color="#CC0000">114</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">14</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">-</font><font color="#003366">Infinity</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;arr.<font color="#660066">length</font>&nbsp;<font color="#339933">-</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#40;</font>arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">&gt;=</font>&nbsp;<font color="#339933">-</font><font color="#CC0000">10</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">&amp;&amp;</font>&nbsp;<font color="#009900">&#40;</font>arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">&lt;=</font>&nbsp;<font color="#CC0000">10</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">&amp;&amp;</font>&nbsp;<font color="#009900">&#40;</font>arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">&gt;</font>&nbsp;max<font color="#009900">&#41;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;max&nbsp;<font color="#339933">=</font>&nbsp;arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font><font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;alert<font color="#009900">&#40;</font><font color="#3366CC">&quot;Максимальное&nbsp;значение&nbsp;массива&nbsp;(от&nbsp;-10&nbsp;до&nbsp;10)&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;max<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<input type="button" value="Запустить код!" onclick="lab_11_ex_5()">'
    }

    if (Lab_ex_N == 6)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;s_time&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;S_time&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;l_time&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;L_time&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;p_time&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;P_time&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;para2&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;2_para&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;s_hm&nbsp;<font color="#339933">=</font>&nbsp;s_time.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;:&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//массив&nbsp;часов&nbsp;и&nbsp;минут</font></li><li><font color="#000066">var</font>&nbsp;l_hm&nbsp;<font color="#339933">=</font>&nbsp;l_time.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;:&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//массив&nbsp;часов&nbsp;и&nbsp;минут</font></li><li><font color="#000066">var</font>&nbsp;p_hm&nbsp;<font color="#339933">=</font>&nbsp;p_time.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;:&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//массив&nbsp;часов&nbsp;и&nbsp;минут</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;T&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>&nbsp;</li><li>T<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>s_hm<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font></li><li>T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>s_hm<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Расписание:&quot;</font><font color="#009900">&#41;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>T<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font></li><li>&nbsp;</li><li>while<font color="#009900">&#40;</font><font color="#CC0000">1</font><font color="#009900">&#41;</font></li><li><font color="#009900">&#123;</font>&nbsp;&nbsp;&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font><font color="#009900">&#40;</font><font color="#339933">+</font>T<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">&gt;=</font>&nbsp;<font color="#CC0000">20</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font><font color="#000066">break</font><font color="#339933">;</font><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;str2&nbsp;<font color="#339933">=</font>&nbsp;T<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">+</font><font color="#3366CC">&quot;:&quot;</font><font color="#339933">+</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#40;</font>T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">10</font><font color="#009900">&#41;</font><font color="#339933">?</font><font color="#3366CC">&quot;0&quot;</font><font color="#339933">+</font>T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">:</font>T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">+</font><font color="#3366CC">&quot;&nbsp;-&nbsp;&quot;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;T<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">+=</font>&nbsp;<font color="#339933">+</font>l_hm&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">+=</font>&nbsp;<font color="#339933">+</font>l_hm&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font><font color="#009900">&#40;</font>T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">&gt;=</font>&nbsp;<font color="#CC0000">60</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>T<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font><font color="#339933">++;</font>&nbsp;T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">-=</font>&nbsp;<font color="#CC0000">60</font><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;str2&nbsp;<font color="#339933">+=</font>&nbsp;T<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">+</font><font color="#3366CC">&quot;:&quot;</font><font color="#339933">+</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#40;</font>T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">10</font><font color="#009900">&#41;</font><font color="#339933">?</font><font color="#3366CC">&quot;0&quot;</font><font color="#339933">+</font>T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">:</font>T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font>str2<font color="#009900">&#41;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font><font color="#009900">&#40;</font>para2&nbsp;<font color="#339933">==</font>&nbsp;<font color="#CC0000">1</font>&nbsp;<font color="#339933">&amp;&amp;</font>&nbsp;i<font color="#339933">==</font><font color="#CC0000">1</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">+=</font>&nbsp;<font color="#CC0000">20</font><font color="#339933">;</font><font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">else</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">+=</font>&nbsp;<font color="#339933">+</font>p_hm<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font><font color="#339933">;</font>&nbsp;&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">+=</font>&nbsp;<font color="#339933">+</font>p_hm<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font><font color="#009900">&#40;</font>T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">&gt;=</font>&nbsp;<font color="#CC0000">60</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>T<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font><font color="#339933">++;</font>&nbsp;T<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">-=</font>&nbsp;<font color="#CC0000">60</font><font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;i<font color="#339933">++;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                    <tbody>\
                        <tr><td align="left"><h4><b2>Начало</b2></h4></td>\
                            <td><input type="time" value="08:00" class="input_vvod" id="S_time"></td></tr>\
                        <tr><td align="left"><h4><b2>Продолжительнось</b2></h4></td>\
                            <td><input type="time" value="01:30" class="input_vvod" id="L_time"></td></tr>\
                        <tr><td align="left"><h4><b2>Перерыв</b2></h4></td>\
                            <td><input type="time" value="00:10" class="input_vvod" id="P_time"></td></tr>\
                        <tr><td align="left"><h4><b2>2 перерыв</b2></h4></td>\
                            <td><div><input type="checkbox" id="2_para" name="2_para">\
                            <label for="2_para">20 мин</label></div></td></tr>\
                        </tbody>\
                </table>\
                <input type="button" value="Запустить код!" onclick="lab_11_ex_6()">'
    }


    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}

function lab_11_ex_1()
{
    
    var A = +prompt("Введите 1 число", "");
    var B = +prompt("Введите 2 число", "");

    //alert(A + B)
    var C = A + B
    

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>'+ A +'&nbsp;+&nbsp;'+ B +'&nbsp;=&nbsp;'+ C +'</li></ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_11_ex_2()
{
    var A = +prompt("Введите число", "");

    //alert(A + B)
    var C = A**2;

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>'+ A +'²&nbsp;=&nbsp;'+ C +'</li></ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_11_ex_3()
{
    var arr = [2, 4, 6, 8, 10];
    var A = 0;

    for (var i = 0; i < arr.length; i++) { A += arr[i];}

    var C = A / (arr.length)

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Среднее&nbsp;арифметическое&nbsp;=&nbsp;'+ C +'</li></ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_11_ex_4()
{
    A = +prompt("Введите возраст", "");
 
    if ((A >= 1) && (A <= 13)) {
        alert("Возрастная категория = детство");
    }
    if ((A >= 14) && (A <= 25)) {
        alert("Возрастная категория = юность");
    }
    if ((A >= 26) && (A <= 69)) {
        alert("Возрастная категория = зрелость");
    }
    if ((A >= 70)) {
        alert("Возрастная категория = старость");
    }
}

function lab_11_ex_5()
{
    var arr = [-2, 4, 216, -8, 10, -114, 14, 1], max = -Infinity;

    for (var i = 0; i < arr.length - 1; i++)
    {
        if ((arr[i] >= -10) && (arr[i] <= 10) && (arr[i] > max)) { max = arr[i];}
    }

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Максимальное&nbsp;значение&nbsp;массива&nbsp;(от&nbsp;-10&nbsp;до&nbsp;10)&nbsp;=&nbsp;'+ max +'</li></ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}


function lab_11_ex_6()
{
    var s_time = document.getElementById("S_time").value;
    var l_time = document.getElementById("L_time").value;
    var p_time = document.getElementById("P_time").value;
    var para2 = +document.getElementById("2_para").checked;

    var s_hm = s_time.split(':'); //массив часов и минут
    var l_hm = l_time.split(':'); //массив часов и минут
    var p_hm = p_time.split(':'); //массив часов и минут

    var T = [];
    var i = 0;

    T[0] = +s_hm[0]
    T[1] = +s_hm[1]

    str2 = '<blockquote class="prer unselectable"><ol><li>Расписание:</li>'

    console.log(T[0] + ' : ' + T[1])

    while(1)
    {   
        if(+T[0] >= 20){break;}

        str2 += '<li>'+ T[0] +':'+ ((T[1] < 10)?'0'+T[1]:T[1]) +'&nbsp;-&nbsp;'
        
        T[0] += +l_hm [0];
        T[1] += +l_hm [1];

        if(T[1] >= 60){T[0]++; T[1] -= 60}


        str2 += T[0] +':'+ ((T[1] < 10)?'0'+T[1]:T[1]) +'</li>'

        console.log(T[0] + ' : ' + T[1])

        if(para2 == 1 && i==1){T[1] += 20;}
            else{
                T[0] += +p_hm[0];  
                T[1] += +p_hm[1];
            }

        if(T[1] >= 60){T[0]++; T[1] -= 60}


        i++;
        
    }

    str2 += '</ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}
