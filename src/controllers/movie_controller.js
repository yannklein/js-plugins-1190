import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'results', 'keyword' ]

  connect() {
    console.log('Hello from movie_controller.js')
    // console.log(this.testTarget)
    this.fetchOmdbAPI("matrix");
  }

  displayMovies(movies) {
    // const results = document.querySelector("#results");
    this.resultsTarget.innerHTML = "";
    movies.forEach((movie) => {
      results.insertAdjacentHTML(
        "beforeend",
        `<li class='list-inline-item'>
        <img height=100 src="${movie.Poster}" alt="" />
        </li>`
        );
      });
  };
    
  fetchOmdbAPI(title) {
      const url = `https://www.omdbapi.com/?s=${title}&apikey=adf1f2d7`;
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.Search;
        this.displayMovies(movies);
    });
  };
  
  searchMovies(event) {
    // const input = document.querySelector("#keyword");
    event.preventDefault(); // prevent the default reload of the page
    this.fetchOmdbAPI(this.keywordTarget.value);
  };
}