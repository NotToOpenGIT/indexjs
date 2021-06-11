
let  gtime=document.getElementById("time");
setInterval(() => {
    let hour=new Date().getHours();
    let Minute=new Date().getMinutes();
    let fulltime=`${hour}:${Minute}`;
    if(fulltime==gtime.value){
        let audio=document.createElement('audio');
        audio.src="media/m.mp3"
        audio.play()
        console.log("its if ");
        document.body.appendChild(audio)
        gtime.value="";
    }
    console.log(fulltime,gtime.value);
}, 1000);