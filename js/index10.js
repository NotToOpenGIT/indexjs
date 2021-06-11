let z = document.getElementById("submit");
z.addEventListener("click", function () {

    let a =document.getElementById("input1").value;
    let b,c,d,e;
    if(a.includes("+")){
        e=a.indexOf("+");
        b=Number(a.substring(0,e));
        c=Number(a.substring((e+1)));
        d=(b+c);
        let sub = document.getElementById("para");
        sub.innerText =`The ${a[e]} of the Numbers is: ${d}`;

        
    }
    else if(a.includes("-")){
        e=a.indexOf("-");
        b=Number(a.substring(0,e));
        c=Number(a.substring((e+1)));
        d=(b-c);
        let sub = document.getElementById("para");
        sub.innerText =`The ${a[e]} of the Numbers is: ${d}`;

        
    }
    else if(a.includes("*")){
        e=a.indexOf("*");
        b=Number(a.substring(0,e));
        c=Number(a.substring((e+1)));
        d=(b*c);
        let sub = document.getElementById("para");
        sub.innerText =`The ${a[e]} of the Numbers is: ${d}`;

    }
    else if(a.includes("/")){
        e=a.indexOf("/");
        b=Number(a.substring(0,e));
        c=Number(a.substring((e+1)));
        d=(b/c);
        let sub = document.getElementById("para");
        sub.innerText =`The ${a[e]} of the Numbers is: ${d}`;

        
    }
    else{
        let sub = document.getElementById("para");
        sub.innerText ="Invaild !!!";
    
        
    }
    


  
   
})
