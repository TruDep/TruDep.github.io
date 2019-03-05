var semester = 1;
//var lab_menu = +document.getElementById("id_lab_menu").value;
var lab_menu = 2;

// PopUp
// function Pop1Hide(){
//     PopUpHide();
// }
// setTimeout(Pop1Hide,3000)


// // Мои функции
// function Random(min, max) {
//     return x = Math.floor(Math.random() * (max - min + 1)) + min;
// }
 
// function RandMass(length, min, max) {
//     var A = [];
//     for (var i = 0; i < length; i++) {A[i] = Random(min, max); }
//     return A;
// }
// //////////////////////////////

function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}

// PopUp



function upd_lab_menu(){

    semester = document.getElementById("id_semester2").value;
    console.log(semester)
    var str =  '<select id="id_lab_menu" >\
                <option value="2">ERROR</option>\
                </select>';

    if (semester == 1)
    {
        var str =  '<select id="id_lab_menu" >\
                    <option value="2">Lab 2</option>\
                    <option value="3.1">Lab 3.1</option>\
                    <option value="3.2">Lab 3.2</option>\
                    <option value="4">Lab 4</option>\
                    <option value="5">Lab 5</option>\
                    <option value="6-7">Lab 6-7</option>\
                    <option value="8-9">Lab 8-9</option>\
                    <option value="10">Lab 10</option>\
                    </select>'
    }

    if (semester == 2)
    {
        var str =  '<select id="id_lab_menu" >\
                    <option value="11">Lab 11</option>\
                    <option value="12">Lab 12</option>\
                    <option value="13">Lab 13</option>\
                    <option value="14">Lab 14</option>\
                    <option value="15">Lab 15</option>\
                    <option value="16">Lab 16</option>\
                    <option value="17.1">Lab 17.1</option>\
                    <option value="17.2">Lab 17.2</option>\
                    <option value="18">Lab 18</option>\
                    <option value="19">Lab 19</option>\
                    <option value="20">Lab 20</option>\
                    </select>'
    }

    document.getElementById("lab2").innerHTML = str;
    
}

function upd_Sm_Lb(){

    semester = document.getElementById("id_semester2").value;
    lab_menu = document.getElementById("id_lab_menu").value;

    var str2 = "<h2>СМ-"; //5_ЛБ-15</h2>
    
    if (semester == 1){str2 += '1'}
    if (semester == 2){str2 += '2'}
    if (semester == 3){str2 += '3'}
    if (semester == 4){str2 += '4'}
    if (semester == 5){str2 += '5'}
    if (semester == 6){str2 += '6'}
    if (semester == 7){str2 += '7'}
    if (semester == 8){str2 += '8'}

    str2 += "_ЛБ-";
    str2 += lab_menu;
    str2 += "</h2>"
    //console.log(str2)

    document.getElementById("Sm_Lb").innerHTML = str2;
    upd_lab_ex()
    hy_ex()
    
}

