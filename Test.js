// ***********************************************
// Workshop
// ***********************************************

// // // var myPromise = new Promise((resolve,reject)=>{
// // //     var test = false

// // //     if(test){
// // //         resolve("Test reussie")
// // //     }else{
// // //         reject("Check your test")
// // //     }
// // // })

// // // myPromise.then((resultat)=>console.log(resultat)).catch((error)=>console.log(error))


// // // var yourPromise = new Promise((resolve,reject)=>{
// // //     var a = 4
// // //     var b = 7
// // //     var res = a+b

// // //     if(res){
// // //         resolve(res)
// // //     }else{
// // //         reject("Please check your coord")
// // //     }
// // // })

// // // yourPromise.then((resultat)=>console.log(resultat)).catch((error)=>console.log(error)).finally(()=>console.log("good job"))

// // // const somme=(a,b)=>{
// // //     return new Promise((resolve,reject)=>{
// // //         var res = a+b

// // //         if(res){
// // //             resolve(res)
// // //         }else{
// // //             reject("Check you cord")
// // //         }
// // //     })
// // // }

// // // somme(3).then((resultat)=>console.log(resultat)).catch((error)=>console.log(error))


// // // var sum = 0

// // // console.log("Hello")

// // // for(var i = 0; i < 1000000;i++){
// // //     sum += i 
// // // }

// // // console.log(sum)
// // // console.log("Finish")

// // // var myPromise = new Promise((resolve,reject)=>{
// // //     var sum = 0

// // //     for(var i = 0; i < 1000000;i++){
// // //     sum += i 
// // //     }

// // //     if(sum){
// // //         resolve(sum)
// // //     }else{
// // //         reject("Somme invalid")
// // //     }
// // // })

// // // console.log("Hello")

// // // myPromise.then((resultat)=>console.log(resultat)).then(()=>console.log('finish')).catch((error)=>console.log(error)).finally(()=>console.log('finish all time'))
// // function myPromise(){
// // return new Promise((resolve,reject)=>{
// //     var sum = 0

// //     for(var i = 0; i < 1000000;i++){
// //     sum += i 
// //     }

// //     if(sum){
// //         resolve(sum)
// //     }else{
// //         reject("Somme invalid")
// //     }
// // })
// // }
// // function Test(){
// //     // console.log("Hello")
// //     // myPromise.then((resultat)=>console.log(resultat)).catch((error)=>console.log(error))
// //     // console.log("Finish")
// //     // return "Good"

// //     try {
// //         console.log("Hello")
// //         var resultat =  myPromise()
// //         console.log(resultat)
// //         console.log("Finish")
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }

// // Test().then((resultat)=>console.log(resultat))

// function myPromise() {
//     return new Promise((resolve, reject) => {
//         var sum = 0;

//         for (var i = 0; i < undefined; i++) {
//             sum += i;
//         }

//         if (sum) {
//             resolve(sum);
//         } else {
//             reject("Somme invalide");
//         }
//     });
// }

//  async function Test() {
//     try {
//         console.log("Hello")
//         var resultat = await myPromise() 
//         console.log(resultat)
//         console.log("Finish")
//         return "Good" 
//     } catch (error) {
//         console.log(error)
//     }
// }

// Test().then(result => console.log(result)); 


// var t = [1,2,3,4,5]

// for (let index = 0; index < t.length; index++) {
//     console.log(t[index])
//     setTimeout(() => {
        
//     }, 2000);
// }

// ***********************************************
// Exercice 1
// ***********************************************
// var t = [1,2,3,4,5]

// var attente=()=> new Promise((resolve)=> setTimeout(resolve, 2000))

// const  iterateWithAsyncAwait=async(tab)=>{
//     for (let i = 0; i < tab.length; i++) {
        
        
//         console.log(tab[i])
//         await attente()
        
//     }
// }

// iterateWithAsyncAwait(t)