//Callbacks

function call(a,b,callback){
    return callback(a,b)
}
function add(a,b){
    return a + b;
}
let sum = call(5,6,add)
console.log(sum)