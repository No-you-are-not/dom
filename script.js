const container = document.getElementById('container');
const buttonContainer = document.getElementById('btnBlock');
const button = document.getElementById('callBtn');
let boolButton = false;

button.addEventListener('click', (e) => {
    boolButton = true;
})

function createPlanetCards (data){
    let mainData = data.planets;
    for (let val in mainData){
        let planetCard = document.createElement('div');
        planetCard.setAttribute('class', 'planet')
        let planetTitle = document.createElement('div');
        planetTitle.setAttribute('class', 'title');
        planetTitle.innerText = mainData[val].title;
        let planetPicDiv = document.createElement('div');
        planetPicDiv.setAttribute('class', 'picture');
        let planetPic = document.createElement('img');
        planetPic.setAttribute('class', 'planet-picture');
        planetPic.src = mainData[val].url;
        let info = document.createElement('ul');
        info.setAttribute('class', 'info');
        for (let value of mainData[val].info){
            let infoItem = document.createElement('li');
            infoItem.setAttribute("class", 'info-item');
            infoItem.innerText = value;
            info.appendChild(infoItem);
        }
        planetPicDiv.appendChild(planetPic);
        planetCard.appendChild(planetTitle);
        planetCard.appendChild(planetPicDiv);
        planetCard.appendChild(info);
        buttonContainer.style.display = "none"
        container.appendChild(planetCard)
    }
}

let drawCardsPromise = new Promise((resolve, reject) => {
    if (boolButton){

    }
})


// fetch('https://trevadim.github.io/vue/data/data.json')
//     .then(response => response.json())
//     .then(data => {
//         document.addEventListener('load', createPlanetCards(data));
//     })
//     .catch(error => console.log(error))
