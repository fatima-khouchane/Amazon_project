import { data } from "./data.js";

console.log("Chargement du panier...");

let cartArray = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.querySelector(".container");

if (cartArray.length === 0) {
  cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
} else {
  cartContainer.innerHTML = ""; // Vider le conteneur avant d'ajouter les éléments
  cartArray.forEach((cartItem) => {
    const productId = Number(cartItem.id);
    const matchingProduct = data.find((dataItem) => dataItem.id === productId);

    if (!matchingProduct) {
      console.warn(`Produit non trouvé pour l'ID: ${productId}`);
      return;
    }

    console.log("Produit trouvé :", matchingProduct);

    cartContainer.innerHTML += `
      <div class="js-cart-item cart-item-container" data-cart-item-id="${productId}">
        <div class="delivery-date">
          Delivery date: <span class="js-delivery-date">Friday, February 21</span>
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image" src="${matchingProduct.src}" alt="${matchingProduct.name}">

          <div class="cart-item-details">
            <div class="product-name">${matchingProduct.name}</div>
            <div class="product-price">${matchingProduct.priceCents}</div>

            <div class="js-quantity-container product-quantity">
              Quantity: <span class="js-quantity-label">${cartItem.qte}</span>
             
              <span class="js-update-quantity-link link-primary">Update</span>
              <span class="js-delete-quantity-link link-primary">Delete</span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">Choose a delivery option:</div>
            <div class="js-delivery-option delivery-option">
              <input type="radio" checked> <span>FREE Shipping</span>
            </div>
            <div class="js-delivery-option delivery-option">
              <input type="radio"> <span>$4.99 - Fast Shipping</span>
            </div>
          </div>
        </div>
      </div>`;
  });
}
