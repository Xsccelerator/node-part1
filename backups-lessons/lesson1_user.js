const user = {
    name: "Elena",
    age: "25"
}
module.exports = {
    user: user, //экспортитруем константу-объект юзер
sayHello(){   //Экспортируем функцию, которая будет писать привет - метод
        console.log('hello from user')
    }
}

