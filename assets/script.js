fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(data => console.log(data))

fetch("https://www.swapi.tech/api")
.then(response => response.json())
.then(data => console.log(data))