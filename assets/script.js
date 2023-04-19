// Globals/Query Selectors
let generateButton = document.querySelector('#generateButton')
let divContainer = document.querySelector("#divContainer")





generateButton.addEventListener('click', function () {
    generateButton.classList.add('hide')
    let age;
    // Fetches character's name, age, and gender.
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(results => {
            console.log(results)

            let firstName;
            let lastName;
            
            let fullName = document.createElement('h2');
            fullName.textContent = "Name: " + results.results[0].name.first + " " + results.results[0].name.last;
            divContainer.appendChild(fullName);

            let userGender = document.createElement('h2')
            userGender.textContent = "Gender: " + results.results[0].gender;
            divContainer.appendChild(userGender)
            console.log(userGender)
                
            let ageH2 = document.createElement('h2')
            ageH2.textContent = "Age: " + results.results[0].dob.age;
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

    // Fetches what planet the character is from
    fetch("https://www.swapi.tech/api/planets?page=1&limit=100")
    .then(response => response.json())
    .then(planets => {
        
        let randomIndex = Math.floor(Math.random() * planets.results.length)

        let userPlanets = document.createElement('h2')
        userPlanets.textContent = "Home planet: " + planets.results[randomIndex].name;
        divContainer.appendChild(userPlanets);
    })

    // Fetches what species the character is
    fetch("https://www.swapi.tech/api/species?page=1&limit=100")
    .then(response => response.json())
    .then(species => {

        let randomIndex = Math.floor(Math.random() * species.results.length)

        let userSpecies = document.createElement('h2')
        userSpecies.textContent = "Species: " + species.results[randomIndex].name;
        divContainer.appendChild(userSpecies);
    })

    // Fetches three friends for the character
    fetch("https://www.swapi.tech/api/people?page=1&limit=100")
        .then(response => response.json())
        .then(people => {
            let randomIndex1 = Math.floor(Math.random() * people.results.length);
            let randomIndex2 = Math.floor(Math.random() * people.results.length);
            let randomIndex3 = Math.floor(Math.random() * people.results.length);
            
            let friend1;
            friend1 = people.results[randomIndex1].name;
            
            let friend2;
            friend2 = people.results[randomIndex2].name;
            
            let friend3;
            friend3 = people.results[randomIndex3].name;

            let friends = document.createElement('h2');
            friends.textContent = "Friends: " + friend1 + ", " + friend2 + ", " + friend3;
            divContainer.appendChild(friends);
        })
})
