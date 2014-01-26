//filter
function filter(arg) {
  var ERROR = {
    err1 : 'NOT ARRAY OR ATRING',
    err2 : 'NOT NUMARR',
    err3 : 'NOT NUMSTR'
  }

  var wyr = Object.prototype.toString.call(arg);

  if (wyr !== '[object Array]' && wyr !== '[object String]') {
    throw err.err1;
  }

  if (wyr === '[object Array]') {
    switch (isNumArr(arg)) {
      case true : return arg;
      break;
      case false : throw err.err2;
      break;
    }
  }

  if (wyr === '[object String]') {
    switch (isNumStr(arg)) {
      case true : return transform(arg);
      break;
      case false : throw err.err3;
      break;
    }
  }

  function isNumArr(arg) {
    var foo = [];
    var sum = 0;
    var verify;
    for (var i = 0; i < arg.length; i++) {
      foo.push(Object.prototype.toString.call(arg[i]) !== '[object Number]');
    }
    for (var j = 0; j < foo.length; j++) {
      sum += foo[j];
    }
    verify = sum === 0;
    return verify;
  }

  function isNumStr(arg) {
    arg = arg.split(' ');
    var foo = [];
    var sum = 0;
    for (var i = 0; i < arg.length; i++) {
      foo.push(Number(arg[i]).toString() === 'NaN');
    }
    for (var j = 0; j < arg.length; j++) {
      sum += foo[j];
    }
    var verify = sum === 0;
    return verify;
  }

  function transform(arg) {
    var array = arg.split(' ');
    var result = [];
    for (var i = 0; i < array.length; i++) {
      result.push(Number(array[i]));
    }
    return result;
  }
}

if (typeof module !== 'undefined')
  module.exports = filter;
