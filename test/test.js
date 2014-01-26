//TESTING
var qSortSync = require('../index.js').qSortSync;
var qSort = require('../index.js').qSort;
var should = require('should');

var NOTNUMARR = [2, 'yofine', 3, 1, 5];
var NOTNUMSTR = '2 yofine 3 1 5';
var NUMARR = [2, 3, 1, 5, 4];
var NUMSTR = '2 3 1 5 4';
var NOTARRORSTR = {};

//Synchronous
describe('Synchronous', function () {
  describe('NUMARR', function () {
    var result;
    it('should be an ARRAY', function () {
      result = qSortSync(NUMARR);
      result.should.be.an.instanceof(Array);
    })
    it('should return -1 when the value is not present', function () {
      result.indexOf(6).should.equal(-1);
      result.indexOf(0).should.equal(-1);
    })
    it('should return index when present', function () {
      result.indexOf(1).should.equal(0);
      result.indexOf(2).should.equal(1);
      result.indexOf(3).should.equal(2);
      result.indexOf(4).should.equal(3);
      result.indexOf(5).should.equal(4);
    })
  })
  describe('NUMSTR', function () {
    var result;
    it('should be an ARRAY', function () {
      result = qSortSync(NUMSTR);
      result.should.be.an.instanceof(Array);
    })
    it('should return -1 when the value is not present', function () {
      result.indexOf(6).should.equal(-1);
      result.indexOf(0).should.equal(-1);
    })
    it('should return index when present', function () {
      result.indexOf(1).should.equal(0);
      result.indexOf(2).should.equal(1);
      result.indexOf(3).should.equal(2);
      result.indexOf(4).should.equal(3);
      result.indexOf(5).should.equal(4);
    })
  })
})


//Asynchronous
