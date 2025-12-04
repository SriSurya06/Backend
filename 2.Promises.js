function fun1(a){
    return new Promise((resolve,reject)=>{
        // console.log("Calling Fun1");
        resolve({b:"Human"})
    })
}

function fun2(b){
    return new Promise((resolve,reject)=>{
        // console.log("Calling Fun2");
        resolve({c:"DemiGod"})
    })
}
function fun3(c){
    return new Promise((resolve,reject)=>{
        // console.log("Calling Fun3");
        console.log("= Demigod");
        resolve("A demigod is a half god and half human");
    })
}
fun1("God").then((result)=>{
    console.log("God +")
    return fun2(result.b)
}).then((result)=>{
    console.log(" Human")
    return fun3(result.c)
}).then((result)=>console.log(result))
    .catch((error)=> console.log(error))