function fun1(a,callback){
    console.log(a);
    callback("Hello");
}
function fun2(b,callback){
    console.log(b);
    callback("Bye");
}
function fun3(c){
    console.log(c);
}
fun1("Hi",function(b){
    fun2(b,function(c){
        fun3(c);
    })
})
// fun1("Hi",fun2(b,fun3(c))); This doesn't work because you are calling fun3 
// and fun2 immediately
