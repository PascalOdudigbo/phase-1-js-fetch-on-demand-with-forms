const init = () => {
  const form = document.querySelector("form");
  const usrInput = document.getElementById("searchByID")
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fetchData(usrInput.value);
  })
}

const fetchData = function(input){
    fetch(`http://localhost:3000/movies/${input}`)
    .then(response => response.json())
    .then (data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
    })
}

document.addEventListener('DOMContentLoaded', init);