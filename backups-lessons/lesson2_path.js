const path = require('path')
console.log(path.basename(__filename )) //index.js
console.log(path.dirname(__filename )) //C:\data\projects\node-basic\node-part1
console.log(path.extname(__filename )) // .js
//////////////////////////////////////////////////////////////////////////////
console.log(path.parse(__filename )) 
// {
//     root: 'C:\\',
//     dir: 'C:\\data\\projects\\node-basic\\node-part1',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }
//////////////////////////////////////////////////////////////////////////////

//Прописываем пути
console.log(path.join(__dirname, '../test', './/second.html' )) //C:\data\projects\node-basic\test\second.html
console.log(path.resolve(__dirname, '../../test', '/second.html' )) //C:\data\projects\node-basic\test\second.html
console.log(path.normalize(__dirname, '../..&&/test', '/&&*@#@second.html' )) //C:\data\projects\node-basic\test\second.html