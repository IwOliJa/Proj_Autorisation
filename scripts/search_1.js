const searchInp = document.querySelector("input");
searchInp.addEventListener("click", () => {
  createUrl();
});

function createUrl() {
  const url = "https://jsonplaceholder.typicode.com/albums";
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
  // for (let i = 0; i < jsonData.length; i++) {
  //   console.log(jsonData[i].title);
  // }
  jsonData.forEach((element) => {
    console.log(element.title);
  });
}
