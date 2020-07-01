/**
 * @description 归并排序
 */
function mergeSort(array) {
  const { length } = array
  if (length > 1) {
    // https://visualgo.net/zh/sorting 这里的归并用的 Math.ceil
    // 书里用的 Math.floor
    const middle = Math.ceil(length / 2)
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(middle, length))
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

mergeSort([29, 10, 14, 37, 14])