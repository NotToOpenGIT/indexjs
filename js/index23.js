//we can using any thing as a key
let myMap=new Map();
let key1='Its a String',
key2={},
key3=function(){},
key4=['mango','banana','apple']

//setting map Values...
myMap.set(key1,'this is a string')
myMap.set(key2,'this is a object')
myMap.set(key3,'this is a function')
myMap.set(key4,'this is a Arry')

console.log(myMap);

//getting The Values from a Map....

let values=myMap.get(key2)
console.log(values);

//get the size of the MAp...
console.log(myMap.size);

//You can loop using for..of to get keys and values
for (const [keys,values] of myMap) {
    console.log(keys," : ",values);
}

//using for..of loop get only keys
for (const key of myMap.keys()) {
    console.log(key);
}

//using for..of loop get only Values
for (const values of myMap.values()) {
    console.log(values);
}

console.log("**********ForEach***********");
//you can also using forEach loop
myMap.forEach((values,keys) => {
    console.log(keys," : ",values);

});
console.log("**********conver to array***********");

//converting a map to a array.....
let myarry=Array.from(myMap)
console.log(myarry);

console.log("**********conver map keys to array***********");
//converting a map keys(only) to a array.....
let myarrykeys=Array.from(myMap.keys())
console.log(myarrykeys);

console.log("**********conver map values to array***********");
//converting a map values(only) to a array.....
let myarryvalues=Array.from(myMap.values())
console.log(myarryvalues);


setTimeout(() => {
    location.reload()
}, 9000);