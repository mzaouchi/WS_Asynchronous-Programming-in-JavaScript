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


// Exercice 2
// const awaitCall =()=>fetch("https://jsoplaceholder.typicode.com/users")
//     .then((response)=> response.json())
//     .then((json)=> console.log(json))
//     .catch((error)=> console.log("Probleme"))



// awaitCall ()

// Exercice 3

// const awaitCall= async ()=>{
//     try {
//         var response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         var donnees = await response.json()
//         console.log(donnees)
//     } catch (error) {
//         console.log(error)
//     }
// }
// awaitCall ()

// Exercice 4

// const delay=()=> new Promise((resolve)=> setTimeout(resolve, 1000))
      
    
//       async function asyncFunction1() {
//         await delay();
//         console.log("Fonction 1 exécutée après 1 seconde");
//       }
      
    
//       async function asyncFunction2() {
//         await delay();
//         console.log("Fonction 2 exécutée après 1 seconde");
//       }
      
     
//       async function asyncFunction3() {
//         await delay();
//         console.log("Fonction 3 exécutée après 1 seconde");
//       }
     
//       async function chainedAsyncFunctions() {
//         await asyncFunction1();
//         await asyncFunction2();
//         await asyncFunction3();
//       }
      
    
//       chainedAsyncFunctions();

// Exercice 5

// async function fetchData1() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     return data;
//   }
  
//   async function fetchData2() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
//     const data = await response.json();
//     return data;
//   }
  
  
//   async function concurrentRequests() {
//     try {
//       const tab = await Promise.all([fetchData1(), fetchData2()]);
  
//       console.log('Result 1:', tab[0]);
//       console.log('Result 2:', tab[1]);
//     } catch (error) {
//         console.error('Erreur lors de la récupération des données:', error);
//     }
//   }
  
 
//   concurrentRequests();

// Exercice 6
//   // Exemple d'utilisation
//   const urls = [
//     'https://jsonplaceholder.typicode.com/posts/1',
//     'https://jsonplaceholder.typicode.com/posts/2',
//     'https://jsonplaceholder.typicode.com/posts/3'
//   ];

// // Fonction pour récupérer les données depuis une URL
// async function fetchData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }
  
//   // Fonction principale pour effectuer les appels d'API simultanément
//   async function parallelCalls(urls) {
//     try {
//       // Créer un tableau de promesses pour chaque URL
//       const promises = urls.map(url => fetchData(url));
  
//       // Attendre que toutes les promesses soient résolues
//       const results = await Promise.all(promises);
  
//       // Log des résultats combinés
//       console.log('Results:', results);
//     } catch (error) {
//       // Gestion des erreurs
//       console.error('Erreur lors de la récupération des données:', error);
//     }
//   }
  

//   parallelCalls(urls);