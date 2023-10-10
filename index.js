import {
  url_1,
  url_2,
  url_3,
  nameInp,
  emailInp,
  inputs,
  loginBtn,
  body,
  pId,
  pName,
  pUsername,
  pEmail,
  pPhone,
  pWebsite,
  pMessage,
} from "./scripts/utils.js";

const editBtn = document.createElement("button");
body.append(pMessage);
pMessage.style.color = "red";
const cardInfo = document.createElement("div");
cardInfo.classList = "card";

console.log(inputs);
loginBtn.addEventListener("click", () => {
  inpValReading();
  clearInputs();
});

function inpValReading() {
  nameInp.value !== "" && emailInp.value !== ""
    ? createUrl()
    : (pMessage.innerText = "please fill in all fields!");

  inputs.forEach((input) => {
    input.addEventListener("click", () => {
      messageRemover();
    });
  });

  // nameInp.addEventListener("click", () => {
  //   messageRemover();
  // });
  // emailInp.addEventListener("click", () => {
  //   messageRemover();
  // });
}

function createUrl() {
  let entpoint = `?name=${nameInp.value}&email=${emailInp.value}`;
  let urlUserReq = `${url_1}${entpoint}`;
  // console.log(entpoint);
  // console.log(urlUserReq);
  return fetchData(urlUserReq);
}

async function fetchData(urlUserReq) {
  const response = await fetch(urlUserReq);
  const jsonData = await response.json();

  // console.log(jsonData.length);
  jsonData.length /*!== 0*/
    ? createCardData(jsonData)
    : (pMessage.innerText = "this user does not exist!");
  console.log(jsonData);
}

async function createCardData(jsonData) {
  const str = JSON.stringify(jsonData).replace(/\[|\]/g, "");
  const objUser = await JSON.parse(str);
  createCard(objUser);
  createSearchButton();
  // console.log(objUser);
  // console.log(objUser.name);
}

function createCard(objUser) {
  loginBtn.style.display = "none";
  pId.innerText = `Id: ${objUser.id}`;
  pName.innerText = `Name: ${objUser.name}`;
  pUsername.innerText = `Username: ${objUser.username}`;
  pEmail.innerText = `Email: ${objUser.email}`;
  pPhone.innerText = `Phoune: ${objUser.phone}`;
  pWebsite.innerText = `Website: ${objUser.website}`;
  pMessage.innerText = "click website to edit or search!";
  pMessage.style.color = "green";
  cardInfo.append(pId, pName, pUsername, pEmail, pPhone, pWebsite, pMessage);
  body.append(cardInfo);

  pWebsite.addEventListener("click", () => {
    pMessage.innerText = "";
    editWebsite(objUser);
  });

  inputs.forEach((input) => {
    input.addEventListener("click", () => {
      cardInfo.style.display = "none";
    });
  });
  // nameInp.addEventListener("click", () => {
  //   cardInfo.style.display = "none";
  //   // cardInfoRemover(cardInfo);
  // });

  // emailInp.addEventListener("click", () => {
  //   cardInfo.style.display = "none";
  //   // cardInfoRemover(cardInfo);
  // });
}

function createSearchButton() {
  const searchBtn = document.createElement("button");
  searchBtn.textContent = "SEARCH";
  body.append(searchBtn);
  searchBtn.addEventListener("click", () => {
    document.location.href =
      "http://127.0.0.1:5500/Proj_Autorisation/search.html";
  });
}

function editWebsite(objUser) {
  pWebsite.innerText = "";
  const editInput = document.createElement("input");
  cardInfo.append(editInput);
  editInput.value = objUser.website;
  editBtn.textContent = "save data";
  cardInfo.append(editBtn);
  pMessage.innerText = "please enter new data!";
  pMessage.style.color = "green";
  cardInfo.append(pMessage);

  editBtn.addEventListener("click", () => {
    pWebsite.innerText = `Website: ${editInput.value}`;
    saveWebsite(editInput);
  });
}

function saveWebsite(editInput) {
  editBtn.style.display = "none";
  editInput.style.display = "none";
  pWebsite.style.pointerEvents = "none";
  pMessage.innerText = "";
}

function messageRemover() {
  pMessage.innerText = "";
  location.reload(false);
}

function clearInputs() {
  nameInp.value = "";
  emailInp.value = "";
}

// function cardInfoRemover(cardInfo) {
//   cardInfo.style.display = "none";
//   pId.innerText = "";
//   pName.innerText = "";
//   pUsername.innerText = "";
//   pEmail.innerText = "";
//   pPhone.innerText = "";
//   pWebsite.innerText = "";
//   location.reload(false);
// }
