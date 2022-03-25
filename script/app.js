
const container = document.querySelector ('.container');
const movieTitle = document.querySelector ('.userInputTitle');
const moviePosterUrl = document.querySelector ('.userInputPosterUrl');
const movieYear = document.querySelector ('.userInputYear');
const btn = document.querySelector ('.button');
const movieTitleToDisplay = document.querySelector ('.favouritMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

console.log(titleInStorage);
console.log(imageUrlInStorage);
console.log(yearInStorage);

if(titleInStorage && imageUrlInStorage && yearInStorage){
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(39, 39, 85, 0.63), rgba(87, 50, 50, 0.568)),
    url('${imageUrlInStorage}')`;
    movieYear.textContent = yearInStorage;


}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title',movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year',movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(39, 39, 85, 0.63), rgba(87, 50, 50, 0.568)),
    url('${posterUrlInput}')`;
    movieYear.textContent = movieYearInput;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYear.value = '';

});
