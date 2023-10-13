const searchInp = document.querySelector("input");
searchInp.addEventListener("click", () => {
  createUrl();
});

function reateUrl() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  console.log(url);
  fetchData(url);
}
async function fetchData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData.length);
  console.log(jsonData);
  findUserTitle(jsonData);
}

function findUserTitle(jsonData) {
  jsonData.forEach((element) => {
    console.log(element.title);
  });
}
