/**
 * @description 桶排序
 */
const { insertionSort } = require('./insert-sort')

function createBuckets(array, bucketSize) {
  let minValue = array[0]
  let maxValue = array[0]
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element < minValue) {
      minValue = element
    } else if (element > maxValue) {
      maxValue = element
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = []
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(array[i])
  }
  return buckets
}
function sortBuckets(buckets) {
  const sortedArray = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i])
      sortedArray.push(...buckets[i])
    }
  }
  return sortedArray
}

function bucketSort(array, bucketSize) {
  return sortBuckets(createBuckets(array, bucketSize))
}