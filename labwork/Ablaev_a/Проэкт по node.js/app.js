/*console.log('Hi,js')
var a=15, b=112
console.log('Сумма = ', a+b)*/


var express = require('express')
var app = express()
var bParser = require('body-parser')
app.use(bParser.json());
app.use(bParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  var form = '<!DOCTYPE html>\
  <html lang="en">\
  <head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <meta http-equiv="X-UA-Compatible" content="ie=edge">\
    <title>Form</title>\
  </head>\
  <body>\
    <form class="" action="/page_test" method="post">\
      <input type="text" name="text" value="сюды имья своэ">\
      <button <a href ="https://google.com">Нажми сюды!</button>\
    </form>\
  </body>\
  </html>\
'
        res.send(form)
        })
app.listen('3211',function(){
  console.log('сервер работает на порту 3211')
})
  app.post ('/page_test',function(req,res){

    res.send ('asd')


  })
/*var express = require('express')
var app = express()
app.get('/', function())*/
/*  марк
var express = require("express")
var bParser = require("body-parser")
var app = express()
app.use(bParser.json())
app.use(bParser.urlencoded({extended:true}))

app.get("/", function(req,res){
var form =
'<!DOCTYPE html>
<html lang=\"rus\">
<head>
 <meta charset=\"UTF-8\">
 <title>Form</title>
</head>
<body>
<form class=\"\" action=\"page-t\" method=\"post\">
<input type=\"text\" name=\"text\" value=\"Enter your name\">
<button> Enter</button>
</form>
</body>
</html>
'
res.send(form)
})
app.listen("3000", function(){
console.log("Сервер работает и слушает порт 3000")
})

app.post("/page_test", function(req, res){
console.log("Данные записаны"+req.body)
res.send("Привет от сервера"+req.body)
})
*/


/*исправленнно марк
var express = require("express")
var bParser = require("body-parser")
var app = express()
app.use(bParser.json())
app.use(bParser.urlencoded({extended:true}))

app.get("/", function(req,res){
var form ='\
<!DOCTYPE html>\
<html lang=\"rus\">\
<head>\
 <meta charset=\"UTF-8\">\
 <title>Form</title>\
</head>\
<body>\
<form class=\"\" action=\"page-t\" method=\"post\">\
<input type=\"text\" name=\"text\" value=\"Enter your name\">\
<button> Enter</button>\
</form>\
</body>\
</html>\
'
res.send(form)
})
app.listen("3000", function(){
console.log("Сервер работает и слушает порт 3000")
})

app.post("/page-t", function(req, res){
console.log("Данные записаны"+req.body)
res.send("Привет от сервера"+req.body)
})*/





/*roma
var express = require('express') //подключение модуля express
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended:true}))


app.get("/", function(req,res){ //используя метод get прописываем обработку root маршрута браузера
var form = '\
<html lang="en">\
<head>\
<meta charset="UTF-8">\
<meta name="viewport" content="width=device-width, initial-scale=1.0">\
<meta http-equiv="X-UA-Compatible" content="ie=edge">\
<title>Document</title>\
</head>\
<body>\
<form class="" action="page_test" method="post">\
<input type="text" name="text" value="сюды имья своэ">\
<button>Нажми сюды!</button>\
</form>\
</body>\
</html>\
'

res.send(form)

})
app.listen('3030', function () { console.log("server rabotaet") }) //этой командай запускаем node js сервер (3000 порт доступа)

app.post('/page_test', function (req, res) {
res.send('dfs');
console.log(req.body)
})*/
