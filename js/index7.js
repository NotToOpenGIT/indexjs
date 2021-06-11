console.log("object oriented javaScript");

function Car(name, maxspeed, minspeed) {
    this.carname = name;
    this.maxspeedis = maxspeed;
    this.minspeedis = minspeed;
    this.run = function () {
        console.log(`the car name is: ${this.carname} her maxspped is: ${this.maxspeedis}and min speed: ${this.minspeedis}`);
    };
}

car_one = new Car("labo", 400, 10);
console.log(car_one);

function mathcal(a,b) {
    this.a=a;
    this.b=b;
    this.sum=function(){
    console.log("the sum is: ",this.a+this.b)
}
    this.dif=function(){
    console.log("the dif is: ",this.a+this.b)
}


    }

mathcal.prototype.div =function(){
    console.log("the div is: ",this.a/this.b);
}

let a=new mathcal(10,20);

console.log(a)



function emp(name,salary,exp){
    this.name=name;
    this.salary=salary;
    this.exp=exp;

}

emp.prototype.enter=function(){
    console.log(
        "name: ",this.name,
        "salary: ",this.salary,
        "experience: ",this.exp,
    )}

let e=new emp("sanjoy",50000,2);
console.log(e)






function prog(name,salary,exp,lag){
    emp.call(this,name,salary,exp);
    this.lag=lag
    return(`
    name:${name};
    name:${salary};
    name:${exp};
    name:${lag};
    `)
}
prog.prototype=Object.create(emp.prototype);
prog.constructor=Object.create(emp.constructor)
let p=new prog("rahul ",20000,7,"c++");
console.log(p);



