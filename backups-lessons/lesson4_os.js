const fs = require('fs')
const path = require('path')
const EventEmitter = require('events')
const os = require('os')

//Платформа (win32)
console.log(os.platform())
//Архитектура (x64)
console.log(os.arch())
//Информация 
console.log(os.cpus())
//Свободная память (win32)
console.log(os.freemem())
//Вся память
console.log(os.totalmem())
//Домашняя папка (C:\Users\admin)
console.log(os.homedir())
//Сколько система работает
console.log(os.uptime())





