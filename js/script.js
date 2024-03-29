
//XML HTTP REQUEST

window.addEventListener('DOMContentLoaded', () => {
    function init() {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/people');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status  == 200) {
                let data = JSON.parse(request.response);
                data.forEach(item => {
                    let card = document.createElement('div');

                    card.classList.add('card');

                    let icon;
                    if (item.sex === "male") {
                        icon = "icons/mars.png";
                    } else {
                        icon = "icons/female.png";
                    }

                    card.innerHTML = `
                        <img src="${item.photo}" alt="person">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex">
                            <img src=${icon} alt=${item.sex}>
                        </div>
                        <div class="age">${item.age}</div>
                    `;
                    document.querySelector('.app').appendChild(card);
                });
            } else {
                console.error("Something going wrong");
            }
        });
        this.remove()
    }

    document.querySelector('button').addEventListener('click', init, {"once": true});
});




//FETCH API

/*window.addEventListener('DOMContentLoaded', () => {
    function init() {
   
        getResource('http://localhost:3000/people')
        .then(data => createCards(data))
        .catch(err => console.error(err));

        this.remove();
    }

    async function getResourse(url) {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');

            card.classList.add('card');

            let icon;
            if (item.sex === "male") {
                icon = "icons/mars.png";
            } else {
                icon = "icons/female.png";
            }

            card.innerHTML = `
                <img src="${item.photo}" alt="person">
                <div class="name">${item.name} ${item.surname}</div>
                <div class="sex">
                    <img src=${icon} alt=${item.sex}>
                </div>
                <div class="age">${item.age}</div>
            `;
            document.querySelector('.app').appendChild(card);
        });
    }
    document.querySelector('button').addEventListener('click', init, {"once": true});
});*/




// AXIOS

/*window.addEventListener('DOMContentLoaded', () => {
    function init() {
   
        getResource('http://localhost:3000/people')
        .then(data => createCards(data.data))
        .catch(err => console.error(err));

        this.remove();
    }

    async function getResource(url) {
        const res = await axios(url);
        
        if (res.status !== 200) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return res;
    }

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');

            card.classList.add('card');

            let icon;
            if (item.sex === "male") {
                icon = "icons/mars.png";
            } else {
                icon = "icons/female.png";
            }

            card.innerHTML = `
                <img src="${item.photo}" alt="person">
                <div class="name">${item.name} ${item.surname}</div>
                <div class="sex">
                    <img src=${icon} alt=${item.sex}>
                </div>
                <div class="age">${item.age}</div>
            `;
            document.querySelector('.app').appendChild(card);
        });
    }
    document.querySelector('button').addEventListener('click', init, {"once": true});
});*/




