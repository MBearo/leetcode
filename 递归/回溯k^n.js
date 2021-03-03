const arr = [4, 3, 2, 3, 5, 2, 1]
const k = 4
// 把arr分成k组，有几种组合？
// k^(arr.length)
const result = []
function go(list, i) {
  if (list.length === arr.length) {
    result.push(list.slice())
    list = []
    return
  }
  for (let j = 0; j < k; j++) {
    list.push(j)
    go(list, i++)
    list.pop()
  }
}
go([], 0)
const ans = []
for (let i = 0; i < result.length; i++) {
  let temp = {}
  for (let x = 0; x < k; x++) {
    temp[x] = []
  }
  for (let j = 0; j < result[i].length; j++) {
    temp[result[i][j]].push(arr[j])
  }
  ans.push(temp)
  temp = {}
}
console.log(ans);
//[{0:[4,3],1:[3,5],2:[4],4:[5]}]
//数组内的对象，key是组，value就是这个组里所有的数

// 然后下面把value数组的值计算和，方便下面使用
for (let i = 0; i < ans.length; i++) {
  const element = ans[i];
  for (const key in ans[i]) {
    const element = ans[i][key];
    ans[i][key] = element.reduce((a, b) => a + b, 0)
  }
}

function x() {

  for (let i = 0; i < ans.length; i++) {
    let last = true
    for (const key in ans[i]) {
      const element = ans[i][key];
      if (element !== ans[i][0]) {
        last = false
        break
      } else {
        last = true
      }
    }

    if (last) {
      console.log(ans[i]);
      return true
    }
  }
  return false
}
x()