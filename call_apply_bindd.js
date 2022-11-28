
//Ans 1 ---------

var obj={num:2}
var add=function(a,){
    return this.num+a;
} 

var ans=add.call(obj,6)
console.log(ans)

//Ans 2-----------

var obj={num:2}
var add=function(a,b,c){
    return this.num+a+b+c;
} 

var arr=[3,2,3]
var q=add.apply(obj,arr)
console.log(q)

//Ans 3---------

var obj={num:2}
var add=function(a,b,c){
    return this.num+a+b+c;
} 

var bound=add.bind(obj);
console.log(bound(3,2,5));

//Ans 4 -----------

var Student={age:20}
var s=function(){
    return this.age
}

var a=s.bind(Student)
console.log(a())



let multiply = function(x,y){
    console.log(x*y)
}

let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5)

let multiplyByThree=multiply.bind(this,3);
multiplyByThree(5)

let multiply1=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo1=multiply1(2);
multiplyByTwo1(3)

let multiplyByThree1=multiply1(3);
multiplyByThree1(10)