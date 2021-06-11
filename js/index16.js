let ti=document.getElementById("time");
ti.addEventListener("blur", function (e) {
    let e1 = e;
    console.log(e1)
    e1.target
    console.log(e1.target.value)

    let fdate=new Date;
    let date=(fdate.getHours()+":"+fdate.getMinutes());

    if(e1.target.value==date){
       let a=document.body;
       let b=document.createElement("audio");
       b.src="photos/m.mp3";

       b.autoplay="true";
       
       a.appendChild(b);
    
    }
    else{
        console.log("nothing")
    }
})