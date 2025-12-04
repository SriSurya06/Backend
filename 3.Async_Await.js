function fun1(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Wingardium Levoisa") // Spell
        },2000);
    })
};

const fun2=async()=>{
    console.log("Swish and Flick"); //Wand Movement
    const res=await fun1("123");
    console.log(res);
};
fun2();