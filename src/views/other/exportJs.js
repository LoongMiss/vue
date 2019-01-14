/** 第一种 一起导出(推荐）**/
const message = 'test'

function fn () {
  alert('1111111')
}

export {message, fn}

/** 第二种 自己导自己的**/
export const message1 = 'test1'

export function fn2 () {
  alert('fn2')
}

/** 第三种 **/
/** const message2 = 'test2'
export default message 2 **/

function fn3 () {
  alert('fn3')
}
/** 这样写是有问题的，每次重新加载的时候会执行你抛出的方法（也就是刷新页面的时候），
export default fn3() **/

export default fn3
