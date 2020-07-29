const { swap } = require('../util')

function quickSort(array) {
  quick(array, 0, array.length - 1)
  return array
}
function quick(array, left, right) {
  // 当前数组的起始位置大于等于数组的末尾位置时退出递归
  if (left >= right) {
    return false;
  }
  let obj = partition(array, left, right);
  // 递归执行: 将没有大于 pivot,和小于 pivot 区间的元素在进行三路快排
  quick(array, left, obj.lt);
  quick(array, obj.gt, right);
}
/**
 *
 * @param array 需要进行三路快排的数组
 * @param left 数组的起始位置
 * @param right 数组的末尾位置
 * @returns {{lt: *, gt: *}}
 */
const partition = function (array, left, right) {
  // 基准值为数组的零号元素
  let pivot = array[left];
  // 左区间的初始值: left
  let lt = left;
  // 右区间的初始值: right+1
  let gt = right + 1;
  let i = left + 1
  while (i < gt) {
    if (array[i] === pivot) {
      // 当前i指向的元素等于 pivot
      i++;
    } else if (array[i] > pivot) {
      // 当前i指向的元素大于 pivot，将 gt-1 处的元素与当前索引处的元素交换位置，gt--
      swap(array, gt - 1, i)
      gt--;
    } else {
      // 当前i指向的元素小于 pivot，将 lt+1 处的元素与当前索引处的元素交换位置，lt+1，i+1
      swap(array, lt + 1, i)
      lt++;
      i++;
    }
  }

  // i走向gt处，除了基准值外的元素，其余的空间已经分区完毕，交换基准值与lt处的元素，lt-1，最终得到我们需要的三个区间
  swap(array, left, lt)
  lt--;
  console.log(`三路快排后的数组: ${array}`);
  return { lt, gt };
}
console.log(quickSort([3, 5, 1, 6, 4, 7, 2]))