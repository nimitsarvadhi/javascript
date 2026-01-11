//arrays, objects, destructuring of arrays and objects, array methods
arr1 = [1,2,3,4,5]
for(let ele of arr1){
    console.log(ele)
}
let [a,b] = arr1
const obj1 = {
    name : "Nimit",
    age : 21
}
let {name} = obj1
console.log(name,a,b)

let arr2 = arr1.map((ele)=> ele * 2)
console.log(arr2)

let arr3 = arr1.filter((ele)=> (ele%2==0))
console.log(arr3)

let arr4 = arr1.reduce((res,ele)=>(res + ele),0)
console.log(arr4)