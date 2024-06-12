// Exercice 1

// let timeWat=()=>new Promise((resolve)=> setTimeout(resolve,3000) )

// let  iterateWithAsyncAwait = async (tab)=>{
//     for (let i = 0; i < tab.length; i++) {
//         console.log(tab[i])
//         await timeWat()
//     }
// }

// let t = [1,2,3,4]

// iterateWithAsyncAwait(t)

// Exercice 2 + 3

// fetch('https://jsonplaceholder.tyicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch((error)=>{console.log({msg :"Erro dayna",error})})

    //   3/2

    // function delay(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    //   }
      
    //   // Fonction async qui attend 1 seconde avant de loguer un message
    //   async function asyncFunction1() {
    //     await delay(1000);
    //     console.log("Fonction 1 exécutée après 1 seconde");
    //   }
      
    //   // Fonction async qui attend 1 seconde avant de loguer un message
    //   async function asyncFunction2() {
    //     await delay(1000);
    //     console.log("Fonction 2 exécutée après 1 seconde");
    //   }
      
    //   // Fonction async qui attend 1 seconde avant de loguer un message
    //   async function asyncFunction3() {
    //     await delay(1000);
    //     console.log("Fonction 3 exécutée après 1 seconde");
    //   }
      
    //   // Fonction principale qui enchaîne les appels asynchrones
    //   async function chainedAsyncFunctions() {
    //     await asyncFunction1();
    //     await asyncFunction2();
    //     await asyncFunction3();
    //   }
      
    //   // Appel de la fonction principale pour vérifier son fonctionnement
    //   chainedAsyncFunctions();


// Exercice 4

// Fonction pour simuler la récupération de données depuis une API
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
  
//   // Fonction principale pour effectuer les appels d'API simultanément
//   async function concurrentRequests() {
//     try {
//       // Lancer les deux appels d'API simultanément
//       const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
  
//       // Log des résultats combinés
//       console.log('Result 1:', result1);
//       console.log('Result 2:', result2);
//     } catch (error) {
//       // Gestion des erreurs
//       console.error('Erreur lors de la récupération des données:', error);
//     }
//   }
  
//   // Appel de la fonction principale pour vérifier son fonctionnement
//   concurrentRequests();

// Exercice 5

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
  
//   // Exemple d'utilisation
//   const urls = [
//     'https://jsonplaceholder.typicode.com/posts/1',
//     'https://jsonplaceholder.typicode.com/posts/2',
//     'https://jsonplaceholder.typicode.com/posts/3'
//   ];
//   parallelCalls(urls);