function upd_lab_20_code(Lab_ex_N){
    
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: Статические и фабричные методы</b2>';
    var str5='<b2>Цель занятия: научить задавать и использовать статические свойства, статические и фабричные методы</b2>';
    
    var str='';
    var str2= strd;


    if (Lab_ex_N == 1)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;Paper<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Paper.<font color="#660066">count</font><font color="#339933">++;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Paper.<font color="#660066">DEFAULT_FORMAT</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;А4&quot;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font>Object</font>.<font color="#660066">defineProperty</font><font color="#009900">&#40;</font>Paper<font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Person&quot;</font><font color="#339933">,</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">get</font><font color="#339933">:</font>&nbsp;<font color="#000066">function</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font><font color="#009900">&#40;</font>Paper.<font color="#660066">count</font>&nbsp;<font color="#339933">==</font>&nbsp;<font color="#003366">undefined</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font>Paper.<font color="#660066">count</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#125;</font><font color="#000066">else</font><font color="#009900">&#123;</font><font color="#000066">return</font>&nbsp;Paper.<font color="#660066">count</font><font color="#339933">++</font><font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#009900">&#125;</font></li><li>Paper<font color="#009900">&#40;</font><font color="#009900">&#41;</font></li><li>Paper.<font color="#660066">Person</font><font color="#339933">;</font>&nbsp;<font color="#006600">//Возвращает&nbsp;на&nbsp;+1&nbsp;счетчик&nbsp;count</font></li></ol></blockquote>'
    }

    
    if (Lab_ex_N == 2)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li>Publications&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">function</font>&nbsp;Publish<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">Publish_info</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#000066">this</font><font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>Publications.<font color="#660066">createNews</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font>PublishData<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;Publications&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">new</font>&nbsp;Publish<font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">Headline</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">Headline</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">Text</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">Text</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">date</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">date</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">Sources</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">Sources</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;Publications<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>Publications.<font color="#660066">createArticle</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font>PublishData<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;Publications&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">new</font>&nbsp;Publish<font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">Headline</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">Headline</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">Text</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">Text</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">date</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">date</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">authors</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">authors</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;Publications<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>Publications.<font color="#660066">createAnnouncement</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font>PublishData<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;Publications&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">new</font>&nbsp;Publish<font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">Headline</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">Headline</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">Text</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">Text</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">date</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">date</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Publications.<font color="#660066">RelDate</font>&nbsp;<font color="#339933">=</font>&nbsp;PublishData.<font color="#660066">RelDate</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;Publications<font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#006600">//</font></li><li><font color="#000066">var</font>&nbsp;News&nbsp;<font color="#339933">=</font>&nbsp;Publications.<font color="#660066">createNews</font><font color="#009900">&#40;</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Headline<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Новость&nbsp;№1&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Text<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Создании&nbsp;полиморфной&nbsp;функции&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;date<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;18.02.19&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Sources<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Roma-Pc&quot;</font><font color="#339933">,</font></li><li><font color="#009900">&#125;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;Article&nbsp;<font color="#339933">=</font>&nbsp;Publications.<font color="#660066">createArticle</font><font color="#009900">&#40;</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Headline<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Статья&nbsp;№1&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Text<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Создании&nbsp;полиморфной&nbsp;функции&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;date<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;18.02.19&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;authors<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Roman_M&quot;</font><font color="#339933">,</font></li><li><font color="#009900">&#125;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;Announcement&nbsp;<font color="#339933">=</font>&nbsp;Publications.<font color="#660066">createAnnouncement</font><font color="#009900">&#40;</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Headline<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Объявление&nbsp;№1&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;Text<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Создании&nbsp;полиморфной&nbsp;функции&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;date<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;18.02.19&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;RelDate<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;18.02.19&quot;</font><font color="#339933">,</font></li><li><font color="#009900">&#125;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;</li><li>News.<font color="#660066">Publish_info</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font></li><li>Article.<font color="#660066">Publish_info</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font></li><li>Announcement.<font color="#660066">Publish_info</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>Publish {Publish_info:&nbsp;ƒ,&nbsp;Headline:&nbsp;&quot;Новость&nbsp;№1&quot;,&nbsp;Text:&nbsp;&quot;Создании&nbsp;полиморфной&nbsp;функции&quot;,&nbsp;date:&nbsp;&quot;18.02.19&quot;,&nbsp;Sources:&nbsp;&quot;Roma-Pc&quot;}</li><li>&nbsp;</li><li>Publish {Publish_info:&nbsp;ƒ,&nbsp;Headline:&nbsp;&quot;Статья&nbsp;№1&quot;,&nbsp;Text:&nbsp;&quot;Создании&nbsp;полиморфной&nbsp;функции&quot;,&nbsp;date:&nbsp;&quot;18.02.19&quot;,&nbsp;authors:&nbsp;&quot;Roman_M&quot;}</li><li>&nbsp;</li><li>Publish {Publish_info:&nbsp;ƒ,&nbsp;Headline:&nbsp;&quot;Объявление&nbsp;№1&quot;,&nbsp;Text:&nbsp;&quot;Создании&nbsp;полиморфной&nbsp;функции&quot;,&nbsp;date:&nbsp;&quot;18.02.19&quot;,&nbsp;RelDate:&nbsp;&quot;18.02.19&quot;}</li></ol></blockquote>';
       
    }

    if (Lab_ex_N == 3)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;User<font color="#009900">&#40;</font>fullName<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>&nbsp;<font color="#339933">=</font>&nbsp;fullName<font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font>Object</font>.<font color="#660066">defineProperty</font><font color="#009900">&#40;</font><font color="#000066">this</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;firstName&quot;</font><font color="#339933">,</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">get</font><font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;arr<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">set</font><font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font>value<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;value<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>&nbsp;<font color="#339933">=</font>&nbsp;arr.<font color="#660066">join</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font>Object</font>.<font color="#660066">defineProperty</font><font color="#009900">&#40;</font><font color="#000066">this</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;lastName&quot;</font><font color="#339933">,</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">get</font><font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;arr<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">set</font><font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font>value<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;value<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>&nbsp;<font color="#339933">=</font>&nbsp;arr.<font color="#660066">join</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;vasya&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">new</font>&nbsp;User<font color="#009900">&#40;</font><font color="#3366CC">&quot;Вася&nbsp;Пупкин&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">//&nbsp;чтение&nbsp;firstName/lastName</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>&nbsp;vasya.<font color="#660066">firstName</font>&nbsp;<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;Вася</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>&nbsp;vasya.<font color="#660066">lastName</font>&nbsp;<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;Пупкин</font></li><li>&nbsp;</li><li><font color="#006600">//&nbsp;запись&nbsp;в&nbsp;lastName</font></li><li>vasya.<font color="#660066">firstName</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Артур&quot;</font><font color="#339933">;</font></li><li>vasya.<font color="#660066">lastName</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Аблаев&quot;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>&nbsp;vasya.<font color="#660066">fullName</font>&nbsp;<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;Артур&nbsp;Аблаев</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>FirstName</b2></h4></td>\
                        <td><input type="text" value="Артур" class="input_vvod" id="id_lab_19_ex_3_FirstName"></td></tr>\
                    <tr><td><h4><b2>LastName</b2></h4></td>\
                        <td><input type="text" value="Аблаев" class="input_vvod" id="id_lab_19_ex_3_LastName"></td></tr>\
                    </tbody>\
                 </table>\
                            <input type="button" value="Запустить код!" onclick="lab_19_ex_3()">'
    }

    
    
    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}




