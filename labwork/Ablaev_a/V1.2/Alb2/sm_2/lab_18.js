function upd_lab_18_code(Lab_ex_N){
    
    var strd='<pre align="left">Warning: "В некоторых заданиях не будет поля вывода"</pre>';
    var str3='<pre align="left">Warning: "В некоторых заданиях не будет поля ввода"</pre>';

    var str4='<b2>Тема занятия: Конструктор</b2>';
    var str5='<b2>Цель занятия: Научится работать с Конструктором объектов</b2>';
    
    var str='';
    var str2= strd;


    if (Lab_ex_N == 1)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#006600">//&nbsp;1)</font></li><li><font color="#000066">var</font>&nbsp;user&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;name<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Vasya&quot;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;sayHi<font color="#339933">:</font>&nbsp;<font color="#000066">function</font>&nbsp;<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#000066">this</font>.<font color="#660066">name</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font></li><li><font color="#009900">&#125;</font><font color="#339933">;</font></li><li>user.<font color="#660066">sayHi</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#006600">//Выведет&nbsp;&nbsp;Vasya,&nbsp;т.к.&nbsp;this&nbsp;возвращает&nbsp;user&nbsp;</font></li><li>&nbsp;<font color="#006600">//&nbsp;а&nbsp;user.name&nbsp;=&nbsp;Vasya</font></li><li>&nbsp;</li><li>&nbsp;</li><li><font color="#006600">//&nbsp;2)</font></li><li><font color="#000066">var</font>&nbsp;user&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;name<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Vasya&quot;</font></li><li><font color="#009900">&#125;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;admin&nbsp;<font color="#339933">=</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;name<font color="#339933">:</font>&nbsp;<font color="#3366CC">&quot;Dusya&quot;</font></li><li><font color="#009900">&#125;</font><font color="#339933">;</font></li><li><font color="#000066">function</font>&nbsp;func<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#000066">this</font>.<font color="#660066">name</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li>user.<font color="#660066">f</font>&nbsp;<font color="#339933">=</font>&nbsp;func<font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//Запишем&nbsp;в&nbsp;каждый&nbsp;объект&nbsp;функцию&nbsp;func&nbsp;в&nbsp;виде&nbsp;метода</font></li><li>admin.<font color="#660066">g</font>&nbsp;<font color="#339933">=</font>&nbsp;func<font color="#339933">;</font></li><li>&nbsp;</li><li>user.<font color="#660066">f</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;<font color="#006600">//Vasya</font></li><li>admin.<font color="#660066">g</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#339933">;</font>&nbsp;&nbsp;<font color="#006600">//Dusya</font></li></ol></blockquote>'
    }

    
    if (Lab_ex_N == 2)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;User<font color="#009900">&#40;</font>secondName<font color="#339933">,</font>firstName<font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">name</font>&nbsp;<font color="#339933">=</font>&nbsp;firstName<font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">sName</font>&nbsp;<font color="#339933">=</font>&nbsp;secondName<font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">sayHi</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<font color="#660066">log</font><font color="#009900">&#40;</font><font color="#3366CC">&quot;Hi,&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">sName</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#3366CC">&quot;&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">name</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#009900">&#125;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li><font color="#000066">var</font>&nbsp;student1&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">new</font>&nbsp;User<font color="#009900">&#40;</font><font color="#3366CC">&quot;Ivanov&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Vasya&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li><font color="#000066">var</font>&nbsp;student2&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">new</font>&nbsp;User<font color="#009900">&#40;</font><font color="#3366CC">&quot;Артур&quot;</font><font color="#339933">,</font>&nbsp;<font color="#3366CC">&quot;Артур&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>student1.<font color="#660066">sayHi</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>student2.<font color="#660066">sayHi</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>FirstName</b2></h4></td>\
                        <td><input type="text" value="Артур" class="input_vvod" id="id_lab_18_ex_2_FN"></td></tr>\
                    <tr><td><h4><b2>SecondName</b2></h4></td>\
                        <td><input type="text" value="Артур" class="input_vvod" id="id_lab_18_ex_2_SN"></td></tr>\
                    </tbody>\
                 </table>\
                            <input type="button" value="Запустить код!" onclick="lab_18_ex_2()">'
    }

    if (Lab_ex_N == 3)
    {
        str = '<blockquote align="left" class="prer unselectable"><ol><li><font color="#000066">function</font>&nbsp;Calc<font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">a</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">b</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#CC0000">0</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">read</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">a</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>prompt<font color="#009900">&#40;</font><font color="#3366CC">&quot;Введите&nbsp;число&nbsp;А&quot;</font><font color="#339933">,</font><font color="#3366CC">&quot;5&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">b</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#339933">+</font>prompt<font color="#009900">&#40;</font><font color="#3366CC">&quot;Введите&nbsp;число&nbsp;B&quot;</font><font color="#339933">,</font><font color="#3366CC">&quot;5&quot;</font><font color="#009900">&#41;</font><font color="#339933">;</font><font color="#009900">&#125;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">sum</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">this</font>.<font color="#660066">a</font>&nbsp;<font color="#339933">+</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">b</font><font color="#009900">&#41;</font><font color="#339933">;</font><font color="#009900">&#125;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">mul</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">return</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">this</font>.<font color="#660066">a</font>&nbsp;<font color="#339933">*</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">b</font><font color="#009900">&#41;</font><font color="#339933">;</font><font color="#009900">&#125;</font><font color="#339933">,</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">this</font>.<font color="#660066">div</font>&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">function</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">if</font><font color="#009900">&#40;</font><font color="#000066">this</font>.<font color="#660066">b</font>&nbsp;<font color="#339933">!=</font>&nbsp;<font color="#CC0000">0</font><font color="#009900">&#41;</font><font color="#009900">&#123;</font><font color="#000066">return</font>&nbsp;<font color="#009900">&#40;</font><font color="#000066">this</font>.<font color="#660066">a</font>&nbsp;<font color="#339933">/</font>&nbsp;<font color="#000066">this</font>.<font color="#660066">b</font><font color="#009900">&#41;</font><font color="#339933">;</font><font color="#009900">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000066">else</font><font color="#009900">&#123;</font><font color="#000066">return</font>&nbsp;<font color="#3366CC">&quot;На&nbsp;ноль&nbsp;делить&nbsp;нельзя!&quot;</font><font color="#339933">;</font><font color="#009900">&#125;</font><font color="#009900">&#125;</font><font color="#339933">;</font></li><li><font color="#009900">&#125;</font></li><li>&nbsp;</li><li><font color="#000066">var</font>&nbsp;calc&nbsp;<font color="#339933">=</font>&nbsp;<font color="#000066">new</font>&nbsp;Calc<font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>calc.<font color="#660066">read</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font><font color="#339933">;</font></li><li>&nbsp;</li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>&nbsp;<font color="#3366CC">&quot;Сумма&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;calc.<font color="#660066">sum</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>&nbsp;<font color="#3366CC">&quot;Произведение&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;calc.<font color="#660066">mul</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#41;</font><font color="#339933">;</font></li><li>console.<font color="#660066">log</font><font color="#009900">&#40;</font>&nbsp;<font color="#3366CC">&quot;Частное&nbsp;=&nbsp;&quot;</font>&nbsp;<font color="#339933">+</font>&nbsp;calc.<font color="#660066">div</font><font color="#009900">&#40;</font><font color="#009900">&#41;</font>&nbsp;<font color="#009900">&#41;</font><font color="#339933">;</font></li></ol></blockquote>'
        str2= '<pre align="left">Warning: "Нажмити на кнопу: "Запустить код!"</pre>';
        str3 = '<table class="table table-bordered table-condensed">\
                <tbody>\
                    <tr><td><h4><b2>A</b2></h4></td>\
                        <td><input type="number" value="15" class="input_vvod" id="id_lab_18_ex_3_A"></td></tr>\
                    <tr><td><h4><b2>B</b2></h4></td>\
                        <td><input type="number" value="23" class="input_vvod" id="id_lab_18_ex_3_B"></td></tr>\
                    </tbody>\
                 </table>\
                            <input type="button" value="Запустить код!" onclick="lab_18_ex_3()">'
    }

    
    
    document.getElementById("id_labs_in").innerHTML = str3;
    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;

    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str5;
}



