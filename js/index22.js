console.clear();
console.log("lets run javascript");
var Arry = ['harry', 'rohan', 'open', 'video']

//old for loop
// for (let index = 0; index < Arry.length; index++) {
//     const element = Arry[index];
//     console.log(element);
// }


obj = {
    name: 'harry',
    lang: 'python',
    age: 21
}
console.log(obj);

// ltering a Object old and big code ....
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);
}

// ltering a Object using for in loop same but in small code...
for (let key in obj) {
    console.log(obj[key]);
}

//ltering a string using forin loop all cheraters...
let mystr = 'This is My String temp';
for (const char in mystr) {
    const element = mystr[char];
    console.log(element);
}


for (const name of Arry) {
    console.log(name);
}





