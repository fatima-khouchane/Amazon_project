let products = document.querySelector(".products");
import { addCart, cartArray } from "./cart.js";
import { data } from "./data.js";

data.forEach((item) => {
  let selectOptions = "";
  for (let i = 1; i < 9; i++) {
    selectOptions += `<option>${i}</option>`;
  }

  products.innerHTML += `
    <div class="cart">
      <div class="img-product">
        <img src="${item.src}" alt="${item.name}" />
      </div>
      <p>${item.name}</p>
      <span>${item.stars}</span>
      <select class="qte-selector" data-id="${item.id}">
        ${selectOptions}
      </select>
      <p class="confirm" data-id="${item.id}" style="color:green"></p>
      <button class="btn-add" data-id="${item.id}">Add to Cart</button>
    </div>
  `;
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".numOreders").innerHTML = "0";

  document.querySelectorAll(".btn-add").forEach((button) => {
    button.addEventListener("click", () => {
      let productId = button.dataset.id;
      addCart(productId);
    });
  });
});

