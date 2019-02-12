//1-е ###########################
console.log('1 задание')
console.log('_____________________________________')
var surname = "Мартыненко"
var name = "Роман"
var patronymic = "Сергеевич"
var out = surname + " " + name + " " + patronymic;
console.log("Длина слова '" + surname + "' равна " + surname.length)
console.log("Длина слова '" + name + "' равна " + name.length)
console.log("Длина слова '" + patronymic + "' равна " + patronymic.length)
console.log(out)
console.log("Длина ФИО '" + out + "' равна " + out.length)

console.log("Тип переменной 'surname' = " + typeof surname)
console.log("Тип переменной 'name' = " + typeof name)
console.log("Тип переменной 'patronymic' = " + typeof patronymic)

console.log('_____________________________________')
//2-е ###########################
console.log('2 задание')
console.log('_____________________________________')
var skorogovorka = "Шла Саша по шоссе"

console.log(skorogovorka)
console.log("Первые 2 буквы - " + skorogovorka.charAt(0) + " " + skorogovorka.charAt(1))
console.log("Первые 2 буквы - " + skorogovorka.charAt(skorogovorka.length - 2) + " " + skorogovorka.charAt(skorogovorka.length - 1))

console.log('_____________________________________')
//3-е ###########################
console.log('3 задание')
console.log('_____________________________________')
var skorogovorka = "Шла Саша по шоссе"
console.log(skorogovorka)

console.log("Позиция первой пустой подстроки = " + skorogovorka.indexOf(" "))

console.log('_____________________________________')
//5-е ###########################
console.log('5 задание')
console.log('_____________________________________')
var skorogovorka = "Шла саша по шоссе"
console.log(skorogovorka)

console.log(skorogovorka.replace("с", "С"))

console.log('_____________________________________')
//6-е ###########################
console.log('6 задание')
console.log('_____________________________________')
var mistake = "Не хочу учится а хочу женится"
console.log(mistake)


mistake = mistake.replace("учится", "учиться,")
mistake = mistake.replace("женится", "жениться")
console.log(mistake)

console.log('_____________________________________')
