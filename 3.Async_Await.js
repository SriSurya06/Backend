function fun1(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Wingardium Levoisa")
        },2000);
    })
};

const fun2=async()=>{
    console.log("Swish and Flick");
    const res=await fun1("123");
    console.log(res);
    console.log("Spell Successful");
};
fun2();