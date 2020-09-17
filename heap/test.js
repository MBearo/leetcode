const { swap } = require('../util')

class MinHeap {
  constructor() {
    this.heap = []
  }
  getParentIndex(index) {
    if (index === 0) return undefined
    return Math.floor((index - 1) / 2)
  }
  getLeftIndex(index) {
    return 2 * index + 1
  }
  getRightIndex(index) {
    return 2 * index + 2
  }
  insert(val) {
    this.heap.push(val)
    this.top(this.heap.length - 1)
  }
  extract() {
    const minimum = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bottom(0)
    return minimum
  }
  findMinimum() {
    return this.heap[0]
  }
  top(index) {
    const parentIndex = this.getParentIndex(index)
    if (parentIndex !== undefined && this.heap[parentIndex] > this.heap[index]) {
      swap(this.heap, index, parentIndex)
      this.top(parentIndex)
    }
  }
  bottom(index) {
    const value = this.heap[index]
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    const left = this.heap[leftIndex]
    const right = this.heap[rightIndex]
    let i = index

    if (value > left) [
      i = leftIndex
    ]
    if (value > right) {
      i = rightIndex
    }
    if (i !== index) {
      swap(this.heap, index, i)
      this.bottom(i)
    }
  }
}

const heap = new MinHeap()
heap.insert(5)
heap.insert(2)
heap.insert(4)
heap.insert(3)
heap.insert(1)



console.log(heap.heap)
console.log(heap.extract())
console.log(heap.heap)