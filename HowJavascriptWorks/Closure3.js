function myFunction(power){
    return function(base){
        return base ** power;
    }
}

const square = myFunction(2)
console.log(square(5))
const cube = myFunction(3)
console.log(cube(3))


arrowfn = power => base => base ** power
const squares = arrowfn(2)
console.log(squares(5))
const cubes = arrowfn(3)
console.log(cubes(3))
