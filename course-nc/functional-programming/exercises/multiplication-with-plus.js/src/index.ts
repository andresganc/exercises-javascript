
/*

MULTIPLICATION WITHOUT X

- Should multiply without sign of multiply. Only with the sign plus
- Should check if is positive or negative  
- Should have test

int: a(number), b(number)
out: result(number)

For Example: 5 x 5 = 25
Intern Calculate: 5 + 5 + 5 + 5 + 5

Steps
1. Create funtion with arguments num1 - num2
2. Check if is positive or negative
3. Logic for multiplication with plus
4. Do test

*/

const multiply = ( a: number, b: number ): number => {
    
    let result = 0
    const positive = Math.abs(b) == b

    for (let i = 0; i < Math.abs(b); i++) {
        
        result = positive ? result + a : result - a

    }
    
    return result 

}

console.log( multiply(5, 5) )


export default multiply