function lab_18_ex_2()
{
    var firstName = document.getElementById("id_lab_18_ex_2_FN").value;
    var secondName = document.getElementById("id_lab_18_ex_2_SN").value;
 
    function User(secondName,firstName) {
        this.name = firstName,
        this.sName = secondName,
        this.sayHi = function(){
            console.log("Hi, " + this.sName + " " + this.name);
        };
    }
    var student1 = new User("Ivanov", "Vasya");
    var student2 = new User(secondName, firstName);
    
    student1.sayHi();
    student2.sayHi();
    
    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Hi,&nbsp;Vasya&nbsp;Ivanov</li><li>Hi,&nbsp;'+ secondName +'&nbsp;'+ firstName +'</li><li>&nbsp;</li></ol></blockquote>'
        
    document.getElementById("id_labs_out").innerHTML = str2;
}

function lab_18_ex_3()
{
    var A = +document.getElementById("id_lab_18_ex_3_A").value;
    var B = +document.getElementById("id_lab_18_ex_3_B").value;
    
    function Calc() {
        this.a = 0,
        this.b = 0,
        this.read = function(){
            this.a = A;
            this.b = B;},
        this.sum = function(){
            return (this.a + this.b);},
        this.mul = function(){
            return (this.a * this.b);},
        this.div = function(){
            if(this.b != 0){return (this.a / this.b);}
            else{return "На ноль делить нельзя!";}};
    }
    
    var calc = new Calc();
    calc.read();
    
    console.log( "Сумма = " + calc.sum() );
    console.log( "Произведение = " + calc.mul() );
    console.log( "Частное = " + calc.div() );
    
    str2 = '<blockquote align="left" class="prer unselectable"><ol><li>Сумма&nbsp;=&nbsp;'+ calc.sum() +'</li><li>Произведение&nbsp;=&nbsp;'+ calc.mul() +'</li><li>Частное&nbsp;=&nbsp;'+ calc.div() +'</li></ol></blockquote>'  

    document.getElementById("id_labs_out").innerHTML = str2;
}

