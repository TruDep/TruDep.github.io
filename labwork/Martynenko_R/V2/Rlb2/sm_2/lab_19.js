function upd_lab_19_code(Lab_ex_N){
    
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: Дескрипторы, геттеры и сеттеры</b2>';
    var str5='<b2>Цель занятия: научить управлять свойствами объекта при помощи статического метода Object.defineProperty (объявлять, настраивать)</b2>';
    
    var str='';
    var str2= strd;


    if (Lab_ex_N == 1)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//&nbsp;a)&nbsp;</font></li><li><font color="#000066">var</font>&nbsp;o&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font><font color="#009900">&#125;</font><font color="#339933">;</font></li><li>o.<font color="#660066">a</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">//&nbsp;b)&nbsp;</font></li><li><font>Object</font>.<font color="#660066">defineProperty</font><font color="#009900">&#40;</font>o<font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;a&quot;</font><font color="#339933">,</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;value<font color="#339933">:</font>&nbsp;<font color="#CC0000">1</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;writable<font color="#339933">:</font>&nbsp;<font color="#003366">false</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;configurable<font color="#339933">:</font>&nbsp;<font color="#003366">false</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;enumerable<font color="#339933">:</font>&nbsp;<font color="#003366">false</font></li><li><font color="#009900">&#125;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
    }

    
    if (Lab_ex_N == 2)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">var</font>&nbsp;arc&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font><font color="#009900">&#125;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;temperature<font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;archive&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#91;</font><font color="#009900">&#93;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font>Object</font>.<font color="#660066">defineProperty</font><font color="#009900">&#40;</font>arc<font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;temperature&quot;</font><font color="#339933">,</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">get</font><font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;get!&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">set</font><font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font>value<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temperature&nbsp;<font color="#339933">=</font>&nbsp;value<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;archive.<font color="#660066">push</font><font color="#009900">&#40;</font><font color="#009900">&#123;</font>&nbsp;val<font color="#339933">:</font>&nbsp;temperature&nbsp;<font color="#009900">&#125;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>arc.<font color="#660066">getArchive</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font>&nbsp;<font color="#000066">return</font>&nbsp;archive<font color="#339933">;</font>&nbsp;<font color="#009900">&#125;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>arc.<font color="#660066">temperature</font><font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;&quot;get!&quot;</font></li><li>arc.<font color="#660066">temperature</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">11</font><font color="#339933">;</font></li><li>arc.<font color="#660066">temperature</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">13</font><font color="#339933">;</font></li><li>arc.<font color="#660066">getArchive</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;[{&nbsp;val:&nbsp;11&nbsp;},&nbsp;{&nbsp;val:&nbsp;13&nbsp;}]</font></li></ol></blockquote>'
        str2= '<blockquote align="left" class="prer unselectable"><ol><li>get!</li><li>&nbsp;</li><li>(2) [{…},&nbsp;{…}]</li><li>&nbsp;&nbsp;&nbsp;0:&nbsp;{val:&nbsp;11}</li><li>&nbsp;&nbsp;&nbsp;1:&nbsp;{val:&nbsp;13}</li><li>&nbsp;&nbsp;&nbsp;length:&nbsp;2</li><li>&nbsp;&nbsp;&nbsp;__proto__:&nbsp;Array(0)</li></ol></blockquote>';
       
    }

    if (Lab_ex_N == 3)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;User<font color="#009900">&#40;</font>fullName<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>&nbsp;<font color="#339933">=</font>&nbsp;fullName<font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font>Object</font>.<font color="#660066">defineProperty</font><font color="#009900">&#40;</font><font color="#000066">this</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;firstName&quot;</font><font color="#339933">,</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">get</font><font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;arr<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">set</font><font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font>value<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr<font color="#009900">&#91;</font><font color="#CC0000">0</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;value<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>&nbsp;<font color="#339933">=</font>&nbsp;arr.<font color="#660066">join</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font>Object</font>.<font color="#660066">defineProperty</font><font color="#009900">&#40;</font><font color="#000066">this</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;lastName&quot;</font><font color="#339933">,</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">get</font><font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;arr<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">set</font><font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font>value<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">var</font>&nbsp;arr&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>.<font color="#660066">split</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr<font color="#009900">&#91;</font><font color="#CC0000">1</font><font color="#009900">&#93;</font>&nbsp;<font color="#339933">=</font>&nbsp;value<font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">fullName</font>&nbsp;<font color="#339933">=</font>&nbsp;arr.<font color="#660066">join</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;&nbsp;&quot;</font><font color="#009900">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;vasya&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">new</font>&nbsp;User<font color="#009900">&#40;</font><font color="#3366CC">&quot;Вася&nbsp;Пупкин&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li><font color="#006600">//&nbsp;чтение&nbsp;firstName/lastName</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>&nbsp;vasya.<font color="#660066">firstName</font>&nbsp;<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;Вася</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>&nbsp;vasya.<font color="#660066">lastName</font>&nbsp;<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;Пупкин</font></li><li>&nbsp;</li><li><font color="#006600">//&nbsp;запись&nbsp;в&nbsp;lastName</font></li><li>vasya.<font color="#660066">firstName</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Роман&quot;</font><font color="#339933">;</font></li><li>vasya.<font color="#660066">lastName</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#3366CC">&quot;Мартыненко&quot;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>&nbsp;vasya.<font color="#660066">fullName</font>&nbsp;<font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//&nbsp;Роман&nbsp;Мартыненко</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>FirstName</b2></h4></td>\
                        <td><input type="text" value="Роман" class="input_vvod" id="id_lab_19_ex_3_FirstName"></td></tr>\
                    <tr><td><h4><b2>LastName</b2></h4></td>\
                        <td><input type="text" value="Мартыненко" class="input_vvod" id="id_lab_19_ex_3_LastName"></td></tr>\
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
    
    //console.log( vasya.fullName ); // Роман Мартыненко
    
    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Вася</li><li>Пупкин</li><li>&nbsp;</li><li>'+ vasya.fullName +'</li></ol></blockquote>'  

    document.getElementById("id_labs_out").innerHTML = str2;
}

