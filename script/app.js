
const container = document.querySelector ('.container');
const movieTitle = document.querySelector ('.userInputTitle');
const moviePosterUrl = document.querySelector ('.userInputPosterUrl');
const btn = document.querySelector ('.button');
const movieTitleToDisplay = document.querySelector ('.favouritMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');

console.log(titleInStorage);
console.log(imageUrlInStorage);

if(titleInStorage && imageUrlInStorage){
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(39, 39, 85, 0.63), rgba(87, 50, 50, 0.568)),
    url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem('title',movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(39, 39, 85, 0.63), rgba(87, 50, 50, 0.568)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
});
