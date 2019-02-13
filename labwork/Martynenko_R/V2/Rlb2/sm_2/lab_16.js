function upd_lab_16_code(Lab_ex_N){
    
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: объявления переменных</b2>';
    var str5='<b2>Цель занятия: изучить способы объявления переменных</b2>';
    
    var str='';
    var str2= strd;


    if (Lab_ex_N == 1)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;login&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;user&quot;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>window.<font color="#660066">login</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//user</font></li><li><font color="#006600">//&nbsp;т.к.&nbsp;window.login&nbsp;и&nbsp;переменная&nbsp;login&nbsp;одно&nbsp;и&nbsp;тоже</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;login&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;user&quot;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>window.<font color="#660066">user</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//undefined</font></li><li><font color="#006600">//&nbsp;т.к.&nbsp;присваивание&nbsp;ещё&nbsp;не&nbsp;выполнено,&nbsp;но&nbsp;свойство&nbsp;с&nbsp;именем&nbsp;user&nbsp;в&nbsp;объекте&nbsp;window&nbsp;уже&nbsp;существует</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;login&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;user&quot;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>window<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//Window очень&nbsp;большой&nbsp;объект&nbsp;который&nbsp;хранит&nbsp;в&nbsp;себе&nbsp;множество&nbsp;объектов&nbsp;текущей&nbsp;открытой&nbsp;страницы</font></li><li>&nbsp;</li><li>window.<font color="#660066">login</font><font color="#339933">=</font><font color="#3366CC">&quot;user&quot;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>login<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//user</font></li><li><font color="#006600">//&nbsp;т.к.&nbsp;window.login&nbsp;и&nbsp;переменная&nbsp;login&nbsp;одно&nbsp;и&nbsp;тоже</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>user</li><li>undefined</li><li>Window {postMessage:&nbsp;ƒ,&nbsp;blur:&nbsp;ƒ,&nbsp;focus:&nbsp;ƒ,&nbsp;close:&nbsp;ƒ,&nbsp;parent:&nbsp;Window, …}</li><li>user</li></ol></blockquote>';
    }

    
    if (Lab_ex_N == 2)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//А)</font></li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font>let&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;=</font>&nbsp;<font color="#CC0000">5</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font>i<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font>let&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font>&nbsp;i&nbsp;<font color="#339933">&lt;=</font>&nbsp;<font color="#CC0000">5</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#CC0000">2</font>&nbsp;<font color="#339933">*</font>&nbsp;i<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>alert<font color="#009900">&#40;</font>i<font color="#009900">&#41;</font><font color="#339933">;</font><font color="#006600">//&nbsp;если&nbsp;мы&nbsp;хотим&nbsp;получить&nbsp;значение&nbsp;переменной&nbsp;i&nbsp;то&nbsp;надо&nbsp;заменить&nbsp;в&nbsp;циклах&nbsp;let&nbsp;на&nbsp;var</font></li><li>&nbsp;</li><li><font color="#006600">//В)</font></li><li><font color="#000066">var</font>&nbsp;num&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">10</font><font color="#339933">;</font></li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font><font color="#003366">true</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;num&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">50</font><font color="#339933">;</font><font color="#006600">//заменяем&nbsp;var&nbsp;на&nbsp;let</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;alert<font color="#009900">&#40;</font>num<font color="#009900">&#41;</font><font color="#339933">;</font><font color="#006600">//если&nbsp;мы&nbsp;хотим&nbsp;получить&nbsp;50&nbsp;в&nbsp;1&nbsp;alert,&nbsp;а&nbsp;во&nbsp;втором&nbsp;10,&nbsp;то&nbsp;заменяем&nbsp;var&nbsp;на&nbsp;let</font></li><li><font color="#009900">&#125;</font></li><li>alert<font color="#009900">&#40;</font>num<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">//С)</font></li><li><font color="#000066">var</font>&nbsp;num&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">10</font><font color="#339933">;</font></li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font><font color="#003366">true</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;num&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">50</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;alert<font color="#009900">&#40;</font>num<font color="#009900">&#41;</font><font color="#339933">;</font><font color="#006600">//&nbsp;получим&nbsp;50</font></li><li><font color="#009900">&#125;</font></li><li>alert<font color="#009900">&#40;</font>num<font color="#009900">&#41;</font><font color="#339933">;</font><font color="#006600">//получим&nbsp;10</font></li><li>&nbsp;</li><li><font color="#006600">//D)</font></li><li>let&nbsp;num&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">10</font><font color="#339933">;</font>&nbsp;<font color="#006600">//будет&nbsp;ошибка,&nbsp;т.к.&nbsp;нельзя&nbsp;использовать&nbsp;let&nbsp;в&nbsp;не&nbsp;if,&nbsp;for,&nbsp;while.....</font></li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font><font color="#003366">true</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;num&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">50</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;alert<font color="#009900">&#40;</font>num<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>alert<font color="#009900">&#40;</font>num<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
    }

    if (Lab_ex_N == 3)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">const</font>&nbsp;TEST<font color="#339933">=</font><font color="#3366CC">&quot;JavaScript&quot;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;my&nbsp;favorite&nbsp;is:&nbsp;&quot;</font><font color="#339933">+</font>&nbsp;TEST<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>TEST<font color="#339933">=</font><font color="#3366CC">&quot;C++&quot;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//Нельзя&nbsp;присвоить&nbsp;значение&nbsp;константе,&nbsp;т.к.&nbsp;константа&nbsp;не&nbsp;является&nbsp;переменной</font></li><li>&nbsp;</li><li><font color="#000066">const</font>&nbsp;TEST<font color="#339933">=</font><font color="#3366CC">&quot;&nbsp;C++&quot;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;Нельзя&nbsp;присвоить&nbsp;значение&nbsp;константе,&nbsp;т.к.&nbsp;она&nbsp;уже&nbsp;объявлена&nbsp;ранее</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;TEST<font color="#339933">=</font><font color="#3366CC">&quot;C++&quot;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//&nbsp;Нельзя&nbsp;присвоить&nbsp;значение&nbsp;перемменной,&nbsp;т.к.&nbsp;имя&nbsp;уже&nbsp;занято&nbsp;константой</font></li><li>&nbsp;</li><li>let&nbsp;TEST<font color="#339933">=</font><font color="#3366CC">&quot;C++&quot;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//&nbsp;Нельзя&nbsp;присвоить&nbsp;значение&nbsp;константе,&nbsp;т.к.&nbsp;она&nbsp;уже&nbsp;объявлена&nbsp;ранее</font></li><li>&nbsp;</li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>TEST<font color="#339933">===</font><font color="#3366CC">&quot;JavaScript&quot;</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font></li><li><font color="#000066">const</font>&nbsp;TEST<font color="#339933">=</font><font color="#3366CC">&quot;Java&quot;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;my&nbsp;favorite&nbsp;is:&nbsp;&quot;</font><font color="#339933">+</font>&nbsp;TEST<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>TEST<font color="#339933">===</font><font color="#3366CC">&quot;JavaScript&quot;</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font></li><li><font color="#000066">const</font>&nbsp;TEST<font color="#339933">=</font><font color="#3366CC">&quot;Java&quot;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;my&nbsp;favorite&nbsp;is:&nbsp;&quot;</font><font color="#339933">+</font>&nbsp;TEST<font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Now&nbsp;my&nbsp;favorite&nbsp;is:&nbsp;&quot;</font><font color="#339933">+</font>&nbsp;TEST<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">//&nbsp;const&nbsp;работает&nbsp;с&nbsp;объектами</font></li><li><font color="#000066">const</font>&nbsp;MY_OBJ&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font><font color="#3366CC">&quot;name&quot;</font><font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Вася&quot;</font><font color="#009900">&#125;</font><font color="#339933">;</font></li><li><font color="#006600">//&nbsp;переопределить&nbsp;ссылку&nbsp;на&nbsp;объект&nbsp;нельзя</font></li><li>MY_OBJ&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font><font color="#3366CC">&quot;fName&quot;</font><font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Вася&quot;</font><font color="#009900">&#125;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//Uncaught&nbsp;TypeError:&nbsp;Assignment&nbsp;to&nbsp;constant&nbsp;variable.</font></li><li>&nbsp;</li><li><font color="#006600">//&nbsp;НО!&nbsp;Свойства&nbsp;объекта&nbsp;изменять&nbsp;можно</font></li><li>MY_OBJ.<font color="#660066">name</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Маша&quot;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>my&nbsp;favorite&nbsp;is:&nbsp;JavaScript</li><li><font color="#b30000">ERROR:&nbsp;Uncaught&nbsp;TypeError:&nbsp;Assignment&nbsp;to&nbsp;constant&nbsp;variable.</font></li><li><font color="#b30000">ERROR:&nbsp;Uncaught&nbsp;SyntaxError:&nbsp;Identifier&nbsp;&quot;TEST&quot;&nbsp;has&nbsp;already&nbsp;been&nbsp;declared</font></li><li><font color="#b30000">ERROR:&nbsp;Uncaught&nbsp;SyntaxError:&nbsp;Identifier&nbsp;&quot;TEST&quot;&nbsp;has&nbsp;already&nbsp;been&nbsp;declared</font></li><li><font color="#b30000">ERROR:&nbsp;Uncaught&nbsp;SyntaxError:&nbsp;Identifier&nbsp;&quot;TEST&quot;&nbsp;has&nbsp;already&nbsp;been&nbsp;declared</font></li><li>my&nbsp;favorite&nbsp;is:&nbsp;Java</li><li>my&nbsp;favorite&nbsp;is:&nbsp;Java</li><li>Now&nbsp;my&nbsp;favorite&nbsp;is:&nbsp;JavaScript</li><li><font color="#b30000">ERROR:&nbsp;Uncaught&nbsp;TypeError:&nbsp;Assignment&nbsp;to&nbsp;constant&nbsp;variable.</font></li></ol></blockquote>';
    }

    if (Lab_ex_N == 4)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;phrase&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Hi&quot;</font><font color="#339933">;</font></li><li><font color="#000066">function</font>&nbsp;sayHi<font color="#009900">&#40;</font>name<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#006600">//&nbsp;LexicalEnvironment&nbsp;=&nbsp;{&nbsp;name:&nbsp;&quot;Masha&quot;,&nbsp;phrase:&nbsp;Hi&nbsp;}</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font>phrase&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;,&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;name<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//&nbsp;при&nbsp;первом&nbsp;вызове&nbsp;phrase&nbsp;=&nbsp;&quot;Hi&quot;</font></li><li><font color="#006600">//При&nbsp;2&nbsp;вызове&nbsp;функции&nbsp;phrase&nbsp;=&nbsp;&quot;Bye&quot;</font></li><li>phrase&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Bye&quot;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//&nbsp;изменяет&nbsp;значение&nbsp;phrase&nbsp;на&nbsp;Bye</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#006600">//&nbsp;LexicalEnvironment&nbsp;=&nbsp;{&nbsp;name:&nbsp;&quot;Masha&quot;,&nbsp;phrase:&nbsp;Bye&nbsp;}</font></li><li><font color="#009900">&#125;</font></li><li>sayHi<font color="#009900">&#40;</font><font color="#3366CC">&quot;Masha&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//Hi,&nbsp;Masha</font></li><li>sayHi<font color="#009900">&#40;</font><font color="#3366CC">&quot;Masha&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//Bye,&nbsp;Masha</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Hi,&nbsp;Masha</li><li>Bye,&nbsp;Masha</li></ol></blockquote>';
    }

    if (Lab_ex_N == 5)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;num&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;F1<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;</li><li><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>num&nbsp;<font color="#339933">&gt;</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;answer&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;<font color="#000066">return</font>&nbsp;<font color="#3366CC">&quot;+&quot;</font>&nbsp;<font color="#009900">&#125;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">else</font>&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>num&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;answer&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;<font color="#000066">return</font>&nbsp;<font color="#3366CC">&quot;-&quot;</font>&nbsp;<font color="#009900">&#125;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;num<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li></ol></blockquote>'
    }

    if (Lab_ex_N == 6)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;sayHi<font color="#009900">&#40;</font>fName<font color="#339933">,</font>&nbsp;lName<font color="#009900">&#41;</font>&nbsp;</li><li><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#006600">//&nbsp;LexicalEnvironment&nbsp;=&nbsp;{&nbsp;fName:&nbsp;&quot;Masha&quot;,&nbsp;lName:&nbsp;&quot;Ivanova&quot;&nbsp;}</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Hi,&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;FullName<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Bye,&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;FullName<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">function</font>&nbsp;FullName<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font><font color="#006600">//&nbsp;[[Scope]]&nbsp;-&gt;&nbsp;LexicalEnvironment&nbsp;(**)&nbsp;В&nbsp;процессе&nbsp;выполнения&nbsp;sayHi()&nbsp;создаёт&nbsp;функцию&nbsp;в&nbsp;строке&nbsp;(**).&nbsp;При&nbsp;создании&nbsp;эта&nbsp;функция&nbsp;получает&nbsp;внутреннее&nbsp;свойство&nbsp;[[Scope]]&nbsp;со&nbsp;ссылкой&nbsp;на&nbsp;текущий&nbsp;LexicalEnvironment.</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;fName&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;lName<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li>sayHi<font color="#009900">&#40;</font><font color="#3366CC">&quot;Masha&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Ivanova&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Hi,&nbsp;Masha&nbsp;Ivanova</li><li>Bye,&nbsp;Masha&nbsp;Ivanova</li></ol></blockquote>';

    }

    if (Lab_ex_N == 7)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li>Age&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_16_ex_7_Age&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;sayHi<font color="#009900">&#40;</font>fName<font color="#339933">,</font>&nbsp;lName<font color="#339933">,</font>&nbsp;age<font color="#009900">&#41;</font>&nbsp;</li><li><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>age&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">17</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Hi,&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;FullName<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">else</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Bye,&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;FullName<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">function</font>&nbsp;FullName<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;fName&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;lName<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li>sayHi<font color="#009900">&#40;</font><font color="#3366CC">&quot;Masha&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Ivanova&quot;</font><font color="#339933">,</font>&nbsp;Age<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>Имя</b2></h4></td>\
                        <td><input type="text" value="Masha" class="input_vvod" id="id_lab_16_ex_7_fName"></td></tr>\
                    <tr><td><h4><b2>Фамилия</b2></h4></td>\
                        <td><input type="text" value="Ivanova" class="input_vvod" id="id_lab_16_ex_7_lName"></td></tr>\
                    <tr><td><h4><b2>Возраст</b2></h4></td>\
                        <td><input type="number" value="17" class="input_vvod" id="id_lab_16_ex_7_Age"></td></tr>\
                    </tbody>\
                 </table>\
							<input type="button" value="Запустить код!" onclick="lab_16_ex_7()">'
    }

    if (Lab_ex_N == 8)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;Counter<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;Count&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;Count<font color="#339933">++;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">var</font>&nbsp;output&nbsp;<font color="#339933">=</font>&nbsp;Counter<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#339933">;</font><font color="#006600">//вызов&nbsp;значения&nbsp;перемененной&nbsp;как&nbsp;функции</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>output<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//1</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>output<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//2</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>output<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//3</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>1</li><li>2</li><li>3</li></ol></blockquote>';

    }


    if (Lab_ex_N == 9)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li>Age&nbsp;<font color="#339933">=</font>&nbsp;document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_16_ex_7_Age&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;sayHi<font color="#009900">&#40;</font>fName<font color="#339933">,</font>&nbsp;lName<font color="#339933">,</font>&nbsp;age<font color="#009900">&#41;</font>&nbsp;</li><li><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font>age&nbsp;<font color="#339933">&lt;</font>&nbsp;<font color="#CC0000">17</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Hi,&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;FullName<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">else</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Bye,&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;FullName<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">function</font>&nbsp;FullName<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;fName&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;lName<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font></li><li>sayHi<font color="#009900">&#40;</font><font color="#3366CC">&quot;Masha&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Ivanova&quot;</font><font color="#339933">,</font>&nbsp;Age<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>Длинна массива</b2></h4></td>\
                        <td><input type="number" value="7" class="input_vvod" id="id_lab_16_ex_9_length"></td></tr>\
                    <tr><td><h4><b2>Min</b2></h4></td>\
                        <td><input type="number" value="-50" class="input_vvod" id="id_lab_16_ex_9_MinValue"></td></tr>\
                    <tr><td><h4><b2>Max</b2></h4></td>\
                        <td><input type="number" value="50" class="input_vvod" id="id_lab_16_ex_9_MaxValue"></td></tr>\
                    </tbody>\
                 </table>\
							<input type="button" value="Запустить код!" onclick="lab_16_ex_9()">'
    }

    if (Lab_ex_N == 10)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;kolVertex&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">5</font><font color="#339933">;</font>&nbsp;<font color="#006600">//список&nbsp;рёбер&nbsp;и&nbsp;количество&nbsp;вершин&nbsp;совершенно&nbsp;разные&nbsp;вещи,&nbsp;в&nbsp;условии&nbsp;ошибка!&nbsp;</font></li><li><font color="#000066">var</font>&nbsp;edgesList&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">3</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">4</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">3</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">5</font><font color="#009900">&#93;</font><font color="#339933">,</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">4</font><font color="#339933">,</font>&nbsp;<font color="#CC0000">5</font><font color="#009900">&#93;</font><font color="#009900">&#93;</font>&nbsp;<font color="#006600">//(список&nbsp;ребер)</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;y1&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_16_ex_10_y1&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;y2&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;id_lab_16_ex_10_y2&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">value</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;smegVertex<font color="#009900">&#40;</font>A<font color="#339933">,</font>&nbsp;y1<font color="#339933">,</font>&nbsp;y2<font color="#009900">&#41;</font></li><li><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;B&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">for</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font>&nbsp;i<font color="#339933">&lt;</font>A.<font color="#660066">length</font><font color="#339933">;</font>&nbsp;i<font color="#339933">++</font><font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;<font color="#339933">=</font>&nbsp;A<font color="#009900">&#91;</font>i<font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#40;</font>B<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;y1&nbsp;<font color="#339933">&amp;&amp;</font>&nbsp;B<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;y2<font color="#009900">&#41;</font>&nbsp;<font color="#339933">||</font>&nbsp;<font color="#009900">&#40;</font>B<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;y1&nbsp;<font color="#339933">&amp;&amp;</font>&nbsp;B<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">==</font>&nbsp;y2<font color="#009900">&#41;</font><font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;<font color="#003366">true</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;<font color="#003366">false</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>smegVertex<font color="#009900">&#40;</font>edgesList<font color="#339933">,</font>&nbsp;y1<font color="#339933">,</font>&nbsp;y2<font color="#009900">&#41;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>Вершина 1</b2></h4></td>\
                        <td><input type="number" value="1" class="input_vvod" id="id_lab_16_ex_10_y1"></td></tr>\
                    <tr><td><h4><b2>Вершина 2</b2></h4></td>\
                        <td><input type="number" value="2" class="input_vvod" id="id_lab_16_ex_10_y2"></td></tr>\
                    </tbody>\
                 </table>\
							<input type="button" value="Запустить код!" onclick="lab_16_ex_10()">'
    }

    if (Lab_ex_N == 11)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;B&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;i&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;N&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;C&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;&quot;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;</li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;A_B&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>B<font color="#009900">&#91;</font>i<font color="#339933">++</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#339933">,</font><font color="#CC0000">2</font><font color="#009900">&#93;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;A_C&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>B<font color="#009900">&#91;</font>i<font color="#339933">++</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#339933">,</font><font color="#CC0000">3</font><font color="#009900">&#93;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;A_D&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>B<font color="#009900">&#91;</font>i<font color="#339933">++</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#339933">,</font><font color="#CC0000">4</font><font color="#009900">&#93;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;A_E&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>B<font color="#009900">&#91;</font>i<font color="#339933">++</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#339933">,</font><font color="#CC0000">5</font><font color="#009900">&#93;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;B_C&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>B<font color="#009900">&#91;</font>i<font color="#339933">++</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#339933">,</font><font color="#CC0000">3</font><font color="#009900">&#93;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;B_D&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>B<font color="#009900">&#91;</font>i<font color="#339933">++</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#339933">,</font><font color="#CC0000">4</font><font color="#009900">&#93;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;B_E&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>B<font color="#009900">&#91;</font>i<font color="#339933">++</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">2</font><font color="#339933">,</font><font color="#CC0000">5</font><font color="#009900">&#93;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;C_D&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>B<font color="#009900">&#91;</font>i<font color="#339933">++</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#339933">,</font><font color="#CC0000">4</font><font color="#009900">&#93;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;C_E&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>B<font color="#009900">&#91;</font>i<font color="#339933">++</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">3</font><font color="#339933">,</font><font color="#CC0000">5</font><font color="#009900">&#93;</font><font color="#009900">&#125;</font></li><li><font color="#000066">if</font><font color="#009900">&#40;</font>document.<font color="#660066">getElementById</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;E_D&quot;</font><font color="#009900">&#41;</font>.<font color="#660066">checked</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>B<font color="#009900">&#91;</font>i<font color="#339933">++</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#CC0000">4</font><font color="#339933">,</font><font color="#CC0000">5</font><font color="#009900">&#93;</font><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>&nbsp;</li><li>N&nbsp;<font color="#339933">=</font>&nbsp;B.<font color="#660066">length</font><font color="#339933">;</font></li><li>C&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;[&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;B.<font color="#660066">join</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;]&nbsp;[&quot;</font><font color="#009900">&#41;</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;]&quot;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>C<font color="#009900">&#41;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>N<font color="#009900">&#41;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
								<tbody>\
									<tr>\
										<td></td>\
										<td><h4><b2>A</b2></h4></td>\
										<td><h4><b2>B</b2></h4></td>\
										<td><h4><b2>C</b2></h4></td>\
										<td><h4><b2>D</b2></h4></td>\
										<td><h4><b2>E</b2></h4></td>\
									</tr>\
									<tr>\
										<td><h4><b2>A</b2></h4></td>\
										<td> <div><input type="checkbox" id="horns" name="A_A" >\
												<label for="A_A">.</label></div></td>\
										<td> <div><input type="checkbox" id="A_B" name="A_B" onchange="up_A_B()">\
												<label for="A_B">.</label></div></td>\
										<td> <div><input type="checkbox" id="A_C" name="A_C" onchange="up_A_C()">\
												<label for="A_C">.</label></div></td>\
										<td> <div><input type="checkbox" id="A_D" name="A_D" onchange="up_A_D()">\
												<label for="A_D">.</label></div></td>\
										<td> <div><input type="checkbox" id="A_E" name="A_E" onchange="up_A_E()">\
												<label for="A_E">.</label></div></td>\
									</tr>\
									<tr>\
										<td><h4><b2>B</b2></h4></td>\
										<td> <div><input type="checkbox" id="B_A" name="B_A" onchange="up_A_B()">\
												<label for="B_A">.</label></div></td>\
										<td> <div><input type="checkbox" id="---" name="B_B">\
												<label for="B_B">.</label></div></td>\
										<td> <div><input type="checkbox" id="B_C" name="B_C" onchange="up_B_C()">\
												<label for="B_C">.</label></div></td>\
										<td> <div><input type="checkbox" id="B_D" name="B_D" onchange="up_B_D()">\
												<label for="B_D">.</label></div></td>\
										<td> <div><input type="checkbox" id="B_E" name="B_E" onchange="up_B_E()">\
												<label for="B_E">.</label></div></td>\
									</tr>\
									<tr>\
										<td><h4><b2>C</b2></h4></td>\
										<td> <div><input type="checkbox" id="C_A" name="C_A" onchange="up_A_C()">\
												<label for="C_A">.</label></div></td>\
										<td> <div><input type="checkbox" id="C_B" name="C_B" onchange="up_B_C()">\
												<label for="C_B">.</label></div></td>\
										<td> <div><input type="checkbox" id="---" name="C_C">\
												<label for="C_C">.</label></div></td>\
										<td> <div><input type="checkbox" id="C_D" name="C_D" onchange="up_C_D()">\
												<label for="C_D">.</label></div></td>\
										<td> <div><input type="checkbox" id="C_E" name="C_E" onchange="up_C_E()">\
												<label for="C_E">.</label></div></td>\
									</tr>\
									<tr>\
										<td><h4><b2>D</b2></h4></td>\
										<td> <div><input type="checkbox" id="D_A" name="D_A" onchange="up_A_D()">\
												<label for="D_A">.</label></div></td>\
										<td> <div><input type="checkbox" id="D_B" name="D_B" onchange="up_B_D()">\
												<label for="D_B">.</label></div></td>\
										<td> <div><input type="checkbox" id="D_C" name="D_C" onchange="up_C_D()">\
												<label for="D_C">.</label></div></td>\
										<td> <div><input type="checkbox" id="---" name="D_D">\
												<label for="D_D">.</label></div></td>\
										<td> <div><input type="checkbox" id="D_E" name="D_E" onchange="up_D_E()">\
												<label for="D_E">.</label></div></td>\
									</tr>\
									<tr>\
										<td><h4><b2>E</b2></h4></td>\
										<td> <div><input type="checkbox" id="E_A" name="E_A" onchange="up_A_E()">\
												<label for="E_A">.</label></div></td>\
										<td> <div><input type="checkbox" id="E_B" name="E_B" onchange="up_B_E()">\
												<label for="E_B">.</label></div></td>\
										<td> <div><input type="checkbox" id="E_C" name="E_C" onchange="up_C_E()">\
												<label for="E_C">.</label></div></td>\
										<td> <div><input type="checkbox" id="E_D" name="E_D" onchange="up_D_E()">\
												<label for="E_D">.</label></div></td>\
										<td> <div><input type="checkbox" id="---" name="E_E">\
												<label for="E_E">.</label></div></td>\
									</tr>\
								</tbody>\
							</table>\
							<input type="button" value="Запустить код!" onclick="lab_16_ex_11()">'
    }
    

    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}





