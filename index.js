// // https://jsonplaceholder.typicode.com/users/1

// var consomationAPI=async()=>{
//     try {
//         var res = await fetch("https://jsonplaceholder.typicode.com/users/1")
//         var resultat = await res.json()
//         console.log(resultat)
        
//         var user = document.querySelector('#user')
//         user.innerText = resultat.name
        
//         var mariem = document.querySelector("#mariem")
//         var title =  document.createElement('h2')
//         title.innerText = resultat.username
//         mariem.appendChild(title)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consomationAPI()


// const consAPI=async()=>{
//     try {
//         var res = await fetch("https://jsonplaceholder.typicode.com/users")
//         var ress = await res.json()
//         console.log(ress)

//         var List = document.querySelector("#List")

//         for(let i = 0;i<ress.length;i++){
//             var newLi = document.createElement('li')
//             newLi.innerText = ress[i].name
//             List.appendChild(newLi)
//         }


//     } catch (error) {
//         console.log(error)
//     }
// }

// consAPI()


const weather=async()=>{
    try {
        var res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=584b4a7a31e71c8645f53d22222a0184")
        var ress = await res.json()
        var mariem = document.querySelector('#mariem')

        var title  = document.createElement('h1')
        title.innerText = ress.name
        var temperature = document.createElement('h2')
        temperature.innerText = ress.main.temp
        var description = document.createElement("h3")
        description.innerText = ress.weather[0].description    
         
        mariem.appendChild(title)
        mariem.appendChild(temperature)
        mariem.appendChild(description)
    } catch (error) {
        console.log(error)
    }
}

weather()