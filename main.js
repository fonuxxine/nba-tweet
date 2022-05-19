const searchForm = document.querySelector('form')
const searchResultDiv = document.querySelector('.search-result')
const container = document.querySelector('.container')
let searchQuery = '';
const APP_ID = '9a2e63f7';
const APP_key = '1c01fc5b9e81959107b882b7ec3525e9';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
});

async