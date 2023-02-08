// //////////////////////
// Rehearsal
// //////////////////////

// 1. Select an element (button)
// const button = document.querySelector("#click-me");

// // 2. Listen to an event (click on button)
// button.addEventListener("click", (event) => {
//   // 3. Change the DOM (change the text of the button and disable it)
//   console.log(event);
//   event.currentTarget.innerText = "Loading...";
//   event.currentTarget.disabled = true;
// });


// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements (input, button, list)
const input = document.querySelector("#keyword");
const button = document.querySelector("#submit");
const list = document.querySelector("#results");

console.log("before event");
// 2. Listen to event (click on button)
button.addEventListener("click", (event) => {
  console.log(event);
  console.log("clicked");
  event.preventDefault();
  // 2.5 Fetch the OMDB API (get movies!)
  const url = `https://www.omdbapi.com/?s=${input.value}&apikey=48727053`;
  // const movies = fetch(url) NOT WORKING
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log("data arrives");
      console.log(data);
      const movies = data.Search;
      // 3. Change the DOM (display movies in the list)
      list.innerHTML = "";
      movies.forEach((movie) => {
        list.insertAdjacentHTML("beforeend", `
        <li class='list-inline-item'>
          <img src="${movie.Poster}" alt="" />
          <p>${movie.Title}</p>
        </li>
        `);
      });
      console.log("after change the dom");
    });
  console.log("after the fetch");
});
console.log("after the addEventListener");

// //////////////////////
// HTTP POST request
// //////////////////////
const signUp = (event) => {
  event.preventDefault()
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value
  
  const data = {"email": emailValue, "password": passwordValue};

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }
  
  fetch("https://reqres.in/api/register", options)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

// 1. select elements (form)
const form = document.querySelector("#form")
// 2. Litsen to a form submit
form.addEventListener("submit", signUp)