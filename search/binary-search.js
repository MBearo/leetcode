function myBinarySearch(array, value) {
  let left = 0
  let right = array.length - 1
  let index = Math.floor((left + right) / 2)
  if (array[index] === value) {
    return index
  } else if (array[index] > value) {
    return binarySearch(array.slice(left, index), value)
  } else if (array[index] < value) {
    return binarySearch(array.slice(index), value)
  } else {
    return -1
  }
}
//iterate
function binarySearch1(array, value) {
  let low = 0
  let high = array.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = array[mid]
    if (element < value) {
      low = mid + 1
    } else if (element > value) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
//recursive
function binarySearch2(array, value) {

}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4))