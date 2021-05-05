const n = [3,6,9,12,15];
let quadrados = n.map(function(item){
    return Math.pow(item, 2);
})

console.log(n);
console.log(quadrados);