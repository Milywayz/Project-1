










// generateButton.addEventListener('click' , function(){


    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => console.log(data))
    
    fetch("https://www.swapi.tech/api/people?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))
    
    fetch("https://www.swapi.tech/api/planets?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))
    
    fetch("https://www.swapi.tech/api/species?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))
    
    fetch("https://www.swapi.tech/api/starships?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))
    
    
    fetch("https://www.swapi.tech/api/vehicles?page=1&limit=100")
    .then(response => response.json())
    .then(data => console.log(data))


// })
