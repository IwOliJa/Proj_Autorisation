const searchInp = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.location.assign(
      "http://127.0.0.1:5500/Proj_Autorisation/searchInput.html"
    );
  });
});
