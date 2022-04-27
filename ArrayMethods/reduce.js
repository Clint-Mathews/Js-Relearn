const data = [1,2,3,4,5,6,7,8,9,10]

const res = data.reduce(function(accumulator,currentValue) { return accumulator+currentValue},0)

console.log(res);

// Accumulator  currentValue return
// 1             2           3
// 3             3           6
// 6             4           10
// 10 ...

const userCart = [
    {id:1,name:"Mobile",price:12000},
    {id:2,name:"Laptop",price:12000},
    {id:3,name:"tv",price:15000},
]

const cartPrice = userCart.reduce(
    (totalPrice,currentProduct) => {
        return totalPrice+currentProduct.price
    },0)

// totalPrice  currentProduct return
// 0             12000           3
// 12000             12000           6
// 24000             15000           39000

console.table(userCart);
console.table(`CartPrice : ${cartPrice}`);