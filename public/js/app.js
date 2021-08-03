console.log("Hello");

fetch("http://puzzle.mead.io/puzzle").then((data) => {
  data.json().then((result) => {
    console.log(result);
  });
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const p1 = document.querySelector('#m1')
const p2 = document.querySelector('#m2')



weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  p1.textContent = 'Loading...'
  p2.textContent = ''

  fetch('/weather?address='+ location).then((data) => {
    data.json().then((result) => {
      if (result.error) {
       p1.textContent = result.error
       p2.textContent = ''
        console.log(result.error);
      } else {
        p1.textContent = result.location
        p2.textContent = result.forcast
        // console.log(result.location);
        // console.log(result.forcast);
      }
    });
  });
});
