function upd_lab_13_code(Lab_ex_N){
    
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: Работа с объектами в JavaScript</b2>';
    var str5='<b2>Цель занятия: исследовать возможности использования объектов в JavaScript</b2>';
    
    var str='';
    var str2= strd;


    if (Lab_ex_N == 1)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;user&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;name<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Vasya&quot;</font><font color="#339933">,</font>&nbsp;age<font color="#339933">:</font>&nbsp;<font color="#CC0000">17</font>&nbsp;<font color="#009900">&#125;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;в&nbsp;переменной&nbsp;-&nbsp;ссылка</font></li><li><font color="#000066">var</font>&nbsp;admin&nbsp;<font color="#339933">=</font>&nbsp;user<font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;скопировали&nbsp;ссылку&nbsp;в&nbsp;admin&nbsp;</font></li><li>admin.<font color="#660066">name</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Petya&quot;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>user.<font color="#660066">name</font><font color="#009900">&#41;</font><font color="#006600">//Выведет&nbsp;Petya&nbsp;</font></li><li><font color="#006600">//(т.к.&nbsp;объект&nbsp;user&nbsp;скреплён&nbsp;ссылкой&nbsp;с&nbsp;объектом&nbsp;admin)</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Petya</li></ol></blockquote>';
    }

    
    if (Lab_ex_N == 2)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;user&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;name<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Vasya&quot;</font><font color="#339933">,</font>&nbsp;age<font color="#339933">:</font>&nbsp;<font color="#CC0000">17</font>&nbsp;<font color="#009900">&#125;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;userClone&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font><font color="#009900">&#125;</font><font color="#339933">;</font></li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;key&nbsp;<font color="#000066">in</font>&nbsp;user<font color="#009900">&#41;</font></li><li><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;userClone<font color="#009900">&#91;</font>key<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;user<font color="#009900">&#91;</font>key<font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>userClone.<font color="#660066">name</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Petya&quot;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>user.<font color="#660066">name</font><font color="#009900">&#41;</font><font color="#006600">//Выведет&nbsp;Vasya</font></li><li><font color="#006600">//(т.к.&nbsp;мы&nbsp;создали&nbsp;новый&nbsp;независимый&nbsp;объект&nbsp;userClone)</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Vasya</li></ol></blockquote>';
    }

    if (Lab_ex_N == 3)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;A&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;sum&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li>&nbsp;</li><li>while&nbsp;<font color="#009900">&#40;</font><font color="#003366">true</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>prompt<font color="#009900">&#40;</font><font color="#3366CC">&quot;Введите&nbsp;число&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;&quot;</font><font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#3366CC">&quot;&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;<font color="#000066">break</font><font color="#339933">;</font><font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;i<font color="#339933">++;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;A.<font color="#660066">length</font>&nbsp;<font color="#339933">-</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<font color="#339933">+=</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font>&nbsp;</li><li><font color="#009900">&#125;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Сумма&nbsp;всех&nbsp;элементов&nbsp;массива&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;sum<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<input type="button" value="Запустить код!" onclick="lab_13_ex_3()">'
   
    }

    if (Lab_ex_N == 4)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">12</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">12</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">45</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;Arr&nbsp;<font color="#339933">=</font>&nbsp;arr<font color="#339933">;</font></li><li>Arr<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">1000</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>Arr<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>arr<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font><font color="#006600">//Выведет&nbsp;1000&nbsp;</font></li><li><font color="#006600">//(т.к.&nbsp;массив&nbsp;Arr&nbsp;скреплён&nbsp;ссылкой&nbsp;с&nbsp;массивом&nbsp;arr)</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>1000</li><li>1000</li></ol></blockquote>';
    }

    if (Lab_ex_N == 5)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">12</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">12</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">45</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;Arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;arr.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>Arr<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">1000</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>Arr<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>arr<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font><font color="#006600">//Выведет&nbsp;45</font></li><li><font color="#006600">//(т.к.&nbsp;мы&nbsp;создали&nbsp;новый&nbsp;независимый&nbsp;массив&nbsp;Arr&nbsp;и&nbsp;заполнили&nbsp;элементами&nbsp;из&nbsp;arr)</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>1000</li><li>45</li></ol></blockquote>';
    }

    if (Lab_ex_N == 6)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">12</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">12</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">45</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;Arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;</font>&nbsp;arr.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;arr<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>Arr<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">1000</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>Arr<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>arr<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#009900">&#41;</font><font color="#339933">;</font><font color="#006600">//Выведет&nbsp;45</font></li><li><font color="#006600">//(т.к.&nbsp;мы&nbsp;создали&nbsp;новый&nbsp;независимый&nbsp;массив&nbsp;Arr&nbsp;и&nbsp;заполнили&nbsp;элементами&nbsp;из&nbsp;arr)</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>Имя вкладчика</b2></h4></td>\
                        <td><input type="text" value="Роман" class="input_vvod" id="id_lab_13_ex_6_name"></td></tr>\
                    <tr><td><h4><b2>Размер вклада в руб</b2></h4></td>\
                        <td><input type="number" value="5000" class="input_vvod" id="id_lab_13_ex_6_N"></td></tr>\
                    <tr><td><h4><b2>срок (колличество месяцев)</b2></h4></td>\
                        <td><input type="number" value="3" class="input_vvod" id="id_lab_13_ex_6_M"></td></tr>\
                    </tbody>\
                 </table>\
							<input type="button" value="Запустить код!" onclick="lab_13_ex_6()">'
    }


    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}

