
var fl = require('./lib/filter.js');
var qs = require('./lib/qSort.js');

function qSortSync(arg) {
  var array = fl(arg);
  return qs(array);
}

function qSort(arg, callback) {
  try {
  var array = fl(arg);
  var result = qs(array);
  }
  catch (e) {
    return callback(e);
  }
  callback(null, result);
}

if (typeof module !== 'undefined')
  module.exports.qSortSync = qSortSync;
  module.exports.qSort = qSort;
