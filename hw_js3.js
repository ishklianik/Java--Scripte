// возведение в степень числа
// const result = Math.pow(2,10)
// console.log(result)

// п.1 возведение 2  в степень 10 и выведение результата начиная с 1 степени
// let a=0 
// while(a<=10) {
// result = Math.pow(2,a)  
// console.log(a, result)
// a ++}

// п.1* преобразовать 1 в функцию принимающую на вход степень в которую будет возводится число

// const checkpow=
//  function(a) {
// while(a<=10) {
// result = Math.pow(2,a)  
// console.log(a, result)
// a ++}
//  }
// checkpow(8)

// п.2 5 строк в консоль чтобы в первой выводился 1 смайл. во 2 - 2 и т.д. до 5

// for(let i = 1; i<=5; i++)
// console.log(i, ":)".repeat(i))

// п.2* преобразовать п.2 в функцию , которая берет на вход и строку и количество строк для вывода

// function printSmile(stroka, numberOfRows) {
// for(let i = 1; i<=numberOfRows; i++)
// console.log(i, stroka.repeat(i))
// }
// printSmile(":)", 8)

// п.3 создать функцию которая принимает на вход  слово. Функция подсчитывает гласные и согласные и выдает в консоли
// слово(ворд) состоит из (число) гласных и (число ) согласных

// function getWordStructure(word) {
//     let i = 0
//     let result1 = 0
//     let result2 = 0
           
//     while(i < word.length) {
        
//         let symb = word[i].toLowerCase()
//         if(symb !== "-") {
//             if(symb=="a" || symb=="e" || symb=="y" || symb=="u" || symb=="i" || symb=="o" ) 
//             {
//                 result1 +=1
//             }
//             else
//             {
//                 result2 +=1  
//             }
//         }    
//         i++
//     }
    
//     console.log("Слово" + " " + word + " " + "состоит из"+ " " + result1 + " " + "гласных и" + " " + result2 + " " + "согласных.");
    
// }

//    getWordStructure('case')
//    getWordStructure('Case')
//    getWordStructure('Check-list')


//  п.4 Написать функцию , проверяющую является ли слово палиндромом


// function isPalindrom(word) {
//     let i = 0
//     let a = Math.trunc(word.length/2)
//     let result1 = 0    
    
//     while(i <= a-1) {
            
//         let symb1 = word[i].toLowerCase();
//         let symb2 = word[word.length-1-i].toLowerCase();
    
//         if(symb1!==symb2) 
//         {
//             console.log("Word" + " " + word + " " + "is not palindrom") 
//             break;
//         }
//         else { result1 += 1 }   
    
//     i++}
    
//     if(result1==a) 
//     {
//         console.log("Word" + " " + word + " " + "is palindrom") 
//     }
// }   

// isPalindrom("Abba")
// isPalindrom("abba")


function isPalindrom(word) {
    let i = 0;
    let len = word.length;
    let a =  len/2;
        
    let res = "Word" + " " + word + " " + "is palindrom";
                
    while(i <= a-1) {
            
        let symb1 = word[i].toLowerCase();
        let symb2 = word[len-1-i].toLowerCase();
    
        if(symb1!==symb2) 
        {
            res = "Word" + " " + word + " " + "is not palindrom";
            break;
        }
            
    i++}
    
    console.log(res) 
    
}

isPalindrom("Abba")
isPalindrom("abba")