function lab_13_ex_3()
{
    
    var A = [], sum = 0, i = 0;

    while (true) {
        A[i] = +prompt('Введите число', '')
        if (A[i] == '') { break;}
        i++;
    }

    for (var i = 0; i < A.length - 1; i++) {
        sum += A[i]; 
    }
    

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>['+ A +']</li><li>Сумма&nbsp;всех&nbsp;элементов&nbsp;массива&nbsp;=&nbsp;'+ sum +'</li></ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_13_ex_6()
{
    var bankUser = {
        "доход": function () {
            if ((bankUser['размер вклада в руб.'] >= 100) &&
                (bankUser['размер вклада в руб.'] <= 10000) &&
                (bankUser.срок >= 1) &&
                (bankUser.срок <= 12)) {
                //12% годовых (Я сделаю на месячную капитализацию)
                var rvklada2 = bankUser['размер вклада в руб.'];
    
                for (var i = 0; i < bankUser.срок; i++) {
                    rvklada2 *= 1.01;
                }
                return (rvklada2 - bankUser['размер вклада в руб.']).toFixed(2);
            } else
            {
                if ((bankUser['размер вклада в руб.'] > 10000) &&
                    (bankUser.срок >= 12) &&
                    (bankUser.срок <= 36)) {
                    //22% годовых (Я сделаю на месячную капитализацию)
                    var rvklada2 = bankUser['размер вклада в руб.'];
    
                    for (var i = 0; i < bankUser.срок; i++) {
                        rvklada2 *= 1.0183;
                    }
                    return (rvklada2 - bankUser['размер вклада в руб.']).toFixed(2);
                }
            }
            
        }
    };
    
    bankUser['имя вкладчика'] = document.getElementById("id_lab_13_ex_6_name").value;
    bankUser['размер вклада в руб.'] = +document.getElementById("id_lab_13_ex_6_N").value;
    bankUser.срок = +document.getElementById("id_lab_13_ex_6_M").value;
    
    var bankUserCopy = bankUser;
    var bankUserClone = {};
    for (var key in bankUser) { bankUserClone[key] = bankUser[key]; }
    bankUser['имя вкладчика'] = 'Роман'
    
    
    console.log(bankUser);
    console.log(bankUserCopy);
    console.log(bankUserClone);
    console.log("Если хотим получить (Доход) то прописываем: ")
    console.log("console.log(bankUser.доход())")
    console.log(bankUser.доход());

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>{доход:&nbsp;ƒ,&nbsp;имя&nbsp;вкладчика:&nbsp;&quot;'+ bankUser['имя вкладчика'] +'&quot;,&nbsp;размер&nbsp;вклада&nbsp;в&nbsp;руб.:&nbsp;'+ bankUser['размер вклада в руб.'] +',&nbsp;срок:&nbsp;'+ bankUser.срок +'}</li><li>{доход:&nbsp;ƒ,&nbsp;имя&nbsp;вкладчика:&nbsp;&quot;'+ bankUser['имя вкладчика'] +'&quot;,&nbsp;размер&nbsp;вклада&nbsp;в&nbsp;руб.:&nbsp;'+ bankUser['размер вклада в руб.'] +',&nbsp;срок:&nbsp;'+ bankUser.срок +'}</li><li>{доход:&nbsp;ƒ,&nbsp;имя&nbsp;вкладчика:&nbsp;&quot;'+ bankUserClone['имя вкладчика'] +'&quot;,&nbsp;размер&nbsp;вклада&nbsp;в&nbsp;руб.:&nbsp;'+ bankUser['размер вклада в руб.'] +',&nbsp;срок:&nbsp;'+ bankUser.срок +'}</li><li>&nbsp;</li><li>Если&nbsp;хотим&nbsp;получить&nbsp;(Доход)&nbsp;то&nbsp;прописываем:&nbsp;</li><li>console.log(bankUser.доход())</li><li>'+ bankUser.доход() +'</li></ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}

