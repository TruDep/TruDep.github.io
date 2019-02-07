function upd_lab_10_code(Lab_ex_N){
    
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: Язык JavaScript: операторы цикла</b2>';
    var str5='<b2>Цель занятия: изучить операторы цикла предусловием и с постусловием в JavaScript</b2>';
    
    var str='';
    var str2= strd;


    if (Lab_ex_N == 1)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//&nbsp;Вариант&nbsp;на&nbsp;for</font></li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">3</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;число&nbsp;i&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;i<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#006600">//&nbsp;Вариант&nbsp;на&nbsp;while&nbsp;</font></li><li><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>while&nbsp;<font color="#009900">&#40;</font>i<font color="#339933">&lt;</font><font color="#CC0000">3</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;число&nbsp;i&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;i<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;i<font color="#339933">++;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>число&nbsp;i&nbsp;=&nbsp;0</li><li>число&nbsp;i&nbsp;=&nbsp;1</li><li>число&nbsp;i&nbsp;=&nbsp;2</li></ol></blockquote>'

    }

    
    if (Lab_ex_N == 2)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li>a&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">100</font><font color="#339933">;</font></li><li>while&nbsp;<font color="#009900">&#40;</font>a<font color="#339933">&gt;=</font><font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Число:&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;a<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;<font color="#339933">-=</font>&nbsp;<font color="#CC0000">20</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Число:100</li><li>Число:80</li><li>Число:60</li><li>Число:40</li><li>Число:20</li><li>Число:0</li></ol></blockquote>';
        
    }

    if (Lab_ex_N == 3)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//Введите&nbsp;последовательность&nbsp;чисел,&nbsp;заканчивающиеся&nbsp;нулем</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;sum&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>while&nbsp;<font color="#009900">&#40;</font><font color="#003366">true</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>prompt<font color="#009900">&#40;</font><font color="#3366CC">&quot;Введите&nbsp;число&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<font color="#339933">+=</font>&nbsp;a<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>a&nbsp;<font color="#339933">==</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;<font color="#000066">break</font><font color="#339933">;</font><font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Сумма&nbsp;элементов:&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;sum<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<input type="button" value="Запустить код!" onclick="lab_10_ex_3()">'
   
    }

    if (Lab_ex_N == 4)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">11</font><font color="#339933">;</font></li><li>while&nbsp;<font color="#009900">&#40;</font>i<font color="#339933">&lt;=</font><font color="#CC0000">16</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font>i<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;i<font color="#339933">++;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li></ol></blockquote>';
     
    }

    if (Lab_ex_N == 5)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">11</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;=</font>&nbsp;<font color="#CC0000">16</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font>i<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li></ol></blockquote>';
        
    }

    if (Lab_ex_N == 6)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;val<font color="#339933">=</font><font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;s<font color="#339933">=</font><font color="#CC0000">0</font><font color="#339933">;</font></li><li><font color="#000066">do</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;val&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>prompt<font color="#009900">&#40;</font><font color="#3366CC">&quot;Введите&nbsp;число&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;s&nbsp;<font color="#339933">+=</font>&nbsp;val<font color="#339933">**</font><font color="#CC0000">2</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>while&nbsp;<font color="#009900">&#40;</font>s&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">100</font><font color="#009900">&#41;</font></li><li><font color="#006600">//Завершить&nbsp;программу,&nbsp;когда&nbsp;сумма&nbsp;превысит&nbsp;значение&nbsp;100</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;s&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;s<font color="#009900">&#41;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<input type="button" value="Запустить код!" onclick="lab_10_ex_6()">'
        
    }

    if (Lab_ex_N == 7)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;val&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;s&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li><font color="#000066">do</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;val&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>prompt<font color="#009900">&#40;</font><font color="#3366CC">&quot;Введите&nbsp;число&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>val&nbsp;<font color="#339933">&gt;</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s&nbsp;<font color="#339933">+=</font>&nbsp;val&nbsp;<font color="#339933">+</font>&nbsp;val<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>val&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s&nbsp;<font color="#339933">+=</font>&nbsp;val&nbsp;<font color="#339933">*</font>&nbsp;val<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li>while&nbsp;<font color="#009900">&#40;</font>s&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">100</font><font color="#009900">&#41;</font></li><li><font color="#006600">//Завершить&nbsp;программу,&nbsp;когда&nbsp;сумма&nbsp;превысит&nbsp;значение&nbsp;100</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;s&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;s<font color="#009900">&#41;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<input type="button" value="Запустить код!" onclick="lab_10_ex_7()">'
        
    }

   

    
    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}

function lab_10_ex_3()
{
    var sum = 0;
    while (true) {
        a = +prompt("Введите число");
        sum += a;
        if (a == 0) { break;}
    }

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Сумма&nbsp;элементов:&nbsp;'+ sum +'</li></ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_10_ex_6()
{
    var val=0, s=0;
    do {
        val = +prompt("Введите число");
        s += val**2;
    }
    while (s < 100)

    console.log("s = " + s)

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>s&nbsp;=&nbsp;'+ s +'</li></ol></blockquote>'

    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_10_ex_7()
{
    var val = 0, s = 0;
    do {
        val = +prompt("Введите число");
        if (val > 0) {
            s += val + val;
        }
        if (val < 0) {
            s += val * val;
        }
    }
    while (s < 100)

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>s&nbsp;=&nbsp;'+ s +'</li></ol></blockquote>'

    document.getElementById("id_labs_out").innerHTML = str2;
}

