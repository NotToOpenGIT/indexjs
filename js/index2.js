console.time("start");
console.log("RICK HARIJAN");
console.log(["rick","sayan","sonjay","sourin","rahul"]);
console.table(["rick","sayan","sonjay","sourin","rahul"]);
console.log({"rick":212,"sayan":230,"sonjay":275,"sourin":369,"rahul":455});
console.table({"rick":522,"sayan":432,"sonjay":521,"sourin":423,"rahul":323});
// console.error("print sucess");
// console.warn("it ia a warning of sucesss");
console.assert(23>22,"yes");
console.timeEnd("start");
// changeable variable
var a,b,c,d;
a=33;
b=65;
c=98;
d=a+b+c;
console.log(d);
// unchageable variable 
const ownername="RICK HARIJAN";
// ownername="sanjay"
console.log(ownername)
// local variable
{
    let a,b,c,d;
    a=30;
    b=20;
    c=10;
    d=a+b+c;
    console.log(d)
}
//primitive data types::::::---------->>>>
// string----->
let name=`RICK HARIJAN`;
console.log("the string is : " , name)

//numbers------>
console.log("the typeof oparater is : " + (typeof name))
let number=88976786;
console.log("the number have : ",number)
console.log("the data type is: ",(typeof number))
//boolean------>
let boolean=true;
console.log("the boolean is:"+boolean);
console.log("the data type is :",(typeof boolean));
//null--------->
let nullvar=null;
console.log("the null have:",nullvar);
console.log("the datatype is: ",(typeof nullvar))

//undefined------>
let undef=undefined;
console.log("the undefined have this: ",undef);
console.log("the datatype is : ",undef)

// Reference datatypes:::::------------>>>>>>>


// Array
let arr=[21,43,3,3,3,"rick","any primitive data types can br used",true,undefined,null,]
console.log(arr);
console.log("data type:",(typeof arr));

//object literals
let marks={
    harry:456,
    rick:336,
    sanjay:347,
    sayan:763,
    soumen:425
}
console.log("the marks is : ",marks);
console.log("the datatype is : ",(typeof marks));

//function 
function find(){

}
console.log(find);
console.log(typeof find);

//date
{let date1= new Date();
console.log(typeof date1);
}

//type of conversion and type of coercion
let my;
my=String (76);
console.log(my,(typeof my),my.length);


let date1=String(new Date);
console.log(date1,(typeof date1));

let numb=Number(false);
console.log(numb,(typeof numb));

let bool=Boolean(1);
console.log(bool,(typeof bool));

let a11=window;
console.log(a11)

//let q=window.prompt("this will disrtoy you computer???")
// console.log(q);
// console.log(q)

//let w=window.confirm("are you sure ");
//console.log(w);

// let e=location;
// console.log(e)





