function lab_16_ex_7()
{
    var Age = +document.getElementById("id_lab_16_ex_7_Age").value;
    var fName = document.getElementById("id_lab_16_ex_7_fName").value;
    var lName = document.getElementById("id_lab_16_ex_7_lName").value;
 
    function sayHi(fName, lName, age) 
    {
        if (age < 17) 
        {
            var a = "Hi, " + FullName();
        }
        else 
        {
            var a = "Bye, " + FullName();
        }

        str2 = '<blockquote align="left" class="prer unselectable"><ol><li>'+ a +'</li></ol></blockquote>'
        
    
    
        function FullName() {
            return fName + " " + lName;
        }
    }
    sayHi(fName, lName, Age);

    
    
    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_16_ex_9()
{
    
    var length = +document.getElementById("id_lab_16_ex_9_length").value;
    var min = +document.getElementById("id_lab_16_ex_9_MinValue").value;
    var max = +document.getElementById("id_lab_16_ex_9_MaxValue").value;
 
    var A = [];
    var B = [];
    var i2 = 0;

    A = RandMass(length, min, max)

    function positive(a)
    {
        if (a > 0){return true;}
        else {return false;}
    }

    for(var i=0; i<A.length; i++)
    {
        if (positive(A[i])){B[i2++]=A[i]}
    }


    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>['+ A +']</li><li>['+ B +']</li></ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}



function lab_16_ex_10()
{
    
    var kolVertex = 5; //список рёбер и количество вершин совершенно разные вещи, в условии ошибка! 
    var edgesList = [[1, 3], [1, 4], [2, 3], [3, 5], [4, 5]] //(список ребер)

    var y1 = +document.getElementById("id_lab_16_ex_10_y1").value;
    var y2 = +document.getElementById("id_lab_16_ex_10_y2").value;

    var c =smegVertex(edgesList, y1, y2);


    function smegVertex(A, y1, y2)
    {
        var B = [];
        for (var i = 0; i<A.length; i++)
        {
            B = A[i];
            if ((B[0] == y1 && B[1] == y2) || (B[1] == y1 && B[0] == y2))
            {
                return true;
            }
        }
        return false;
    }


    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>'+ c +'</li></ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}


function lab_16_ex_11()
{
    var B = [];
    var i = 0;
    var N = 0;
    var C = '';


    if(document.getElementById("A_B").checked){B[i++] = [1,2]}
    if(document.getElementById("A_C").checked){B[i++] = [1,3]}
    if(document.getElementById("A_D").checked){B[i++] = [1,4]}
    if(document.getElementById("A_E").checked){B[i++] = [1,5]}
    if(document.getElementById("B_C").checked){B[i++] = [2,3]}
    if(document.getElementById("B_D").checked){B[i++] = [2,4]}
    if(document.getElementById("B_E").checked){B[i++] = [2,5]}
    if(document.getElementById("C_D").checked){B[i++] = [3,4]}
    if(document.getElementById("C_E").checked){B[i++] = [3,5]}
    if(document.getElementById("E_D").checked){B[i++] = [4,5]}
    

    N = B.length;
    C = '[' + B.join('] [') + ']'

    // console.log(C)
    // console.log(N)

    

    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>//Список&nbsp;ребер:</li><li>'+ C +'</li><li>&nbsp;</li><li>//Количество&nbsp;дорог</li><li>'+ N +'</li></ol></blockquote>'
    
    document.getElementById("id_labs_out").innerHTML = str2;
}



var a1 = [];

function up_A_B()
{
    if (a1[0] == 0) { a1[0] = 1 } else { a1[0] = 0 }
    document.getElementById("B_A").checked = a1[0];
    document.getElementById("A_B").checked = a1[0];
}

function up_A_C()
{
    if (a1[1] == 0) { a1[1] = 1 } else { a1[1] = 0 }
    document.getElementById("A_C").checked = a1[1];
    document.getElementById("C_A").checked = a1[1];
}

function up_A_D()
{
    if (a1[2] == 0) { a1[2] = 1 } else { a1[2] = 0 }
    document.getElementById("A_D").checked = a1[2];
    document.getElementById("D_A").checked = a1[2];
}

function up_A_E()
{
    if (a1[3] == 0) { a1[3] = 1 } else { a1[3] = 0 }
    document.getElementById("A_E").checked = a1[3];
    document.getElementById("E_A").checked = a1[3];
}

function up_B_C()
{
    if (a1[4] == 0) { a1[4] = 1 } else { a1[4] = 0 }
    document.getElementById("B_C").checked = a1[4];
    document.getElementById("C_B").checked = a1[4];
}

function up_B_D()
{
    if (a1[5] == 0) { a1[5] = 1 } else { a1[5] = 0 }
    document.getElementById("B_D").checked = a1[5];
    document.getElementById("D_B").checked = a1[5];
}

function up_B_E()
{
    if (a1[6] == 0) { a1[6] = 1 } else { a1[6] = 0 }
    document.getElementById("B_E").checked = a1[6];
    document.getElementById("E_B").checked = a1[6];
}

function up_C_D()
{
    if (a1[7] == 0) { a1[7] = 1 } else { a1[7] = 0 }
    document.getElementById("C_D").checked = a1[7];
    document.getElementById("D_C").checked = a1[7];
}

function up_C_E()
{
    if (a1[8] == 0) { a1[8] = 1 } else { a1[8] = 0 }
    document.getElementById("C_E").checked = a1[8];
    document.getElementById("E_C").checked = a1[8];
}

function up_D_E()
{
    if (a1[9] == 0) { a1[9] = 1 } else { a1[9] = 0 }
    document.getElementById("D_E").checked = a1[9];
    document.getElementById("E_D").checked = a1[9];
}


