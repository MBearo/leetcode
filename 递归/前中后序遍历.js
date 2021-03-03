//都是深度优先遍历（DFS），根节点在子节点的位置来决定是什么序遍历。
//比如根节点在左右子节点之前，就是先序遍历
var a = {
  v: 1,
  l: {
    v: 2,
    l: {
      v: 4,
      l: null,
      r: null
    },
    r: {
      v: 5,
      l: null,
      r: null
    }
  },
  r: {
    v: 3,
    l: {
      v: 6,
      l: null,
      r: null
    },
    r: {
      v: 7,
      l: null,
      r: null
    }
  }
}
let value = []

function go(node) {
  //前序
  value.push(node.v)
  if (node.l) {
    go(node.l)
  }
  //中序
  //value.push(node.v)
  if (node.r) {
    go(node.r)
  }
  //后序
  //value.push(node.v)
}
go(a)