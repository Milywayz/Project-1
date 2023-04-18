// 
let generateButton = document.querySelector('#generateButton')
let divContainer = document.querySelector("#divContainer")










generateButton.addEventListener('click' , function(){
    generateButton.classList.add('hide')

    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(results => {
        console.log(results)
        
        
        let userGender = document.createElement('h2')
        userGender.textContent = results.results[0].gender
        divContainer.appendChild(userGender)
        console.log(userGender)

        let firstName = document.createElement('h2')
        firstName.textContent = results.results[0].name.first
        divContainer.appendChild(firstName)

        let lastName = document.createElement('h2')
        lastName.textContent = results.results[0].name.last
        divContainer.appendChild(lastName)

        let age = document.createElement('h2')
        age.textContent = results.results[0].registered.age
        divContainer.appendChild(age)
        
    })


    

    
    fetch("https://www.swapi.tech/api/people?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))
    
    fetch("https://www.swapi.tech/api/planets?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))
    
    fetch("https://www.swapi.tech/api/species?page=1&limit=100")
    .then(response => response.json())
    .then(species => {

        console.log(species)

        let randomIndex = Math.floor(Math.random() * species.results.length)

        let userSpecies = document.createElement('h2')
        userSpecies.textContent = species.results[randomIndex].name
        divContainer.appendChild(userSpecies)


    })


    
    fetch("https://www.swapi.tech/api/starships?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))
    
    
    fetch("https://www.swapi.tech/api/vehicles?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))
















})
