function qSort (array) {
  if (array.length <= 1) return array;
  var pivotIndex = Math.floor(array.length / 2);
  var pivot = array.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < array.length; i++) {
    (array[i] < pivot)
      ? left.push(array[i])
      : right.push(array[i]);
  }
  return qSort(left).concat([pivot], qSort(right));
}

//if (typeof mudule !== 'undefined')
  module.exports = qSort;
