console.clear()
console.log("JavaScript")
console.log("function");

addEventListener("keydown",
function change(e){
    // console.log(e);
    if (e.code=="ArrowUp"){
    let a=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let c=Math.floor(Math.random()*256)
    document.body.style.backgroundColor=`rgb(${a},${b},${c})`;
    // console.log(a,b,c);
    }
    
    




    else if(e.code=="ArrowDown"){

    let h1=document.querySelector("h1");
    h1.style.color=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

    let div=document.getElementById("qwe");
    div.style.color=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

}

})

