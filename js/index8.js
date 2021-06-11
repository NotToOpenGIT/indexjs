console.log("this is next ");

class XII{
    constructor(name,claes,sec){
        this.name=name;
        this.claes=claes;
        this.sec=sec;
    }
    find(){
        let f=this.sec;
        f.toLowerCase();
        if(f.includes('arts')){
            console.log("You Are A Arts Student");
        }
         
        else if(f.includes("commerts")){
            console.log("You Are A commarts Student");
        }
       
       else if(f.includes("science")){
            console.log("You Are A science Student");
        }
        else{
            console.log("invaid ")
        }
    }

}

let cl=new XII("rohen","XII","commerts");
console.table(cl);




















