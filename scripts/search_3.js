const searchInp = document.querySelector("input");
searchInp.addEventListener("click", () => {
  createUrl();
});

const createUrl = function () {
  const url = "https://jsonplaceholder.typicode.com/posts";
  console.log(url);
  return fetchData(url);
};

async function fetchData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
}
