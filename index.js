import {
  url_1,
  url_2,
  url_3,
  nameInp,
  emailInp,
  input,
  loginBtn,
  body,
  pId,
  pName,
  pUsername,
  pEmail,
  pPhone,
  pWebsite,
  pMessage,
  // cardInfo,
} from "./scripts/utils.js";

body.append(pMessage);

loginBtn.addEventListener("click", () => {
  nameInp.value !== "" && emailInp.value !== ""
    ? createUrl()
    : (pMessage.innerText = "please fill in all fields!");
  clearInputs();

  function createUrl() {
    let entpoint = `?name=${nameInp.value}&email=${emailInp.value}`;
    let urlUserReq = `${url_1}${entpoint}`;
    // console.log(entpoint);
    // console.log(urlUserReq);
    fetchData(urlUserReq);
  }

  async function fetchData(urlUserReq) {
    const response = await fetch(urlUserReq);
    const jsonData = await response.json();

    // console.log(jsonData.length);
    jsonData.length !== 0
      ? createCard(jsonData)
      : (pMessage.innerText = "this user does not exist!");
    clearInputs();

    // console.log("this user does not exist!")
    console.log(jsonData);
  }

  function createCard(jsonData) {
    const str = JSON.stringify(jsonData).replace(/\[|\]/g, "");
    const objUser = JSON.parse(str);
    const cardInfo = document.createElement("div");
    cardInfo.classList = "card";
    cardInfo.append(pId, pName, pUsername, pEmail, pPhone, pWebsite);
    body.append(cardInfo);
    // console.log(objUser);
    // console.log(objUser.name);
    pId.innerText = `Id: ${objUser.id}`;
    pName.innerText = `Name: ${objUser.name}`;
    pUsername.innerText = `Username: ${objUser.username}`;
    pEmail.innerText = `Email: ${objUser.email}`;
    pPhone.innerText = `Phoune: ${objUser.phone}`;
    pWebsite.innerText = `Website: ${objUser.website}`;
    clearInputs();

    input.addEventListener("click", () => {
      pMessage.innerText = "";
      cardInfo.style.border = "none";
      cardInfoRemover();
    });
  }
});

function clearInputs() {
  nameInp.value = "";
  emailInp.value = "";
}

input.addEventListener("click", () => {
  pMessage.innerText = "";
  cardInfoRemover();
});

function cardInfoRemover() {
  pId.innerText = "";
  pName.innerText = "";
  pUsername.innerText = "";
  pEmail.innerText = "";
  pPhone.innerText = "";
  pWebsite.innerText = "";
}

///////////////////////////////////////////////////////////////////
// const arrAllInfo = Object.entries(objUser);
// console.log(arrAllInfo);
// for (let i = 0; i < arrAllInfo.length; i++) {
//   let p = document.createElement("p");
//   p.textContent = `${arrAllInfo[i][0]}: ${arrAllInfo[i][1]}`;
//   card.append(p);
// }
