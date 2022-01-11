
/* 
MAJOR NUMBER OF ARRAY
*/

const arrayNum = [ 85, 798, 5000, 4999, 4, 165 ]

const majorNum = arrayNum.reduce( (acc, el) => acc > el ? acc : el )

console.log(majorNum)