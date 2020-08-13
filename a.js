// 全排列
var list1 = ['a', 'b', 'c', 'd']

function aaa(list, banList, arr) {
  if (banList.length === list.length) {
    return arr.push([...banList])
  }
  for (let i = 0; i < list.length; i++) {
    if (banList.includes(list[i])) {
      continue
    }
    banList.push(list[i])
    aaa(list, banList, arr)
    banList.pop()
  }
}
function start() {
  const arr = []
  aaa(list1, [], arr)
  return arr
}
console.log(start());