// let apiKey = "DUbOaOakxcTWF5daWI4c2A9jKVDO94tG9fkA8RugZEM";
// let count = 30;

// let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${searchValue}`;

let searchBtn = document.getElementById('button');
let searchedValue = document.getElementById('searchField');
let container1 = document.getElementById('container');


async function getPhotos(){
    let searchValue = searchedValue.value;
    console.log(searchValue);
    let data = await fetch(`https://pixabay.com/api/?key=45496333-3fa1d67e86f676313d5f86f45&q=${searchValue}&image_type=photo`);
    let result = await data.json();
    console.log(result);
    result.hits.forEach(element => {
        let div = document.createElement('div');
        div.id= "imgDiv";
        let img = document.createElement('img');
        img.src = `${element.largeImageURL}`;
        img.classList= "shownImg";
        let name = document.createElement('p');
        name.textContent = `${element.tags}`;
        div.appendChild(img);
        div.appendChild(name);
        container1.appendChild(div);
    });
    
}
searchBtn.addEventListener('click',() => {
    container1.innerHTML = '';
    getPhotos();
})