function upd_lab_ex(){

    semester = +document.getElementById("id_semester2").value;
    var str =  '<select id="Lab_ex_menu" >\
                <option value="2">ERROR</option>\
                </select>';

    if (lab_menu == 2)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
					</select>'
    }

    if (lab_menu == "3.1")
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
                    <option value="6">Задание 6</option>\
                    <option value="7">Задание 7</option>\
                    <option value="8">Задание 8</option>\
                    <option value="9">Задание 9</option>\
                    <option value="10">Задание 10</option>\
                    <option value="11">Задание 11</option>\
					</select>'
    }

    if (lab_menu == "3.2")
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
                    <option value="6">Задание 6</option>\
					</select>'
    }

    if (lab_menu == 4)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
                    <option value="6">Задание 6</option>\
                    <option value="7">Задание 7</option>\
                    <option value="8">Задание 8</option>\
                    <option value="9">Задание 9</option>\
					</select>'
    }

    if (lab_menu == 5)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
					</select>'
    }

    if (lab_menu == "6-7")
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
                    <option value="6">Задание 6</option>\
                    <option value="7">Задание 7 Калькулятор 1</option>\
                    <option value="8">Задание 8</option>\
                    <option value="9">Задание 9</option>\
                    <option value="10">Задание 10 Калькулятор 1</option>\
                    <option value="11">Задание 11</option>\
					</select>'
    }

    if (lab_menu == "8-9")
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
                    <option value="6">Задание 6</option>\
                    <option value="7">Задание 7</option>\
                    <option value="8">Задание 8</option>\
                    <option value="9">Задание 9</option>\
                    <option value="10">Задание 10</option>\
                    <option value="11">Задание 11</option>\
					</select>'
    }

    if (lab_menu == 10)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
                    <option value="6">Задание 6</option>\
                    <option value="7">Задание 7</option>\
					</select>'
    }

    if (lab_menu == 11)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
                    <option value="6">Дополнительное задание 1</option>\
					</select>'
    }

    if (lab_menu == 12)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
					</select>'
    }

    if (lab_menu == 13)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
                    <option value="6">Задание 6</option>\
					</select>'
    }

    if (lab_menu == 14)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
					</select>'
    }

    if (lab_menu == 15)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
                    <option value="6">Задание 6</option>\
                    <option value="7">Задание 7</option>\
					</select>'
    }

    if (lab_menu == 16)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
                    <option value="6">Задание 6</option>\
                    <option value="7">Задание 7</option>\
                    <option value="8">Задание 8</option>\
                    <option value="9">Задание 9</option>\
                    <option value="10">Домашние задание 1</option>\
                    <option value="11">Домашние задание 2</option>\
					</select>'
    }

    if (lab_menu == "17.1")
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Задание 4</option>\
                    <option value="5">Задание 5</option>\
					</select>'
    }

    if (lab_menu == "17.2")
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
                    <option value="4">Домашние задание 1</option>\
					</select>'
    }

    if (lab_menu == 18)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1.1</option>\
                    <option value="2">Задание 1.2</option>\
                    <option value="3">Задание 2</option>\
					</select>'
    }

    if (lab_menu == 19)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
					</select>'
    }

    if (lab_menu == 20)
    {
        var str =  '<select id="Lab_ex_menu" onchange="hy_ex()">\
                    <option value="1">Задание 1</option>\
                    <option value="2">Задание 2</option>\
                    <option value="3">Задание 3</option>\
					</select>'
    }

    document.getElementById("id_Lab_ex").innerHTML = str;
    
}


function hy_ex()
{

    var Lab_ex_N = +document.getElementById("Lab_ex_menu").value;

    var str='<pre align="left">Warning: "Error: чтото пошло не так"</pre>';
    var str2='<pre align="left">Warning: "Error: чтото пошло не так"</pre>';
    var str4='<b2>Warning: "Error: чтото пошло не так"</b2>';

    document.getElementById("labs_code").innerHTML = str;
    document.getElementById("id_labs_out").innerHTML = str2;
    document.getElementById("id_tema").innerHTML = str4;
    document.getElementById("id_ccel").innerHTML = str4;

    // console.log(Lab_ex_N)
    // console.log(semester)
    // console.log(lab_menu)
    

    if(semester == 1)
    {
        if(lab_menu == 2){upd_lab_2_code(Lab_ex_N);}
        if(lab_menu == '3.1'){upd_lab_3_1_code(Lab_ex_N);}
        if(lab_menu == '3.2'){upd_lab_3_2_code(Lab_ex_N);}
        if(lab_menu == 4){upd_lab_4_code(Lab_ex_N);}
        if(lab_menu == 5){upd_lab_5_code(Lab_ex_N);}
        if(lab_menu == '6-7'){upd_lab_6_7_code(Lab_ex_N);}
        if(lab_menu == '8-9'){upd_lab_8_9_code(Lab_ex_N);}
        if(lab_menu == 10){upd_lab_10_code(Lab_ex_N);}
    }

    if(semester == 2)
    {   
        if(lab_menu == 11){upd_lab_11_code(Lab_ex_N);}
        if(lab_menu == 12){upd_lab_12_code(Lab_ex_N);}
        if(lab_menu == 13){upd_lab_13_code(Lab_ex_N);}
        if(lab_menu == 14){upd_lab_14_code(Lab_ex_N);}
        if(lab_menu == 15){upd_lab_15_code(Lab_ex_N);}
        if(lab_menu == 16){upd_lab_16_code(Lab_ex_N);}
        if(lab_menu == "17.1"){upd_lab_17_1_code(Lab_ex_N);}
        if(lab_menu == "17.2"){upd_lab_17_2_code(Lab_ex_N);}
        if(lab_menu == 18){upd_lab_18_code(Lab_ex_N);}
        if(lab_menu == 19){upd_lab_19_code(Lab_ex_N);}
        if(lab_menu == 20){upd_lab_20_code(Lab_ex_N);}
    }

    
}





