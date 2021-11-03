const container = document.getElementById('container')

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
           username.innerText = `username: ${val.username}`;
       let email = document.createElement('div');
           email.setAttribute('class', 'email');
           email.innerText = `email: ${val.email}`;
       let address = document.createElement('div');
           address.setAttribute('class', 'address-name');
           address.innerText = `address: ${val.address.city}, ${val.address.street} st, ${val.address.suite}`;
       let zip = document.createElement('div');
           zip.setAttribute('class', 'address-zip');
           zip.innerText = `zip-code: ${val.address.zipcode}`;
       let phone = document.createElement('div');
           phone.setAttribute('class', 'phone');
           phone.innerText = `phone: ${val.phone}`;
       let webpage = document.createElement('div');
           webpage.setAttribute('class', 'webpage');
           webpage.innerText = `website: ${val.website}`;
       let sectionWork = document.createElement('section');
           sectionWork.setAttribute('class', 'info-section');
       let titleWork = document.createElement('div');
           titleWork.setAttribute('class', 'title');
           titleWork.innerText = 'Work information'
       let company = document.createElement('div');
           company.setAttribute('class', 'company');
           company.innerText = `company name: ${val.company.name}`
       let phrase = document.createElement('div');
           phrase.setAttribute('class', 'phrase');
           phrase.innerText = `catchprase: ${val.company.catchPhrase}`;
       let bs = document.createElement('div');
           bs.setAttribute('class', 'bs');
           bs.innerText = `bs: ${val.company.bs}`;
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

async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    createUserCard(data);
}

getUser();