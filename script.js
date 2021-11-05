const container = document.getElementById('container');
const errorDiv = document.getElementById('error');

function createUserCard (data){
    for (let val of data){
       let user = document.createElement('div');
           user.setAttribute('class', 'user');
       let name = document.createElement('h3');
           name.setAttribute('class', 'name');
           name.innerHTML = val.name;
       let sectionPers = document.createElement('section');
           sectionPers.setAttribute('class', 'info-section');
       let title = document.createElement('div');
           title.setAttribute('class', 'title');
           title.innerText = 'Personal information';
       let username = document.createElement('div');
           username.setAttribute('class', 'username');
           username.innerHTML = `<b>username:</b> ${val.username}`;
       let email = document.createElement('div');
           email.setAttribute('class', 'email');
           email.innerHTML = `<b>email:</b> ${val.email}`;
       let address = document.createElement('div');
           address.setAttribute('class', 'address-name');
           address.innerHTML = `<b>address:</b> ${val.address.city}, ${val.address.street} st, ${val.address.suite}`;
       let zip = document.createElement('div');
           zip.setAttribute('class', 'address-zip');
           zip.innerHTML = `<b>zip-code:</b> ${val.address.zipcode}`;
       let phone = document.createElement('div');
           phone.setAttribute('class', 'phone');
           phone.innerHTML = `<b>phone:</b> ${val.phone}`;
       let webpage = document.createElement('div');
           webpage.setAttribute('class', 'webpage');
           webpage.innerHTML = `<b>website:</b> ${val.website}`;
       let sectionWork = document.createElement('section');
           sectionWork.setAttribute('class', 'info-section');
       let titleWork = document.createElement('div');
           titleWork.setAttribute('class', 'title');
           titleWork.innerText = 'Work information'
       let company = document.createElement('div');
           company.setAttribute('class', 'company');
           company.innerHTML = `<b>company name:</b> ${val.company.name}`
       let phrase = document.createElement('div');
           phrase.setAttribute('class', 'phrase');
           phrase.innerHTML = `<b>catchprase:</b> ${val.company.catchPhrase}`;
       let bs = document.createElement('div');
           bs.setAttribute('class', 'bs');
           bs.innerHTML = `<b>bs:</b> ${val.company.bs}`;
// и вот когда я засетила всем елементам классы, я поняла, что процентов 70 классов не нужно бфло сетить, потому что я по ним не задвала стили, ну штож...
        sectionPers.appendChild(title);
        sectionPers.appendChild(username);
        sectionPers.appendChild(email);
        sectionPers.appendChild(address);
        sectionPers.appendChild(zip);
        sectionPers.appendChild(phone);
        sectionPers.appendChild(webpage);
        sectionWork.appendChild(titleWork);
        sectionWork.appendChild(company);
        sectionWork.appendChild(phrase);
        sectionWork.appendChild(bs);
        user.appendChild(name);
        user.appendChild(sectionPers);
        user.appendChild(sectionWork);
        container.appendChild(user);
    }
}

function displayError(error){
    errorDiv.innerText = error;
    errorDiv.style.display = 'block'
}

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        createUserCard(data);
    }
    catch (error){
        displayError(error);
    }
}

getUser();