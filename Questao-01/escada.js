//como executar no terminal visual studio rode: node -v, ls, node escada.js

let array = []
function creatingInput(n) {
  for (let i = 0; i < n; i++) {
    array.push(' '.repeat(n - i - 1) + '*'.repeat(i + 1))
  }
  for (const n of array) {
    console.log(n)
  }
}

creatingInput(6)

