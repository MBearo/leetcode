const { swap } = require('../util')

function bubbleSort(array) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}
console.log(bubbleSort([5,3,5,71,3,4,6]))