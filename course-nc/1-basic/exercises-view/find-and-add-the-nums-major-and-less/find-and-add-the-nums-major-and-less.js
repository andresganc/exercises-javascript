

const arr1 = [ 5, 8, 9, 45, 2 ]
const arr2 = [ 8, 7, 54, 6, 4 ] 

const numLess = ( arr1, arr2 ) => {

    let numLess1 = arr1.reduce( (acc, el) => acc < el ? acc : el )
    let numLess2 = arr2.reduce( (acc, el) => acc < el ? acc : el )
    let totalLess = numLess1 + numLess2

    let numMajor1 = arr1.reduce( (acc, el) => acc > el ? acc : el )
    let numMajor2 = arr2.reduce( (acc, el) => acc > el ? acc : el )
    let totalMajor = numMajor1 + numMajor2

    return console.log(`The numbers less are: ${numLess1} and ${numLess2} total: ${totalLess} And The numbers majors are: ${numMajor1} and ${numMajor2} total: ${totalMajor} ` )

}

numLess( arr1, arr2 )