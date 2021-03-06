const { swap } = require('../util')

class MinHeap {
  constructor() {
    this.heap = []
  }
  // 获取左子节点
  getLeftIndex(index) {
    return 2 * index + 1
  }
  // 获取右子节点
  getRightIndex(index) {
    return 2 * index + 1
  }
  // 获取父节点
  getParentIndex(index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }
  // 添加元素
  insert(value) {
    if (value != null) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }
  // 上移元素
  siftUp(index) {
    let parent = this.getParentIndex(index)
    while (index > 0 && this.heap[parent] > this.heap[index]) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }
  // 移除第一个元素
  extract() {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return removedValue
  }
  // 下移元素
  siftDown(index) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()
    // 这里太妙了，尽量保证左子节点比右子节点小
    if (left < size && this.heap[element] > this.heap[left]) {
      element = left
    }
    if (right < size && this.heap[element] > this.heap[right]) {
      element = right
    }
    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
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