// 1.Создать функцию в которой будите проверять значение переменной age_1
let age_2 = 18
let age_3 = 60

// const checkAge = 
// function(age) {
//   if(age<age_2)
// { console.log(age, "You don't have access cause your age is"+ " " + age + " " + "It's less then" ) }
// else if(age >= age_2 && age < age_3)
// { console.log(age, "Welcom !") }
// else if(age > age_3)
// { console.log( age, "Keep calm and look Culture channel") }
// else {console.log(age, "Technical work") }
// }


// // console.log
// checkAge(61)
// checkAge(17)
// checkAge(18)
// checkAge(60)



//  2. первым делом в функции проверяется тип данных и если не чило, выдает ошибку. 

// const checkAge = 
// function(age) {
//    if(typeof age == 'number') {
// if(age<age_2)
// { console.log(age, "You don't have access cause your age is"+ " " + age + " " + "It's less then" ) }
// else if(age >= age_2, age < age_3)
// { console.log(age, "Welcom !") }
// else if(age > age_3)
// { console.log( age, "Keep calm and look Culture channel") }
// else {console.log(age, "Technical work") }
// }
//    else console.log ('Not an integer value')
// }
// // console.log
// checkAge(61)
// checkAge(17)
// checkAge(18)
// checkAge(60)
// checkAge('12')
// checkAge('aaa')

// 3. преобразовать, чтобы брало  '2', не пропускало пустую строку и 0.

const checkAge = 
function(age) {
   if(age && !isNaN(age)) 
   // это означает, что есть и число и преобразованное значение в number не является Nan 
   { 
if(age<age_2)
{ console.log(age, "You don't have access cause your age is"+ " " + age + " " + "It's less then" ) }
else if(age >= age_2, age < age_3)
{ console.log(age, "Welcom !") }
else if(age > age_3)
{ console.log(age, "Keep calm and look Culture channel") }
else {console.log(age, "Technical work") }
}
   else console.log (age, 'Not an integer value')
}
checkAge(61)
checkAge(17)
checkAge(18)
checkAge(60)
checkAge('12')
checkAge('aaa')
checkAge(0)
checkAge( )


// 4. Вывести в браузер. Для этого создаем check.html документ и устанавливаем расширения Autocomplete , live server
// в нем прописываем скрипт ссылки на JS  документ 


// const checkAge = function(age) {
//    if(age && !isNaN(age)) 
//     { 
//       if(age<age_2)
//          { alert("You don't have access cause your age is"+ " " + age + " " + "It's less then" ) }
//       else if(age >= age_2 && age < age_3)
//          {alert("Welcom !") }
//       else if(age > age_3)
//          { alert("Keep calm and look Culture channel") }
//       else {alert("Technical work") }
//       }
//    else alert('Not an integer value')
      
// }

// let a = prompt('Enter your age')
// checkAge(a)
