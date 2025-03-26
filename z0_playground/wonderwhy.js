const word = "Arigato"
const word2 = ["h","a","l","l","o"]

console.log(word.charAt(0))
console.log(word.slice(1,3))
console.log()
console.log(word)
console.log("-------")
console.log(word2.reduce((word,word2)=>word+","+word2))
console.log(word2 instanceof Array)
// class stack{
//     constructor() {
//         this.items = [];
//     }
//     lastin(item) {
//         this.items.push(item)
//     }
//     firstout(){
//         this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     static get(){
//         return "hi"
//     }
// }

// const cd = new stack()
// cd.lastin("first")
// cd.lastin("second")
// console.log(cd.peek())
// cd.firstout()
// console.log(cd.peek())
