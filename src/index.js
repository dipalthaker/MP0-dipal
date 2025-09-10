require('./main.css');



document.addEventListener("DOMContentLoaded", function () {
  const githubLink = document.querySelector("a[href*='github']");
  if (githubLink) {
    githubLink.addEventListener("click", () => {
      alert("Opening Dipal's GitHub profile!");
    });
  }
});
