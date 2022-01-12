

const arr1 = [ 5, 8, 9, 45, 2 ]
const arr2 = [ 8, 7, 54, 6, 4 ] 

const numLess = ( arr1 ) => {

    let numLess1 = arr1.reduce( (acc, el) => acc < el ? acc : el )
    return console.log( numLess1 )

}

numLess( arr1 )