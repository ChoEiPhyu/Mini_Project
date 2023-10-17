const buttonTag = document.getElementById("button");
const imageTag = document.getElementsByClassName("image")[0];

const originalSrc = imageTag.src;
//ImageArray
const imageArray = [
  "https://images.unsplash.com/photo-1694370100731-0920b8f1085d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1695266392730-8867f816c817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1694431217622-67247f11aa38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1694594594401-82aa8102535b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

let counter = 0;
const myFunction = () => {
  if (counter == 4) {
    imageTag.src = originalSrc;
    counter = 0;
    return;
  }
  let imageSource = imageArray[counter];
  imageTag.src = imageSource;
  counter += 1;
  console.log("counter is :", counter);
};

buttonTag.addEventListener("click", myFunction);
