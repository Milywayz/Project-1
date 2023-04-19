// Globals/Query Selectors
let generateButton = document.querySelector('#generateButton')
let divContainer = document.querySelector("#divContainer")
let characterInfo = [];
let ul = document.querySelector('.allInfo')
let saveCharacterButton = document.querySelector('.saveCharacterButton')









generateButton.addEventListener('click', function () {
    generateButton.classList.add('hide')
    saveCharacterButton.classList.remove('hide')
    let age;

    
    
    // Fetches character's name, age, and gender.
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(results => {
            console.log(results)
            
            let userGender = document.createElement('h2')
            userGender.id = "userGender"
            userGender.textContent = results.results[0].gender
            divContainer.appendChild(userGender)
            console.log(userGender)
            
            let firstName = document.createElement('h2')
            firstName.id = "firstName"
            firstName.textContent = results.results[0].name.first
            divContainer.appendChild(firstName)
            
            let lastName = document.createElement('h2')
            lastName.id = "lastName"
            lastName.textContent = results.results[0].name.last
            divContainer.appendChild(lastName)
            
            let ageH2 = document.createElement('h2')
            ageH2.id = "age"
            ageH2.textContent = results.results[0].dob.age
            divContainer.appendChild(ageH2)
            age = results.results[0].dob.age;
            
            return Promise.all([fetch("https://www.swapi.tech/api/starships?page=1&limit=100"),
            fetch("https://www.swapi.tech/api/vehicles?page=1&limit=100")])

        })
        .then(responses => {
            console.log(responses)


            return Promise.all([responses[0].json(), responses[1].json()])
            
        })

        // If the character is older than 16, they drive a vehicle, if not, they do not have a starship yet
        .then(([starship, vehicle]) => {
            console.log(starship)
            let userStarship = document.createElement('h2');
            userStarship.id = "userStarship"
            console.log(userStarship);
            if (age < 16) {
                userStarship.textContent = "Your character is too young to drive a starship!"
                divContainer.appendChild(userStarship);
                return;
            }
            else {
                let randomIndex = Math.floor(Math.random() * starship.results.length);
                userStarship.textContent = "Your character drives the starship: " + starship.results[randomIndex].name;
                divContainer.appendChild(userStarship);
            }
            console.log(vehicle)
            let userVehicle = document.createElement('h2');
            userVehicle.id = "userVehicle"
            console.log(userVehicle);
            if (age < 16) {
                userVehicle.textContent = "Your character is too young to drive a vehicle!"
                divContainer.appendChild(userVehicle);
                return;
            }
            else {
                let randomIndex = Math.floor(Math.random() * vehicle.results.length);
                userVehicle.textContent = "Your character drives the vehicle: " + vehicle.results[randomIndex].name;
                divContainer.appendChild(userVehicle);
            }
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
            friend1.id = "friend1"
            friend1.textContent = people.results[randomIndex1].name;
            divContainer.appendChild(friend1);
            console.log(friend1);
            
            let friend2 = document.createElement('h2');
            friend2.id = "friend2"
            friend2.textContent = people.results[randomIndex2].name;
            divContainer.appendChild(friend2);
            console.log(friend2);
            
            let friend3 = document.createElement('h2');
            friend3.id = "friend3"
            friend3.textContent = people.results[randomIndex3].name;
            divContainer.appendChild(friend3);
            console.log(friend3);
        })

    // Fetches what planet the character is from
    fetch("https://www.swapi.tech/api/planets?page=1&limit=100")
        .then(response => response.json())
        .then(planets => {
            
            console.log(planets)
            
            let randomIndex = Math.floor(Math.random() * planets.results.length)
            
            let userPlanets = document.createElement('h2')
            userPlanets.id = "userPlanets"
            userPlanets.textContent = planets.results[randomIndex].name
            divContainer.appendChild(userPlanets)
        })



        // Fetches what species the character is
    fetch("https://www.swapi.tech/api/species?page=1&limit=100")
    .then(response => response.json())
        .then(species => {

            console.log(species)
            
            let randomIndex = Math.floor(Math.random() * species.results.length)
            
            let userSpecies = document.createElement('h2')
            userSpecies.id = "userSpecies"
            userSpecies.textContent = species.results[randomIndex].name
            divContainer.appendChild(userSpecies)


        })
        
        saveCharacterButton.addEventListener('click' , function (event){
        

            event.preventDefault();
            let allCharacterInfo = {
                userGender: document.querySelector('#userGender').textContent,
                firstName: document.querySelector('#firstName').textContent,
                lastName: document.querySelector('#lastName').textContent,
                ageH2: document.querySelector('#age').textContent,
                userStarship: document.querySelector('#userStarship').textContent,
                userVehicle: document.querySelector('#userVehicle').textContent,
                friend1: document.querySelector('#friend1').textContent,
                friend2: document.querySelector('#friend2').textContent,
                friend3: document.querySelector('#friend3').textContent,
                userPlanets: document.querySelector('#userPlanets').textContent,
                userSpecies: document.querySelector('#userSpecies').textContent
            }
            characterInfo.push(allCharacterInfo)
            localStorage.getItem("characterInfo")
            localStorage.setItem("characterInfo", JSON.stringify(characterInfo))
            
        
        })
        
        // function displayCharacter(){
        
        //     let info = localStorage.getItem("characterInfo")
        
        //     if(info == null) return;
        //     ul.innerHTML = ""
        
        
            
        
        
        
        
        // }
})
