console.log("This is javaScript:----");



let z = document.getElementById("submit");
z.addEventListener("click", function () {

    let a = Number(document.getElementById("input1").value);
    let b = Number(document.getElementById("input2").value);
    let c;
    if (a==0&&b==0) {
        c=0;
        
    }
    else{
       c= Math.floor(a/b);
   
    
        }
    let sub = document.getElementById("para");
    sub.innerText = `   The + of the Number is: ${a + b},
                        The - of the Number is: ${a - b},
                        The * of the Number is: ${a * b},
                        The / of the Number is: ${c}
                        `
    
    
   
})


