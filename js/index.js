const container = document.getElementById('gridContainer')

fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {

            // Creamos el card principal
            let newCharacter = document.createElement('div')
            newCharacter.classList.add('characterCard', character.house)
            newCharacter.innerHTML = `
                <div class="imageBlock">
                    <img src="${character.image}" alt="${character.name}">
                    <div>
                        <h4>${character.name}</h4>
                        <p>${2025 - character.yearOfBirth}</p>
                    </div>
                    <span></span>
                </div>
            `
            container.appendChild(newCharacter)
            // Terminamos de crear el card principal


        });
    })
    .catch(error => console.error(error))

    /*
        data[0].name
        data[0].image
        data[0].house
        data[0].species
        data[0].yearOfBirth
    */