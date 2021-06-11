// setInterval(() => {
//     location.reload()
// }, 10000);

console.log("javaScript .....");


//set stores unique values....
let myset = new Set();

myset.add('this');
myset.add('rick');
myset.add('this');
myset.add(true);
myset.add(24.052004);
console.log(myset.size);
console.log(myset.has('Rick'));
console.log("before Delete", myset.has(true));
myset.delete(true)//for remove form a set
console.log("after Delete", myset.has(true));


for (let a of myset) { console.log(a) }

let settoArray = Array.from(myset);
console.log('The Array of Set', settoArray);
settoArray.forEach(element => {
    console.log('Array ForEach', element);

});









console.log(myset);




