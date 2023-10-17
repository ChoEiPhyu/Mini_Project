const inputTag = document.getElementsByClassName("inputTag")[0];
const productContainer = document.getElementsByClassName("productContainer")[0];

let productId = 1;
const handleChange = (event) => {
  const inputValue = event.target.value;
  let shoppingList = document.createElement("div");
  shoppingList.classList.add("shoppingList");
  let spanContainer = document.createElement("div");
  let spanTag = document.createElement("span");
  spanTag.classList.add("span");
  let productInput = productId.toString() + ". " + inputValue;
  spanTag.append(productInput);
  spanTag.id = productId;
  spanTag.addEventListener("click", () => {
    const exitDecorate = spanTag.classList.contains("decorate");
    if (exitDecorate) {
      spanTag.classList.remove("decorate");
    } else {
      spanTag.classList.add("decorate");
    }
  });
  //<i class="fa-solid fa-trash"></i>
  let iconContainer = document.createElement("div");
  let iconTag = document.createElement("i");
  iconTag.classList.add("fa-solid", "fa-trash");
  iconTag.addEventListener("click", () => {
    shoppingList.remove();
  });
  spanContainer.append(spanTag); //child div
  iconContainer.append(iconTag); //child div
  shoppingList.append(spanContainer, iconContainer); //parent div
  productContainer.append(shoppingList);
  inputTag.value = "";
  productId += 1;
};

inputTag.addEventListener("change", handleChange);
