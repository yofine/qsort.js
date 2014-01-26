![Quick, Sort!](http://learnyousomeerlang.com/static/img/quicksort.png)   




#qSort-node    [![Build Status](https://travis-ci.org/FineLiu/qsort-node.png?branch=master)](https://travis-ci.org/FineLiu/qsort-node)


A quick sorting algorithm by nodejs

##Installation

    $ npm install qsort-node 
    
```js
var qSortSync = require('qsort-node').qSortSync;
var qSort = require('qsort-node').qSort;

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
```

##Running Tests

To run the test suite, first invoke the following command within the repo, installing the development dependencies:

    $ npm install
    
Then run the tests:

    $ make test
    
Or run the test-cov:

    $ make test-cov
    
##License

Copyright (c) 2014 FineLiu <yofineliu@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
