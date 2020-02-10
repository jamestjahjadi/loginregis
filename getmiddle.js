function getMiddle(arr)
{
  var name=arr.split('')
 

if(name.length%2!==0){
   var odd=Math.floor(name.length/2)
   return arr[odd]
}else{
    var even=name.length/2
    var even1=(name.length/2)-1
    return arr[even1]+arr[even]
}
}
console.log(getMiddle('james'))


const berapatahun=(awal,persen,pendatang,target)=>{
    var naikpertaun=(awal*persen/100)+pendatang
    var kenaikan=target-awal
    var tahunan=`${Math.floor(kenaikan/naikpertaun)} tahun`
    return tahunan
}
console.log(berapatahun(1000,5,50,1200));


const lelang=(a)=>{
    var hargabaju=10000
    var duapuluh=20/100
    var sepuluh=10/100
        for(i=1;i<=a;i++){
            if(i%4===0){
                hargabaju+=Math.ceil(hargabaju*sepuluh)
            }else{
                hargabaju+=Math.ceil(hargabaju*duapuluh)
            }
        }
        return hargabaju>30000000?'barang sudah terjual':hargabaju
}
console.log(lelang(2))

ganjilgenap=(plat)=>{
    var tanggal= new Date().getDate()
    var platnomor=plat.split(' ')
    var nomor= parseInt(platnomor[1])
    if(nomor%2 == tanggal%2){
        return `${plat} boleh lewat`
    }else{
       return `${plat} tidak boleh lewat`
    }
}
console.log(ganjilgenap(`b 1234 bog`))
console.log(ganjilgenap(`b 123 bog`))


 
