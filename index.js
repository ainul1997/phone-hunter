
const searchPhone = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}
               
                `;

    fetch(url)
        .then(res => res.json())
        .then(status => displaySearchResult(status.data));



    // const url = ``;
}



const displaySearchResult = status => {
    const searchResult = document.getElementById("search-result");
    status.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div class="card">
        <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.phone_name}</h5>
            <p class="card-text">${data.brand}</p>
            <button onclick="displayDetails('${data.mainFeatures}')" >Details</button>
            </div>
        </div>
       
    </div>
        `;
        // *onclick="loadcountryByName${data.mainFeatures}"
        searchResult.appendChild(div);
    })
}
const displayDetails = mainFeatures => {
    console.log(mainFeatures);
    const url = ` https://openapi.programming-hero.com/api/phone/${mainFeatures}`

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}