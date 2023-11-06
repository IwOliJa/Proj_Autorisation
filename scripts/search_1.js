const searchInp = document.querySelector("input");
const body = document.querySelector("body");
const titleCard = document.createElement("div");
body.append(titleCard);

searchInp.addEventListener("click", () => {
  const url = "https://jsonplaceholder.typicode.com/albums";
  // console.log(url);
  fetchData(url);
});

async function fetchData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  // console.log(jsonData.length);
  // console.log(jsonData);
  createTitleCard(jsonData);
  return jsonData;
}

function createTitleCard(jsonData) {
  jsonData.forEach((element) => {
    const p = document.createElement("p");
    titleCard.append(p);
    p.innerText = element.title;
    titleCard.className = "title_card";
    // console.log(element.title);
    let listOfItems = document.querySelectorAll("p");
    // console.log(listOfItems);
    foundTitle(listOfItems);
  });
}

function foundTitle(listOfItems) {
  searchInp.addEventListener("input", async (event) => {
    let value = await event.target.value;
    // console.log(value);
    if (value != "") {
      listOfItems.forEach((elem) => {
        if (elem.innerText.search(value) == -1) {
          elem.classList.add("hide");
          elem.innerHTML = elem.innerText;
        } else {
          elem.classList.remove("hide");
          let str = elem.innerText;
          let pos = elem.innerText.search(value);
          let leng = value.length;
          elem.innerHTML = colorItems(str, pos, leng);
        }
      });
    } else {
      listOfItems.forEach((elem) => {
        elem.classList.remove("hide");
        elem.innerHTML = elem.innerText;
      });
    }
  });
}

function colorItems(str, pos, leng) {
  return (
    str.slice(0, pos) +
    "<mark>" +
    str.slice(pos, pos + leng) +
    "</mark>" +
    str.slice(pos + leng)
  );
}
