// Rest Parameters: Collect multiple arguments into an array. 
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3, 4, 5, 6)); 