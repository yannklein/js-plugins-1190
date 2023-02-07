// //////////////////////
// Rehearsal
// //////////////////////
// // 1. Select elements (buttoon)
// const buttoon = document.querySelector("#click-me");

// // 2. Listen to a click on the buttoon
// buttoon.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM (change the inner text to  Loading.., make disabled)
//   event.currentTarget.innerText = "Loading...";
//   event.currentTarget.disabled = true;
// });


// //////////////////////
// HTTP GET request
// //////////////////////
// 1. Select elements (input, search, list)
const input = document.querySelector("#keyword");
const search = document.querySelector("#submit");
const list = document.querySelector("#results");

console.log("before the event listener");

// 2. Listen to a click on search btn
search.addEventListener("click", (event) => {
  console.log(event);
  console.log("button clicked")
  // Preventing the page from refreshing
  event.preventDefault();

  // 2.5 Fetch OMDB API (get the movies!)
  const keyword = input.value;
  const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log("data received")
      const movies = data.Search;
      list.innerHTML = "";
      movies.forEach((movie) => {
        // 3. Change the DOM (display the movies in the list)
        list.insertAdjacentHTML(
          "beforeend",
          `<li class='list-inline-item'>
            <img src="${movie.Poster}" alt="" />
            <p>${movie.Title}</p>
          </li>`);
      });
    })
  console.log("after the fetch code");
});



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