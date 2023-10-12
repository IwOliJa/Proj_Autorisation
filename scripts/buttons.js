const albumsBtn = document.querySelector(".albums");
const todosBtn = document.querySelector(".todos");
const postsBtn = document.querySelector(".posts");

albumsBtn.addEventListener("click", () => {
  document.location.assign(
    "http://127.0.0.1:5500/Proj_Autorisation/search_1.html"
  );
});
todosBtn.addEventListener("click", () => {
  document.location.assign(
    "http://127.0.0.1:5500/Proj_Autorisation/search_2.html"
  );
});
postsBtn.addEventListener("click", () => {
  document.location.assign(
    "http://127.0.0.1:5500/Proj_Autorisation/search_3.html"
  );
});

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     document.location.assign(
//       "http://127.0.0.1:5500/Proj_Autorisation/searchInput.html"
//     );
//   });
// });
