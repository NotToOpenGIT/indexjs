// console.clear()
console.log("hello Would");

let a=document.querySelectorAll("p");
console.log(a);

Array.from(a).forEach(function(element){console.log(element)})

function change(){
    document.body.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}



