//difference between this in normal function and arrow function

function normal(){
    console.log(this)
}
let a = ()=>{
    console.log(this)
}
normal()
a()