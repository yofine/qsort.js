var qSortSync = require('../index.js').qSortSync;
var qSort = require('../index.js').qSort;

var NUMARR = [2, 1, 5, 100, 15, 3, 25, 1, 90, 85];
var NUMSTR = '2 1 5 100 15 3 25 1 90 85'

//Asynchronous
qSort(NUMARR, function (err, result) {
  if (err)  throw err;
  console.log('\033[37mAsync NUMARR : \033[39m')
  console.log(result);
})

qSort(NUMSTR, function (err, result) {
  if (err)  throw err;
  console.log('\033[37mAsync NUMSTR : \033[39m')
  console.log(result);
})

//Synchronous
var result1 = qSortSync(NUMARR);
var result2 = qSortSync(NUMSTR);

console.log('\033[37mSync NUMARR : \033[39m')
console.log(result1);

console.log('\033[37mSync NUMSTR : \033[39m')
console.log(result2);