function lab_19_ex_3()
{
    var FirstName = document.getElementById("id_lab_19_ex_3_FirstName").value;
    var LastName = document.getElementById("id_lab_19_ex_3_LastName").value;
    
    function User(fullName) {
        this.fullName = fullName;
    
        Object.defineProperty(this, "firstName", {
            get: function () {
                var arr = this.fullName.split(' ');
                return arr[0]
            },
            set: function (value) {
                var arr = this.fullName.split(' ');
                arr[0] = value;
                this.fullName = arr.join(" ")
            }
        });
        
        Object.defineProperty(this, "lastName", {
            get: function () {
                var arr = this.fullName.split(' ');
                return arr[1]
            },
            set: function (value) {
                var arr = this.fullName.split(' ');
                arr[1] = value;
                this.fullName = arr.join(" ")
            }
        });
    }
    
    var vasya = new User("Вася Пупкин");
    
    // чтение firstName/lastName
    //console.log( vasya.firstName ); // Вася
    //console.log( vasya.lastName ); // Пупкин
    
    // запись в lastName
    vasya.firstName = FirstName;
    vasya.lastName = LastName;
    
    //console.log( vasya.fullName ); // Аблаев Артур
    
    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Вася</li><li>Пупкин</li><li>&nbsp;</li><li>'+ vasya.fullName +'</li></ol></blockquote>'  

    document.getElementById("id_labs_out").innerHTML = str2;
}

