/**
 * @description 选择排序
 */
const { swap } = require("../util")

function selectSort(array) {
  const { length } = array
  let indexMin
  for (let i = 0; i < length - 1; i++) {
    indexMin = i
    //找最小值
    for (let j = i; j < length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin)
    }
  }
  return array
}
console.log(selectSort([4, 24, 6, 7, 3, 5, 2, 87]))