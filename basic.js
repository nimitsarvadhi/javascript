function outer(){
    var count = 0
    return function inner(){
        count++;
        console.log(count)
    }
}

let call1 = outer()
call1();
call1();
call1();