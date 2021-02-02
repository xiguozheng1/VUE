// 编程范式：命令式编程/声名式编程
// 编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民:函数)
// filter/map/reduce
// filter中的回调函数有一个要求，必须返回一个boolean值
// true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false：当返回false时，函数内部会过滤掉这次的n
const nums = [10, 20, 111, 2222, 444, 40, 50]

// 箭头函数写法
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total);


// let total = nums.filter(function (n) {
//   return n < 100
// }).map(function (n) {
//   return n * 2
// }).reduce(function (preValue, n) {
//   return preValue + n
// }, 0);
// console.log(total);


// // 1.filter函数的使用
// // 10 20 40 50
// let newNums = nums.filter(function (n) {
//   return n < 100
// });
// console.log(newNums);
//
// // 2.map函数的使用
// // 20, 40, 80, 100
// let numbers = newNums.map(function (n) {
//   return n * 2
// });
//
// // 3.reduce函数的使用
// // reduce作用对数组中所有的内容进行汇总
// numbers.reduce(function (preValue, n) {
//   return preValue + n
// }, 0)