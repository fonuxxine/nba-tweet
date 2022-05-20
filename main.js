const searchForm = document.querySelector('form')
const searchResultDivDes = document.querySelector('.des')
const searchResultDiv = document.querySelector('.wine-search-box')
const container = document.querySelector('.container')
let searchQuery = '';
const APP_key = 'd6c482d892e8481d85c13aa1ba0328cd';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI(){
    const baseURL = `https://api.spoonacular.com/food/wine/pairing?apiKey=${APP_key}&food=${searchQuery}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data);
    console.log(data);
}

function generateHTML(results){
    container.classList.remove('initial');
    let generatedHTML0 = `<p class="description">${results.pairingText}</p>`;
    let generatedHTML = '';
    results.productMatches.map(result => {
        generatedHTML +=
        `
        <div class="item">
            <img src=${result.imageUrl} alt="">
            <div class="flex-container">
                <h1 class="title">${result.title}</h1>
                <a class='view-button' href="${result.link}">Purchase</a>
            </div>
            <p class="item-data">Price: ${result.price}</p>
            <p class="item-data">Rating: ${result.ratingCount}</p>
            <p class="item-data">Score: ${result.score.toFixed(2)}</p>
        </div>
        `
    })
    searchResultDivDes.innerHTML = generatedHTML0;
    searchResultDiv.innerHTML = generatedHTML;
}