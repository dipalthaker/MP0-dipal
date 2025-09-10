require('./main.css');
require('./index.js');


document.addEventListener("DOMContentLoaded", function () {
  const githubLink = document.querySelector("a[href*='github']");
  if (githubLink) {
    githubLink.addEventListener("click", () => {
      alert("Opening Dipal's GitHub profile!");
    });
  }
});