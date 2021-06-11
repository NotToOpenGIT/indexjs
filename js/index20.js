console.clear()
console.log("lets  Run JavaScript.....")
let  myArry=['Google','Facebook','Twitter','Yahoo']
console.log(myArry);
function lter(values){
    let nextIndex=0;
    return{
        next:function(){
            if(nextIndex<values.length)
            {   //we will return this object
                return {
                    value:values[nextIndex++],
                    done:false
            
                }
        }
            else{
                return{
                  done:true  
                }
            }
        }
    }
}

//using the iterator
let a=lter(myArry)
console.log('object :>> ', a.next().value);
console.log('object :>> ', a.next().value);
console.log('object :>> ', a.next().value);
console.log('object :>> ', a.next().value);
console.log('object :>> ', a.next().value);
