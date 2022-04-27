const data = [1,2,3,4,5,6];

function check(num){
    // Need to return boolean response
    return num % 2 == 0;
}

const res = data.filter(check);
console.log(data);
console.log(res);

const res1 = data.filter(function(num){
    return num%3 ==0;
});
console.log(data);
console.log(res1);

// const res2 = data.filter(num => num%2 ==0);
const res2 = data.filter((num) => {return num%2 ==0});
console.log(data);
console.log(res2);