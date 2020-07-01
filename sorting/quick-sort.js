/**
 * @description 快速排序
 */
const { swap } = require('../util')

function quickSort(array) {
  return quick(array, 0, array.length - 1)
}
function quick(array, left, right) {
  if (array.length > 1) {
    const index = partition(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (right > index) {
      quick(array, index, right)
    }
  }
  return array
}
function partition(array, left, right) {
  const pivot = array[Math.floor((right + left) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j)
      i++;
      j--;
    }
  }
  return i
}
console.log(quickSort([3, 5, 1, 6, 4, 7, 2]))