const menuContainer = document.querySelector(".menuContainer");
const lineOneTag = document.querySelector(".lineOne");
const lineTwoTag = document.querySelector(".lineTwo");
const lineThreeTag = document.querySelector(".lineThree");
const listTag = document.getElementsByTagName("li");
const showOverlayTag = document.querySelector(".overlayMenu");

menuContainer.addEventListener("click", () => {
  if (menuContainer.classList.contains("isOpened")) {
    showOverlayTag.classList.remove("showOverlay");
    lineTwoTag.classList.remove("hideLineTwo");
    lineOneTag.classList.remove("rotatePlus");
    lineThreeTag.classList.remove("rotateMinus");
    menuContainer.classList.remove("isOpened");
    for (let i = 0; i < listTag.length; i++) {
      listTag[i].classList.remove("moveLiTagUp");
    }
  } else {
    showOverlayTag.classList.add("showOverlay");
    lineTwoTag.classList.add("hideLineTwo");
    lineOneTag.classList.add("rotatePlus");
    lineThreeTag.classList.add("rotateMinus");
    menuContainer.classList.add("isOpened");
    for (let i = 0; i < listTag.length; i++) {
      listTag[i].classList.add("moveLiTagUp");
    }
  }
});
