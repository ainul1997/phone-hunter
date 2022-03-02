

document.getElementById("write-alart").style.display = "none";


document.getElementById("noFound-alart").style.display = "none";

const searchResult = document.getElementById("search-result");
searchResult.textContent = "";
const searchPhone = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    searchField.value = '';

    // notice empty
    if (searchText == "") {
        document.getElementById("write-alart").style.display = "block";
        document.getElementById("noFound-alart").style.display = "none";
        searchResult.textContent = "";

    } else {
        document.getElementById("write-alart").style.display = "none";
        document.getElementById("noFound-alart").style.display = "none";
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

        fetch(url)
            .then(res => res.json())
            .then(status => displaySearchResult(status.data));
    }

}

// fielddisplay ******************

const displaySearchResult = status => {
    if (status.length == 0) {
        document.getElementById("write-alart").style.display = "none";
        document.getElementById("noFound-alart").style.display = "block";
        searchResult.textContent = "";
    }
    else {
        document.getElementById("write-alart").style.display = "none";
        document.getElementById("noFound-alart").style.display = "none";

        status.forEach(data => {
            // console.log(data);
            const div = document.createElement('div');
            // console.log(div);
            // div.classList.add('col');
            div.innerHTML = `
    <div class="card">
        <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.phone_name}</h5>
            <p class="card-text">${data.brand}</p>
            <button onclick="phoneLoadByName('${data.slug}')">Details</button>
            </div>
        </div>
        
    </div>
        `;
            searchResult.appendChild(div);
        })
    };



}

const displayPhoneDetail = country => {
    const displayField = document.getElementById('ditailsDisplay')
    const countryDiv = document.createElement('div');
    // console.log(countryDiv);
    countryDiv.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
    <div class="col-md-4">
        <img src="${country.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${country.slug}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
            <p class="card-text"></p>
        </div>
    </div>
</div>
</div> 

    `;
    displayField.appendChild(countryDiv)

}
const phoneLoadByName = data => {

    // console.log(country); 
    url = `https://openapi.programming-hero.com/api/phone/${data}`
    fetch(url)
        .then(res => res.json())
        .then(phone => displayPhoneDetail(phone.data));
}
