console.log('hello', __dirname) // получаем папку, в которой находится файл
console.log('hello', __filename) // получаем полный адрес данного файла

const obj = require ('./lesson1_user')  //Пример импорта( импортируем объект user и метод sayHello() 

console.log('hello', obj.user) //объект user
obj.sayHello()                 //и метод sayHello()  

//как это работает модульность
//В JS есть функции, которые вызывают сами себя (function(){})()
//Поэтому за кулисами NodeJS оборачивает модули конструкцией
//  внутри функция передает глобальные объекты
// (function(require, module, exports, __filename, __dirname){ 
//     console.log('hello')
// })()
// Благодаря чему наши модули могут сами себя запускать 
//Т.е. на самом деле наш код выглядит так, он конечно не заработает
//потому что данный код тоже обернется в такую конструкцию, здесь она только для примера
// (function(require, module, exports, __filename, __dirname){ 
//     console.log('hello', __dirname)
//     console.log('hello', __filename)
//     const obj = require ('./user') 
//     console.log('hello', obj.user)
//     obj.sayHello() 
//     })()