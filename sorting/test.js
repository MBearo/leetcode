const { swap } = require("../util")


function mergeSort(array) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, middle))
    let right = mergeSort(array.slice(middle))
    array = merge(left, right)
  }
  return array
}
function merge(left, right) {
  let i = 0
  let j = 0
  const result = []
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++])
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

function quickSort(array) {
  return quick(array, 0, array.length - 1)
}

function quick(array, left, right) {
  if (array.length > 1) {
    let index = partition(array, left, right)
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
  const pivot = array[Math.floor((left + right) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }
  return i
}


console.log(quickSort([4, 6, 9, 7, 1, 9]));