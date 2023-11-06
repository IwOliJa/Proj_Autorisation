import {
  url_1,
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
} from "./utils.js";

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
}

function createSearchButton() {
  const searchBtn = document.createElement("button");
  searchBtn.textContent = "SEARCH";
  body.append(searchBtn);
  searchBtn.addEventListener("click", () => {
    document.location.href =
      "http://127.0.0.1:5501/Proj_Autorisation/buttons.html";
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

  const regSymb = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i;

  editBtn.addEventListener("click", () => {
    if (editInput.value === "") {
      pMessage.innerText = "please fill in all fields!";
      pMessage.style.color = "red";
    } else if (!validation(regSymb, editInput.value)) {
      pMessage.innerText = "data is not correct, try again!";
      pMessage.style.color = "red";
    } else {
      pWebsite.innerText = `Website: ${editInput.value}`;
      saveWebsite(editInput);
    }
  });
}
function validation(regSymb, editInput) {
  return regSymb.test(editInput);
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
