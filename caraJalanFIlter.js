var arr=[1,2,3,4,5]
var newarr=arr.filter((val)=>{
    return val%2==0
})
console.log(newarr)


const filteralala=(arr,cb)=>{
    var output=[]
        for(i=0;i<arr.length;i++){
           if(cb(arr[i],i)){
               output.push(arr[i])
        } 
    }
    return output
}
console.log(filteralala(arr,(val)=>{
    return val%2
}))


