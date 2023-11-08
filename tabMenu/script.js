const tabMenuTab = document.getElementsByClassName(".tabMenu")[0];
const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");
const showTextTag = document.querySelector(".showText");

const tabs = ["Home", "Services", "About Us", "Contact Us", "Login Services"];

handleChange = (event) => {
  const liTagId = event.target.id;
  const liTagDiv = document.getElementById(liTagId);
  const liTagWidth = liTagDiv.offsetWidth + "px";
  const liTagOffSetLeft = liTagDiv.offsetLeft;
  sliderTag.style.width = liTagWidth;
  sliderTag.style.transform = `translateX(${liTagOffSetLeft}px)`;
};
showOrNotShow = (event) => {
  if (event.target.id == 0) {
    showTextTag.innerHTML = "";
    const showHome = document.createElement("div");
    showHome.append(" Home Page");
    showTextTag.append(showHome);
    showTextTag.classList.add("showing");
  }
  if (event.target.id == 1) {
    showTextTag.innerHTML = "";
    showTextTag.classList.remove("showing");
    const showServices = document.createElement("div");
    showServices.append("Service Page");
    showTextTag.append(showServices);
    showTextTag.classList.add("showing");
  }
  if (event.target.id == 2) {
    showTextTag.innerHTML = "";
    showTextTag.classList.remove("showing");
    const showAbout = document.createElement("div");
    showAbout.append(" About Page");
    showTextTag.append(showAbout);
    showTextTag.classList.add("showing");
  }
  if (event.target.id == 3) {
    showTextTag.innerHTML = "";
    showTextTag.classList.remove("showing");
    const showContact = document.createElement("div");
    showContact.append("Contact Page");
    showTextTag.append(showContact);
    showTextTag.classList.add("showing");
  }
  if (event.target.id == 4) {
    showTextTag.innerHTML = "";
    showTextTag.classList.remove("showing");
    const showLogin = document.createElement("div");
    showLogin.append(" Login Page");
    showTextTag.append(showLogin);
    showTextTag.classList.add("showing");
  }
};

for (let i = 0; i < tabs.length; i++) {
  const liTag = document.createElement("li");
  liTag.append(tabs[i].toUpperCase());
  liTag.id = i;
  ulTag.append(liTag);
  liTag.addEventListener("click", handleChange);
  liTag.addEventListener("click", showOrNotShow);
  if (i == 0) {
    sliderTag.style.width = liTag.offsetWidth + "px";
  }
}
