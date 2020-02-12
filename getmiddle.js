// function getMiddle(arr)
// {
//   var name=arr.split('')
 

// if(name.length%2!==0){
//    var odd=Math.floor(name.length/2)
//    return arr[odd]
// }else{
//     var even=name.length/2
//     var even1=(name.length/2)-1
//     return arr[even1]+arr[even]
// }
// }
// console.log(getMiddle('james'))


// const berapatahun=(awal,persen,pendatang,target)=>{
//     var naikpertaun=(awal*persen/100)+pendatang
//     var kenaikan=target-awal
//     var tahunan=`${Math.floor(kenaikan/naikpertaun)} tahun`
//     return tahunan
// }
// console.log(berapatahun(1000,5,50,1200));


// const lelang=(a)=>{
//     var hargabaju=10000
//     var duapuluh=20/100
//     var sepuluh=10/100
//         for(i=1;i<=a;i++){
//             if(i%4===0){
//                 hargabaju+=Math.ceil(hargabaju*sepuluh)
//             }else{
//                 hargabaju+=Math.ceil(hargabaju*duapuluh)
//             }
//         }
//         return hargabaju>30000000?'barang sudah terjual':hargabaju
// }
// console.log(lelang(2))

// ganjilgenap=(plat)=>{
//     var tanggal= new Date().getDate()
//     var platnomor=plat.split(' ')
//     var nomor= parseInt(platnomor[1])
//     if(nomor%2 == tanggal%2){
//         return `${plat} boleh lewat`
//     }else{
//        return `${plat} tidak boleh lewat`
//     }
// }
// console.log(ganjilgenap(`b 1234 bog`))
// console.log(ganjilgenap(`b 123 bog`))


 
const fungsi=(a,b)=>{
    var arra=a.split('')
    var arrb=b.split('')
        for(i=0;i<arra.length;i++){
            for(j=0;j<=i+1;j++){
                
                }
            }
        }
    console.log(fungsi('ajcramures','pjyamteis'))








// const jek=()=>{
//     return{
//         dewa:{
//             harun=[[0,()=>{
//                 return{
//                     dian:{
//                         haura
//                     }
//                 }
//             }]]
//         }
//     }
// }
// console.log(jek().dewa['harun'][0][1]()['dian'].haura[0]('aldo'))

// const checkpass=(input)=>{
//         var huruf='abcdefghijklmnopqrstuvwxyz'.split('')
//         var angka='1234567890'.split('')

//         var check=0
//         for(i=0;i<input.length;i++){
//             if(input[i]!==' '){
//                 check++
//             }
//         }
//         if(check<6){
//             return 'pass nya kurang dari 6 character'
//         }else{
//             var checkhuruf=0
//             for(var i=0;i<input.length;i++){
//                 for(j=0;j<huruf.length;j++){
//                     if(input[i]==huruf[j]){
//                         checkhuruf++
//                     }
//                 }
//             }
//             if(checkhuruf==check){
//                 return `gunakan angka`
//             }
//             }
//         }
// console.log(checkpass('abcde12'))

const accum=(huruf='')=>{
    var output=''
    for(var i=0;i<huruf.length;i++){
        for(var j=0;j<=i;j++){
            if(j==0){
                output+=huruf[i].toUpperCase()
            }else{
                output+=huruf[i].toLowerCase()
            }
        }
        output+='-'
    }
    return output
}
console.log(accum('abcd'))