// //////////////////////
// Rehearsal
// //////////////////////

// // 1. Select elements (button)
// const button = document.querySelector("#click-me");
// // 2. Listen to an event (click on the button)
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM (innerText, .disabled)
//   const clickedElement = event.currentTarget;
//   clickedElement.innerText = "Loading...";
//   clickedElement.disabled = true;
// }); 

// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements (input, search, results)
const input = document.querySelector("#keyword");
const search = document.querySelector("#submit");
const results = document.querySelector("#results");
console.log("start");
// 2. Listen to a click on search
search.addEventListener("click", (event) => {
  console.log("after click");
  // console.log(event);
  event.preventDefault(); // prevent the default reload of the page
  // 2.5 Fetch the OMDBAPI
  const url = `https://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log("get data");
      console.log(data);
      // 3. Change the DOM (display movies in the results)
      const movies = data.Search;
      results.innerHTML = "";
      movies.forEach((movie) => {
        results.insertAdjacentHTML(
          "beforeend",
          `<li class='list-inline-item'>
            <img src="${movie.Poster}" alt="" />
            <p>${movie.Title}</p>
          </li>`);
      });
    });
    console.log("after fetch");
});

console.log("end of the code");

// //////////////////////
// HTTP POST request
// //////////////////////

// the structure of data is defined by the API doc

const signUp = (event) => {
  const data = {"email": emailValue, "password": passwordValue};
  
  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }
  
  // JSON.stringify --> turning some JS code to JSON
  
  event.preventDefault()
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value
  fetch("https://reqres.in/api/register", options)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

const form = document.querySelector("#form")
form.addEventListener("submit", signUp);
