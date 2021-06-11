// setTimeout(() => {
//     for (let i = 0; i <=10000; i++) {
//         console.log(i);

//     }

// }, 1);
// console.log("done....")

let btn = document.getElementById("btn");
btn.addEventListener("click", google)

function google() {

    let xhr = new XMLHttpRequest();

    //open the object
    xhr.open("GET", "js/get.txt", true)

    //on progress( optinal)
    xhr.onprogress = function () {
        console.log("on progree");
    }
// false
    //on load main work is here
    xhr.onload =function () {
        if(this.status==200){
            console.log(this.response);
            }
            else{
            console.warn("same problom here")
            }
    }

    xhr.onreadystatechange=function () {
        console.log("the values is: ",this.readyState)
        }
   
    xhr.send();
}
