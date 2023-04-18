// 
let generateButton = document.querySelector('#generateButton')
let divContainer = document.querySelector("#divContainer")










generateButton.addEventListener('click' , function(){
    generateButton.classList.add('hide')

    // Fetches character's name, age, and gender.
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

    // Fetches three friends for the character
    fetch("https://www.swapi.tech/api/people?page=1&limit=100")
    .then(response => response.json())
    .then(people => {
        console.log(people);
        let randomIndex1 = Math.floor(Math.random() * people.results.length);
        let randomIndex2 = Math.floor(Math.random() * people.results.length);
        let randomIndex3 = Math.floor(Math.random() * people.results.length);
        
        let friend1 = document.createElement('h2');
        friend1.textContent = people.results[randomIndex1].name;
        divContainer.appendChild(friend1);
        console.log(friend1);

        let friend2 = document.createElement('h2');
        friend2.textContent = people.results[randomIndex2].name;
        divContainer.appendChild(friend2);
        console.log(friend2);

        let friend3 = document.createElement('h2');
        friend3.textContent = people.results[randomIndex3].name;
        divContainer.appendChild(friend3);
        console.log(friend3);
    })
        
    // Fetches what planet the character is from
    fetch("https://www.swapi.tech/api/planets?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))
    
    // Fetches what species the character is
    fetch("https://www.swapi.tech/api/species?page=1&limit=100")
    .then(response => response.json())
    .then(species => {

        console.log(species)

        let randomIndex = Math.floor(Math.random() * species.results.length)

        let userSpecies = document.createElement('h2')
        userSpecies.textContent = species.results[randomIndex].name
        divContainer.appendChild(userSpecies)


    })


    
    // If the character is older than 16, they drive a starship, if not, they do not have a starship yet
    fetch("https://www.swapi.tech/api/starships?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))
    
    // If the character is older than 16, they drive a vehicle, if not, they do not have a vehicle yet
    fetch("https://www.swapi.tech/api/vehicles?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))
















})
